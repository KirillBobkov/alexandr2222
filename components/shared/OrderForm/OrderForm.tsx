import { useState } from "react";
import { Input } from "../Input/Input";
import { FormValidator } from "../FormValidator/FormValidator";
import { VisibilityManager } from "../VisibilityManager";
import {
  validateName,
  validatePhone,
  validateEmail,
} from "../../../utils/validation";
import styles from "./OrderForm.module.css";

interface OrderFormProps {
  onPaymentSubmit?: (formData: any) => void;
  title?: string;
  description?: string;
  price?: string;
  tariff?: string;
}

export const OrderForm = ({ 
  onPaymentSubmit, 
  title = "Оформление заказа",
  price = "4990₽",
  tariff = "base",
  description = "Оставьте контакты для отправки материалов курса. Они будут отправлены на почту в течение 24 часов после оплаты."
}: OrderFormProps) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [message, setMessage] = useState("");
  const [isRedirecting, setIsRedirecting] = useState(false);

  const handlePayment = async (formData: any) => {
    const { email, phone, name } = formData;
    setIsRedirecting(true);
    try {
      const res = await fetch("https://absurdly-natty-puffin.cloudpub.ru/api/payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          phone: phone,
          name: name,
          tariff,
        }),
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();
      console.log(data);
      if (data?.payment?.confirmation?.confirmation_url) {
        setTimeout(() => {
          window.location.href = data.payment.confirmation.confirmation_url;
        }, 0);
      } else {
        throw new Error(`Confirmation URL not found in response`);
      }
    } catch (error) {
      console.error("Failed to process payment:", error);
      setIsRedirecting(false);
      setMessage("error");
    }
  };

  const fieldsConfig = [
    {
      name: "name",
      type: "text",
      required: true,
      validator: validateName,
    },
    {
      name: "email",
      type: "text",
      required: true,
      validator: validateEmail,
    },
    {
      name: "phone",
      type: "phone",
      required: true,
      validator: validatePhone,
    },
    {
      name: "agreement",
      type: "checkbox",
      required: true,
      defaultValue: false,
    },
  ];

  const handleSubmit = (formData: any) => {
    handlePayment(formData);
    setIsSubmitted(true);
  };

  return (
    <div className={styles.orderFormContainer}>
      <div className={styles.orderFormHeader}>
        <h2 className={styles.orderFormTitle}>{title}</h2>
        <p className={styles.orderFormPrice}>{price}</p>
        <div className={styles.orderFormDescription}>
          {description}
        </div>
      </div>

      <div className={styles.orderFormContent}>
        <FormValidator
          fields={fieldsConfig}
          isSubmitted={isSubmitted}
          setIsSubmitted={setIsSubmitted}
          onSubmit={handleSubmit}
        >
          {({
            formData,
            errors,
            handleChange,
            handleSubmit,
            isSubmitted,
          }) => (
            <form onSubmit={handleSubmit} className={styles.orderForm}>
              <div className={styles.orderFormInput}>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Имя"
                  animated={false}
                  error={errors.name}
                  disabled={isSubmitted}
                />
              </div>
              <div className={styles.orderFormInput}>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  animated={false}
                  error={errors.email}
                  disabled={isSubmitted}
                />
              </div>
              <div className={styles.orderFormInput}>
                <Input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Номер телефона"
                  animated={false}
                  error={errors.phone}
                  disabled={isSubmitted}
                />
              </div>
              <div
                style={{
                  opacity: formData.agreement ? 1 : 0.5,
                  pointerEvents: formData.agreement ? "auto" : "none",
                  transition: "opacity 0.3s ease",
                  width: "100%",
                  flex: "1 0 100%",
                }}
              >
                <button
                  type="submit"
                  disabled={!formData.agreement || isSubmitted}
                  className={styles.submitOrderButton}
                >
                  <span>Оплатить</span>
                </button>
              </div>
              <div className={styles.agreementCheckbox}>
                <input
                  type="checkbox"
                  id="offer-checkbox-orderform"
                  name="agreement"
                  checked={formData.agreement}
                  onChange={handleChange}
                  className={`${styles.agreementCheckboxInput} ${
                    errors.agreement ? styles.agreementCheckboxError : ""
                  }`}
                  disabled={isSubmitted}
                />
                <label
                  htmlFor="offer-checkbox-orderform"
                  className={styles.agreementCheckboxLabel}
                  style={{ opacity: isSubmitted ? 0.5 : 1 }}
                >
                  Подтверждаю, что ознакомлен с{" "}
                  <a
                    href="/oferta.txt"
                    target="_blank"
                    className={styles.termsOfferLink}
                  >
                    офертой
                  </a>
                </label>
              </div>
              {isRedirecting ? (
                <VisibilityManager side="bottom" className={styles.redirectingLoader}>
                  <div className={styles.spinner}></div>
                  <p>Переходим на страницу оплаты...</p>
                </VisibilityManager>
              ) : null}
              {message ? (
                <VisibilityManager style={{ marginTop: 0 }}>
                  {message === "error" ? (
                    <p className={styles.errorMessage}>
                      Какие-то технические неполадки. Свяжитесь, пожалуйста, со мной в Телеграм по{" "}
                      <a
                        target="_blank"
                        href="https://t.me/Z44LP"
                        style={{
                          color: "var(--accent)",
                          fontWeight: "bold",
                          cursor: "pointer",
                        }}
                      >
                        ссылке
                      </a>
                    </p>
                  ) : null}
                </VisibilityManager>
              ) : null}
            </form>
          )}
        </FormValidator>
      </div>
    </div>
  );
}; 
import { useState } from "react";
import { Input } from "../Input/Input";
import { FormValidator } from "../FormValidator/FormValidator";
import { VisibilityManager } from "../VisibilityManager";
import { validateEmail, validateName, validatePhone } from "../../../utils/validation";
import styles from "./OrderForm.module.css";

interface OrderFormProps {
  onPaymentSubmit?: (formData: unknown) => void;
  title?: string;
  description?: string;
  price: string;
  tariff: string;
}

export const OrderForm = ({
  title = "Оформление заказа",
  price,
  tariff,
  description = "Оставьте контакты для отправки материалов курса. Они будут отправлены на почту в течение 24 часов после оплаты.",
}: OrderFormProps) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [message, setMessage] = useState("");
  const [isRedirecting, setIsRedirecting] = useState(false);

  const handlePayment = async (formData: unknown) => {
    const data = formData as { email: string; phone: string; name: string };
    setIsRedirecting(true);

    try {
      const fetchPromise = fetch("https://6ce8d736a9b6.vps.myjino.ru/api/payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: data.email,
          phone: data.phone,
          name: data.name,
          tariff,
        }),
      });

      const timeoutPromise = new Promise<never>((_, reject) =>
        setTimeout(() => reject(new Error("Request timed out after 20 seconds")), 20000),
      );

      const res = (await Promise.race([fetchPromise, timeoutPromise])) as Response;

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const responseData = await res.json();
      if (responseData?.payment?.confirmation?.confirmation_url) {
        window.location.href = responseData.payment.confirmation.confirmation_url;
      } else {
        throw new Error("Confirmation URL not found in response");
      }
    } catch (error) {
      console.error("Failed to process payment:", error);
      setIsRedirecting(false);
      setMessage("error");
    }
  };

  const fieldsConfig = [
    { name: "name", type: "text" as const, required: true, validator: validateName },
    { name: "email", type: "text" as const, required: true, validator: validateEmail },
    { name: "phone", type: "phone" as const, required: true, validator: validatePhone },
    { name: "agreement", type: "checkbox" as const, required: true, defaultValue: false },
  ];

  const handleSubmit = (formData: unknown) => {
    handlePayment(formData);
    setIsSubmitted(true);
  };

  const buttonContainerStyle = {
    opacity: 0.7,
    pointerEvents: "none" as const,
    transition: "opacity 0.3s ease",
    width: "100%",
    flex: "1 0 100%",
  };

  const linkStyle = {
    color: "var(--accent)",
    fontWeight: "bold",
    cursor: "pointer",
  };

  return (
    <div className={styles.orderFormContainer}>
      <div className={styles.orderFormHeader}>
        <h2 className={styles.orderFormTitle}>{title}</h2>
        <p className={styles.orderFormPrice}>{price}</p>
        <div className={styles.orderFormDescription}>{description}</div>
      </div>

      <div className={styles.orderFormContent}>
        <FormValidator
          fields={fieldsConfig}
          isSubmitted={isSubmitted}
          setIsSubmitted={setIsSubmitted}
          onSubmit={handleSubmit}
        >
          {({ formData, errors, handleChange, handleSubmit, isSubmitted: formSubmitted }) => (
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
                  disabled={formSubmitted}
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
                  disabled={formSubmitted}
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
                  disabled={formSubmitted}
                />
              </div>
              <div
                style={{
                  ...buttonContainerStyle,
                  opacity: formData.agreement ? 1 : 0.7,
                  pointerEvents: formData.agreement ? "auto" : "none",
                }}
              >
                <button
                  type="submit"
                  disabled={!formData.agreement || formSubmitted}
                  className={styles.submitOrderButton}
                >
                  {isRedirecting && <div className={styles.loader} />}
                  <span>{isRedirecting ? "На страницу оплаты..." : "Оплатить"}</span>
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
                  disabled={formSubmitted}
                />
                <label
                  htmlFor="offer-checkbox-orderform"
                  className={styles.agreementCheckboxLabel}
                  style={{ opacity: formSubmitted ? 0.5 : 1 }}
                >
                  Подтверждаю, что ознакомлен с{" "}
                  <a href="/oferta.txt" target="_blank" className={styles.termsOfferLink}>
                    офертой
                  </a>
                </label>
              </div>
              {message === "error" && (
                <VisibilityManager style={{ marginTop: 0 }}>
                  <p className={styles.errorMessage}>
                    Какие-то технические неполадки. Свяжитесь, пожалуйста, со мной в
                    Телеграм по{" "}
                    <a target="_blank" href="https://t.me/Z44LP" style={linkStyle}>
                      ссылке
                    </a>
                  </p>
                </VisibilityManager>
              )}
            </form>
          )}
        </FormValidator>
      </div>
    </div>
  );
};
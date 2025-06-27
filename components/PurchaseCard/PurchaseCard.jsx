import { useState } from "react";
import Image from "next/image";

import { Input } from "../shared/Input/Input";
import { FormValidator } from "../shared/FormValidator/FormValidator";
import {
  validateName,
  validatePhone,
  validateEmail,
} from "../../utils/validation";
import finalStyles from "../../styles/finalContent.module.css";
import styles from "./PurchaseCard.module.css";
import purchaseCardImage from "../../images/purchase.webp";
import { VisibilityManager } from "../shared/VisibilityManager";

export const PurchaseCard = ({ onPaymentSubmit }) => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [message, setMessage] = useState("");
  const [isRedirecting, setIsRedirecting] = useState(false);

  const handlePayment = async (formData) => {
    const { email, phone, name } = formData;
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
        }),
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();
      console.log(data);
      if (data?.payment?.confirmation?.confirmation_url) {
        setIsRedirecting(true);
        window.location.href = data.payment.confirmation.confirmation_url;
      } else {
        throw new Error(`Confirmation URL not found in response`);
      }
    } catch (error) {
      console.error("Failed to process payment:", error);
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

  const handleAcquireClick = () => {
    setIsFormVisible(true);
  };

  const handleBackClick = () => {
    setIsFormVisible(false);
  };

  const handleSubmit = (formData) => {
    handlePayment(formData);
    setIsSubmitted(true);
  };

  return (
    <div className={styles.purchaseCardWrapper}>
      <div className={styles.purchaseCardContainer}>
        <div className={styles.slidingViewsContainer}>
          <div
            className={`${styles.productView} ${
              isFormVisible ? styles.productViewHidden : ""
            }`}
          >
            <Image
              src={purchaseCardImage}
              alt=""
              className={styles.backgroundImage}
              priority
            />
            <h2
              className={finalStyles.title + " " + styles.title}
              style={{ textAlign: "center", marginTop: "0", marginBottom: "0" }}
            >
              Стоимость курса
            </h2>
            <div className={finalStyles.price}>5 990 ₽</div>
            <div className={styles.productDescription}>
              <p>
                Доступ к курсу навсегда — никакой спешки: возвращайтесь к урокам
                в любое время
              </p>
              <p>
                Всего 5990₽ за полный курс вместо многомесячных программ или
                консультаций
              </p>
              <p>
                Материалы курса будут отправлены на почту в течение 24 часов
                после оплаты.
              </p>
            </div>
            <button
              onClick={handleAcquireClick}
              className={styles.submitOrderButton}
              style={{ width: "auto" }}
            >
              <span>Приобрести курс</span>
            </button>
          </div>

          <div
            className={`${styles.orderFormView} ${
              isFormVisible ? styles.orderFormVisible : ""
            }`}
          >
            <button
              onClick={handleBackClick}
              className={styles.backToProductButton}
            >
              <svg
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 18L9 12L15 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <div className={styles.orderFormContent}>
              {/* Левая часть - заголовок и описание */}
              <div className={styles.orderFormLeftSection}>
                <h2 className={finalStyles.title + " " + styles.orderFormTitle}>
                  Оформление заказа
                </h2>
                <div className={styles.orderFormDescription}>
                  Оставьте контакты для отправки материалов курса. Они будут
                  отправлены на почту в течение 24 часов после оплаты.
                </div>
              </div>

              {/* Правая часть - форма */}
              <div className={styles.orderFormRightSection}>
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
                          <span>
                            Оплатить
                          </span>
                        </button>
                      </div>
                      <div className={styles.agreementCheckbox}>
                        <input
                          type="checkbox"
                          id="offer-checkbox-purchase"
                          name="agreement"
                          checked={formData.agreement}
                          onChange={handleChange}
                          className={`${styles.agreementCheckboxInput} ${
                            errors.agreement
                              ? styles.agreementCheckboxError
                              : ""
                          }`}
                          disabled={isSubmitted}
                        />
                        <label
                          htmlFor="offer-checkbox-purchase"
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
                            <p>
                              Что-то пошло не так. Свяжитесь, пожалуйста, со
                              мной в Телеграм по{" "}
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
          </div>
        </div>
      </div>
    </div>
  );
};

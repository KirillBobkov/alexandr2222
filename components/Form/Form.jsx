import React, { useState } from "react";
import { Input } from "../shared/Input/Input";
import styles from "./Form.module.css";
import { LineAnimation } from "../LineAnimation/LineAnimation";
import { VisibilityManager } from "../shared/VisibilityManager";
import { FormValidator } from "../shared/FormValidator/FormValidator";
import contentStyles from "../../styles/contentStyles.module.css";
import { validateName, validatePhone } from "../../utils/validation";

export function Form({
  isSubmitted,
  setIsSubmitted,
  type = "",
  title,
  description,
  animation,
}) {
  const [message, setMessage] = useState("");
  const id = type;

  const fieldsConfig = [
    {
      name: 'name',
      type: 'text',
      required: true,
      validator: validateName
    },
    {
      name: 'phone',
      type: 'phone', 
      required: true,
      validator: validatePhone
    },
    {
      name: 'checkbox',
      type: 'checkbox',
      required: true,
      defaultValue: false
    }
  ];

  const handleSend = async (formData) => {
    try {
      const token = "7733350115:AAE6tcQZc-R2bRw8ewLKwvtiS3UKHTcgV9c";
      const chat_id = "-1002359699160";
      const url = `https://api.telegram.org/bot${token}/sendMessage`;
      const isMobileDevice =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          typeof window !== "undefined" ? window.navigator.userAgent : ""
        );

      const deviceType = isMobileDevice ? "Смартфон" : "Компьютер";

      await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
        },
        body: JSON.stringify({
          chat_id,
          parse_mode: "html",
          text: `📋 <b>НОВАЯ ЗАПИСЬ НА КОНСУЛЬТАЦИЮ</b>

📍 <b>Откуда</b>: ${type ?? "Поле отсутствует"}
👤 <b>Имя</b>: ${formData.name}
📞 <b>Телефон</b>: ${formData.phone}
💻 <b>Тип устройства</b>: ${deviceType}
⏰ <b>Время</b>: ${new Date().toLocaleString('ru-RU')}`,
        }),
      });

      setMessage("success");
    } catch (error) {
      setMessage("error");
    }
  };

  const content = (
    <div className={styles.form + ((title || description) ? " " + styles['form--two-items'] : "")}>
      {(title || description) ? (
        <VisibilityManager side="left" className={styles.form_content}>
          <h3 className={contentStyles.title_middle}>{title}</h3>
          <p className={styles.textDescription}>{description}</p>
        </VisibilityManager>
      ) : null}

      <FormValidator
        fields={fieldsConfig}
        isSubmitted={isSubmitted}
        setIsSubmitted={setIsSubmitted}
        onSubmit={handleSend}
      >
        {({ formData, errors, handleChange, handleSubmit, isSubmitted }) => (
          <form onSubmit={handleSubmit} className={styles.form__item}>
            <div className={styles.form_elem}>
              <Input
                type="text"
                name="name"
                placeholder="Введите ваше имя"
                value={formData.name}
                onChange={handleChange}
                disabled={isSubmitted}
                error={errors.name}
              />
            </div>
            <div className={styles.form_elem}>
              <Input
                type="tel"
                name="phone"
                placeholder="Введите ваш номер телефона"
                value={formData.phone}
                onChange={handleChange}
                disabled={isSubmitted}
                error={errors.phone}
              />
            </div>
            <div
              className={styles.form_elem}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 15,
                position: "relative",
              }}
            >
              <VisibilityManager
                as="button"
                type="submit"
                className={styles.formbutton}
                disabled={isSubmitted || errors.name || errors.phone || errors.checkbox}
              >
                {"Записаться"}
              </VisibilityManager>
              <VisibilityManager className={styles["form-checkbox"]}>
                <input
                  name="checkbox"
                  className={`${styles["form-checkbox__input"]} ${
                    errors.checkbox ? styles["form-checkbox__input--error"] : ""
                  }`}
                  type="checkbox"
                  id={id}
                  disabled={isSubmitted}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  checked={formData.checkbox}
                />
                <label
                  style={{ opacity: isSubmitted ? 0.5 : 1 }}
                  className={`${styles["form-checkbox__label"]}`}
                  htmlFor={id}
                >
                  Я ознакомлен (ознакомлена) с{" "}
                  <a
                    target="_blank"
                    className={styles["form-doc"]}
                    href="/agreement-data.txt"
                  >
                    правилами
                  </a>{" "}
                  обработки персональных данных
                </label>
              </VisibilityManager>
              {message ? (
                <VisibilityManager style={{ marginTop: 0 }}>
                  {message === "error" ? (
                    <p>
                      Что-то пошло не так. Свяжитесь, пожалуйста, со мной в
                      Телеграм по{" "}
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
                  {message === "success" ? (
                    <p>Спасибо, ваша запись оформлена.</p>
                  ) : null}
                </VisibilityManager>
              ) : null}
            </div>
          </form>
        )}
      </FormValidator>
    </div>
  );

  return animation ? (
    <LineAnimation>{content}</LineAnimation>
  ) : (
    <div className={styles.container}>{content}</div>
  );
}

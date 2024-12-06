import React, { useState } from "react";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import {
  validateName,
  validatePhone,
  formatPhoneNumber,
} from "../../utils/validation";
import styles from "./Form.module.css";
import containerStyles from "../../styles/container.module.css";

export function Form({ isSubmitted, setIsSubmitted }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    checkbox: false,
  });

  const [id] = useState(() => Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15))
  const [status, setStatus] = useState('Записаться');

  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    checkbox: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "checkbox") {
      setFormData((prev) => ({ ...prev, [name]: e.target.value }));
      setErrors((prev) => ({ ...prev, [name]: !e.target.value }));
      return;
    }

    if (name === "phone") {
      const formattedPhone = formatPhoneNumber(value);
      setFormData((prev) => ({ ...prev, [name]: formattedPhone }));
      setErrors((prev) => ({ ...prev, [name]: validatePhone(formattedPhone) }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
      setErrors((prev) => ({ ...prev, [name]: validateName(value) }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const nameError = validateName(formData.name);
    const phoneError = validatePhone(formData.phone);

    setErrors((prev) => ({ ...prev, name: nameError, phone: phoneError, checkbox: !formData.checkbox }));

    if (!nameError && !phoneError && formData.checkbox) {
      handleSend();
    }
  };

  function handleSend() {
    const sendMessage = () => {
      const token = "7733350115:AAE6tcQZc-R2bRw8ewLKwvtiS3UKHTcgV9c";
      const chat_id = "-1002359699160";
      const url = `https://api.telegram.org/bot${token}/sendMessage`; // The url to request

      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
        },
        body: JSON.stringify({
          chat_id,
          parse_mode: "html",
          text: `<b>Новая запись на консультацию</b>\n\n
          <b>Тема консультации</b>: без темы\n
          <b>Имя</b>: ${formData.name}\n
          <b>Номер телефона</b>: ${formData.phone}\n`,
        }),
      })
        .then(() => {
          setStatus('Запись оформлена');
        })
        .catch((error) => {
          setStatus("Напишите, пожалуйста, мне в Телеграм");
        })
        .finally(() => {
          setFormData({ name: "", phone: "", checkbox: false });
          setIsSubmitted(true);
        });
    };
    sendMessage();
  }
  



  return (
    <div className={styles.form}>
      <form
        onSubmit={handleSubmit}
        className={styles.form__item + " " + containerStyles.container}
      >
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
          style={{ display: "flex",  flexDirection: "column", gap: 15, position: "relative" }}
        >
          <Button status={status} isSubmitted={isSubmitted} disabled={isSubmitted} />
          <div className={styles["form-checkbox"]}>
              <input
                name="checkbox"
                className={`${styles["form-checkbox__input"]} ${errors.checkbox ? styles["form-checkbox__input--error"] : ""}`}
                type="checkbox"
                id={id}
                disabled={isSubmitted}
                onChange={(e) => {
                  handleChange({
                    target: { name: "checkbox", value: e.target.checked },
                  });
                }}
                checked={formData.checkbox}
              />
              <label className={`${styles["form-checkbox__label"]}`} htmlFor={id}>
                Я ознакомлен (ознакомлена) с{" "}
                <a target="_blank" className={styles["form-doc"]} href="/agreement-data.txt">
                  правилами
                </a>{" "}
                обработки персональных данных
              </label>
            </div>
        </div>
      </form>
    </div>
  );
}

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
  });

  const [status, setStatus] = useState('Записаться на консультацию');

  const [errors, setErrors] = useState({
    name: "",
    phone: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

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

    setErrors((prev) => ({ ...prev, name: nameError, phone: phoneError }));

    if (!nameError && !phoneError) {
      handleSend();
    }
  };

  function handleSend() {
    const sendMessage = () => {
      const token = "7733350115:AAE6tcQZc-R2bRw8ewLKwvtiS3UKHTcgV9c";
      const chat_id = "-4557805614";
      const url = `https://api.telegram.org/bot${token}/sendMessage`; // The url to request

      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
        },
        body: JSON.stringify({
          chat_id,
          parse_mode: "html",
          text: `<b>Новая запись на консультацию</b>\n\n<b>Имя</b>: ${formData.name}\n<b>Номер телефона</b>: ${formData.phone}\n`,
        }),
      })
        .then(() => {
          setStatus('Запись оформлена');
        })
        .catch((error) => {
          setStatus("Чтото пошло не так. Напишите, пожалуйста, мне в Телеграм");
        })
        .finally(() => {
          setFormData({ name: "", phone: "" });
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
          style={{ display: "flex", flexWrap: "nowrap", position: "relative" }}
        >
          <Button status={status} isSubmitted={isSubmitted} disabled={isSubmitted} />
        </div>
      </form>
    </div>
  );
}

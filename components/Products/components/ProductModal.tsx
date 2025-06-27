import React, { useEffect, useState } from "react";
import styles from "../styles/Modal.module.css";
import gridStyles from "../styles/ProductGrid.module.css";
import { FormValidator } from "../../shared/FormValidator/FormValidator";
import { Button } from "../../shared/Button/Button.jsx";
import { Input } from "../../shared/Input/Input";
import Image from "next/image";
import { validateName, validatePhone } from "../../../utils/validation";

interface ProductModalProps {
  product: any;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
}) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [closing, setClosing] = useState(false);
  const [status, setStatus] = useState('Записаться');
  const [id] = useState(() => Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15));
  const [loaded, setLoaded] = React.useState(false);

  const handleClose = () => {
    setClosing(true)
    setTimeout(() => {
      onClose();
      setClosing(false);
      console.log('close');
    }, 1000); // Match this timeout with the CSS transition duration
  };

  const handleSend = async (formData) => {
    try {
      const token = "7733350115:AAE6tcQZc-R2bRw8ewLKwvtiS3UKHTcgV9c";
      const chat_id = "-1002359699160";
      const url = `https://api.telegram.org/bot${token}/sendMessage`;

      await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
        },
        body: JSON.stringify({
          chat_id,
          parse_mode: "html",
          text: `<b>Новая запись на консультацию</b>\n\n<b>Программа</b>: ${product.title}\n<b>Имя</b>: ${formData.name}\n<b>Номер телефона</b>: ${formData.phone}\n`,
        }),
      });
      
      setStatus('Спасибо за заявку!');
      setIsSubmitted(true);
    } catch (error) {
      setStatus('Ошибка отправки');
    }
  };

  return (
    <div className={`${styles.overlay} ${!closing ? styles.open : ''}`}>
      {product ? (
        <div className={styles.modal}>
          <button onClick={handleClose} className={styles.closeButton}>
            ✕
          </button>
          <div className={styles.modalImageContainer}>
            <Image
              src={product.image}
              alt={product.title}
              className={`${styles.modalImage} ${loaded ? styles.loaded : ''}`}
              onLoad={() => setLoaded(true)}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
          <div className={styles.modalContent}>
            <div>
              <h2>{product.title}</h2>
              <p>{product.description}</p>
              <div className={gridStyles.price}>
                <span className={gridStyles.newPrice}>{product.newPrice}</span>
                {product.oldPrice && (
                  <span className={gridStyles.oldPrice}>{product.oldPrice}</span>
                )}
              </div>
            </div>
            <FormValidator
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
                      flexWrap: "nowrap",
                      position: "relative",
                      flexDirection: "column",
                      gap: 15,
                    }}
                  >
                    <Button
                      status={status}
                      isSubmitted={isSubmitted}
                      disabled={isSubmitted}
                    />
                    <div className={styles["form-checkbox"]}>
                      <input
                        name="checkbox"
                        className={`${styles["form-checkbox__input"]} ${
                          errors.checkbox ? styles["form-checkbox__input--error"] : ""
                        }`}
                        type="checkbox"
                        id={id}
                        disabled={isSubmitted}
                        onChange={handleChange}
                        checked={formData.checkbox}
                      />
                      <label
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
                    </div>
                  </div>
                </form>
              )}
            </FormValidator>
          </div>
        </div>
      ) : null}
    </div>
  );
};

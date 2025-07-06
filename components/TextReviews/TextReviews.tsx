import styles from "./TextReviews.module.css";
import Image from "next/image.js";
import React, { useState } from "react";
import { LineAnimation } from "../LineAnimation/LineAnimation";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Никита",
    role: "полицейский",
    content:
    "Это помогает мне быть расслабленным там, где раньше сдавали нервы.",
    image: "https://avatars.mds.yandex.net/get-yapic/36689/jpEOFu1rpHoHeltF6WA5fbdV7sg-1/orig",
  },
  {
    id: 2,
    name: "Александр",
    role: "менеджер по продажам",
    content:
    "З@&бись! Продавать стало легче!))",
    image:
      "https://avatars.mds.yandex.net/get-yapic/36689/jpEOFu1rpHoHeltF6WA5fbdV7sg-1/orig",
  },
  {
    id: 3,
    name: "Булат",
    role: "организатор мероприятий",
    content:
      "Вот эта тема с отключением суеты хорошо зашла, постоянно пользуюсь",
    image:
      "https://avatars.mds.yandex.net/get-yapic/36689/jpEOFu1rpHoHeltF6WA5fbdV7sg-1/orig",
  },
];

export const TextReviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <LineAnimation>
    <div className={styles.container}>
      <div className={styles.slider}>
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className={`${styles.slide} ${
              index === currentIndex ? styles.slideActive : ""
            }`}
          >
            <Image
              width="330"
              height="330"
              src={testimonial.image}
              alt={testimonial.name}
              className={styles.image}
            />

            <div className={styles.content}>
              <p className={styles.quote}>"{testimonial.content}"</p>
              <h3 className={styles.name}>{testimonial.name}</h3>
              <p className={styles.role}>{testimonial.role}</p>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className={`${styles.navigationButton} ${styles.prevButton}`}
        aria-label="Previous testimonial"
      >
        <svg
          className={styles.icon}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className={`${styles.navigationButton} ${styles.nextButton}`}
        aria-label="Next testimonial"
      >
        <svg
          className={styles.icon}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>
    </div>
    </LineAnimation>
  );
};

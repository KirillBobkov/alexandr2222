import styles from "./TextReviews.module.css";
import Image from "next/image.js";
import React, { useState } from "react";

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
    name: "?????",
    role: "",
    content:
    "Прошел страх езды на машине! Села сама за руль, сама поехала, сама покаталась)",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200",
  },
  {
    id: 2,
    name: "Никита",
    role: "",
    content:
    "Создалась такая ситуация в которой испытывал тяжелые эмоции, которые блокировали полностью мысли, эмоции стресса, ревности какой-то непонятной, от потери человека. Мешали двигаться, мешали думать, оценивать других людей, полностью пришибленное состояние. После того как мы созвонились с Александром, мы выявлили какие эмоции я испытываю, мы их проработали, отпустили и стало гораздо легче. Мозг как будто проснулся! Стал работать на созидательной энергии. Спасибо, Александр Игоревичь, за помощь.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200",
  },
  {
    id: 3,
    name: "Emma Thompson",
    role: "Product Manager",
    content:
      "The level of customer support and continuous improvement is outstanding. It's rare to find a company so dedicated to user success and product excellence.",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200&h=200",
  },
];

export const TextReviews: React.FC = () => {
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
  );
};

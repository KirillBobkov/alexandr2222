import React, { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";

export default function NotFound() {
  useEffect(() => {
    document.documentElement.classList.add("no-scroll-page");

    return () => document.documentElement.classList.remove("no-scroll-page");
  }, []);

  const metaConfig = {
    title: "Страница не найдена",
    description: "Этой страницы не существует",
    keywords: "грибы ретрит",
  };

  return (
    <Layout metaConfig={metaConfig}>
    <section>
      <h1
      >
        404
      </h1>
      <p>
        Такой страницы не существует. Возможно, ссылка по которой вы перешли —
        неправильная.
      </p>
    </section>
    </Layout>
  );
}

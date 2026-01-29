import { useEffect, useRef } from "react";
import { useRouter } from "next/router";

export const useScrollToLocation = () => {
  const { asPath } = useRouter();

  useEffect(() => {
    if (asPath && asPath.includes("#")) {
      const id = asPath.split("#")[1];
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      document.body.scrollTo(0, 0);
    }
  }, [asPath]);
};

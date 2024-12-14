import { useRouter } from "next/router";
import React from "react";

export const useScrollToLocation = () => {
  const scrolledRef = React.useRef(false);
  const { asPath } = useRouter();
  const hashRef = React.useRef(asPath);

  React.useEffect(() => {
    console.log('asPath', asPath)
    
    if (asPath && asPath.includes('#')) {
      
    } else {
      document.body.scrollTo(0, 0);
    }
  }, []);
};
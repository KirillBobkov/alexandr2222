import { useRouter } from "next/router";
import React from "react";

export const useScrollToLocation = () => {
  const scrolledRef = React.useRef(false);
  const { asPath } = useRouter();
  const hashRef = React.useRef(asPath);

  // const pathname = usePathname()
  // const searchParams = useSearchParams()
 
  React.useEffect(() => {
    console.log("asPath", asPath);
    setTimeout(() => {
    
      if (asPath && asPath.includes("#")) {
        // We want to reset if the hash has changed
        if (hashRef.current !== asPath) {
          hashRef.current = asPath;
          scrolledRef.current = false;
        }
  
        if (hashRef.current === asPath) {
          scrolledRef.current = false;
        }
  
        // only attempt to scroll if we haven't yet (this could have just reset above if hash changed)
        if (!scrolledRef.current) {
          const id = asPath.match(/#(.*)/)?.[1] || '';
          const element = document.getElementById(id);
          console.log('el', element, id)
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            scrolledRef.current = true;
          }
        }
      } else {
        document.body.scrollTo(0, 0);
      }
    }, 0)
  }, []);
};

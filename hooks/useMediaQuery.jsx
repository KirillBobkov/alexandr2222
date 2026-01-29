import { useEffect, useLayoutEffect, useState } from "react";

const getMatches = (query) => {
  if (typeof window !== "undefined") {
    return window.matchMedia(query).matches;
  }
  return false;
};

export function useMediaQuery(query) {
  const [hasMatch, setHasMatches] = useState(() => getMatches(query));
  const [initialLoad, setInitialLoad] = useState(true);

  useLayoutEffect(() => {
    if (initialLoad) {
      setInitialLoad(false);
    }
  }, [initialLoad]);

  useEffect(() => {
    const matchMedia = window.matchMedia(query);

    const handleChange = () => {
      setHasMatches(matchMedia.matches);
    };

    handleChange();
    matchMedia.addEventListener("change", handleChange);

    return () => {
      matchMedia.removeEventListener("change", handleChange);
    };
  }, [query]);

  return initialLoad ? undefined : hasMatch;
}

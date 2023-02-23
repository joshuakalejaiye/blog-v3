import { useEffect, useState } from "react";

const useScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState<number>();
  const [scrollMax, setScrollMax] = useState<number>();

  useEffect(() => {
    const setValues = () => {
      setScrollProgress(window?.scrollY);

      setScrollMax(
        Math.max(
          document.body.scrollHeight,
          document.body.offsetHeight,
          document.documentElement.clientHeight,
          document.documentElement.scrollHeight,
          document.documentElement.offsetHeight
        ) - window.innerHeight
      );
    };
    window.addEventListener("scroll", setValues);

    return () => {
      window.removeEventListener("scroll", setValues);
    };
  }, []);

  return {
    dec: scrollProgress && scrollMax && scrollProgress / scrollMax,
    scrollProgress,
    scrollMax,
  };
};

export default useScrollProgress;

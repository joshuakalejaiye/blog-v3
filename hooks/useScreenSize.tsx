import { useEffect, useState } from "react";

const useScreenSize = (): {
  mobile: boolean;
  width: number;
  height: number;
} => {
  const [screenSize, setScreenSize] = useState({
    mobile: window.innerWidth < 800,
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const onResize = () => {
    if (window) {
      setScreenSize({
        mobile: window.innerWidth < 800,
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
  };

  useEffect(() => {
    if (window) {
      window.addEventListener("resize", onResize);
    }
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return screenSize;
};

export default useScreenSize;

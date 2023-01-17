import { useEffect, useState } from "react";

const useScreenSize = (): {
  mobile: boolean;
  width: number;
  height: number;
} => {
  const [screenSize, setScreenSize] = useState({
    mobile: false,
    width: 0,
    height: 0,
  });

  const onResize = () => {
    setScreenSize({
      mobile: window?.innerWidth < 800,
      width: window?.innerWidth,
      height: window?.innerHeight,
    });
  };

  useEffect(() => {
    onResize();
    window?.addEventListener("resize", onResize);
    return () => window?.removeEventListener("resize", onResize);
  }, []);

  return screenSize;
};

export default useScreenSize;

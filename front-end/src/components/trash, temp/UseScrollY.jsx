import { useState, useEffect } from "react";

const useScrollY = () => {
  // scrollY를 state로 등록
  const [scrollY, setScrollY] = useState(0);

  // pageYOffset === scrollY가 변경될 때 state값 변경
  useEffect(() => {
    const listener = () => {
      console.log("리스너");
      setScrollY(window.pageYOffset);
      console.log(scrollY);
      console.log(window.pageYOffset);
    };
    window.addEventListener("scroll", listener, true);
    return () => {
      window.removeEventListener("scroll", listener, true);
    };
  }, [setScrollY]);

  return {
    scrollY,
  };
};

export default useScrollY;

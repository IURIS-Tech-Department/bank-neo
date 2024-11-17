import { useState, useEffect } from "react";

function useResponsive(minWidth: number): boolean {
  const [isResponsive, setIsResponsive] = useState<boolean | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsResponsive(window.innerWidth >= minWidth);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [minWidth]);

  return isResponsive !== null ? isResponsive : false; 
}

export default useResponsive;

import { useEffect, useState } from "react";

export function useCustomScroll(offsetY: number): boolean {
  const [isNowInTarget, setIsNowInTarget] = useState<boolean>(false);

  useEffect(() => {
    const onScroll = () => {
      if (pageYOffset > offsetY) {
        setIsNowInTarget(true);
      } else {
        setIsNowInTarget(false);
      }
    };
    window.addEventListener("scroll", onScroll);

    return function () {
      window.addEventListener("scroll", onScroll);
    };
  }, [offsetY]);

  return isNowInTarget;
}

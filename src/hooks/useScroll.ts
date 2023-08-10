import { useEffect, useState } from "react";

export default function useScroll(scrollableContainer: HTMLElement | null) {
  const [scrollDistance, setScrollDistance] = useState(0);

  // Effects
  useEffect(() => {
    scrollableContainer?.addEventListener("scroll", handleScroll);

    return () => {
      scrollableContainer?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const position = scrollableContainer?.scrollTop || 0;

    setScrollDistance(position);
  };

  return scrollDistance;
}

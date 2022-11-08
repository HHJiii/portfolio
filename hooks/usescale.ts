import { useCallback, useEffect, useRef } from "react";

export const useScaleFadeIn = (delay: string, deep: string) => {
  const dom = useRef<HTMLInputElement>(null);

  const handleScroll = useCallback(
    ([entry]: any) => {
      const { current } = dom;

      if (current !== null && entry.isIntersecting) {
        current.style.transitionProperty = "opacity transform";
        current.style.transitionDuration = "1s";
        current.style.transitionTimingFunction = "cubic-bezier(0, 0, 0.2, 1)";
        current.style.transitionDelay = `${delay}s`;
        current.style.opacity = "1";
        current.style.transform = "translate3d(0, 0, 0)";
        current.style.scale = "1";
      }
    },
    [delay]
  );

  useEffect(() => {
    let observer: any;
    const { current } = dom;

    if (current) {
      observer = new IntersectionObserver(handleScroll, { threshold: 0.5 });
      observer.observe(current);

      return () => observer && observer.disconnect();
    }
  }, [handleScroll]);

  return {
    ref: dom,
    style: {
      opacity: 0,
      transform: `translate3d(0, 0, 0) scale(0)`,
    },
  };
};

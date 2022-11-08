import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { isMobile } from "react-device-detect";

import style from "./layout.module.scss";
import Nav from "components/nav/Nav";
import Footer from "components/footer/Footer";
import { useResize } from "hooks/useResize";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const { nowWidth } = useResize();

  useEffect(() => {
    const mouseMove = (e: any) => {
      setMousePosition({
        x: e.clientX - 16,
        y: e.clientY - 16,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.addEventListener("mousemove", mouseMove);
    };
  });

  const variants = {
    default: {
      x: mousePosition.x,
      y: mousePosition.y,
    },
  };

  return (
    <>
      <Nav />
      {!isMobile && (
        <motion.div
          className={style.cursor}
          variants={variants}
          animate="default"
        />
      )}
      <>{children}</>
      <Footer />
    </>
  );
}

import style from "./nav.module.scss";
import { useRouter } from "next/router";
import { useResize } from "hooks/useResize";
import { useState } from "react";

function Burger({
  click: { isClick, setClick },
}: {
  click: { isClick: boolean; setClick: (v: boolean) => void };
}) {
  return (
    <button onClick={() => setClick(!isClick)} className={style.burger}>
      <span style={{ top: "0" }}></span>
      <span style={{ top: "7.5px" }}></span>
      <span style={{ top: "15px" }}></span>
    </button>
  );
}

export default function Nav() {
  const router = useRouter();
  const { nowWidth } = useResize();
  const [isClick, setClick] = useState(false);

  return (
    <nav className={style.navContainer}>
      <div>
        <strong>HYEJI</strong>
        HAN
      </div>
      {nowWidth > 800 ? (
        <div className={style.items}>
          <button onClick={() => router.push("/")}>Works</button>
          <button onClick={() => router.push("/playground")}>Playground</button>
          <button onClick={() => router.push("/about")}>About</button>
        </div>
      ) : (
        <Burger click={{ isClick, setClick }} />
      )}
      {nowWidth <= 800 && (
        <div
          className={style.isClicked}
          style={{
            transform: isClick
              ? "translate3d(0, 0, 0)"
              : "translate3d(100%, 0, 0)",
          }}
        >
          <div className={style.cancelContainer}>
            <button onClick={() => setClick(false)} className={style.cancel}>
              <span style={{ left: "0", transform: "rotate(45deg)" }}></span>
              <span style={{ left: "0", transform: "rotate(135deg)" }}></span>
            </button>
          </div>
          <div className={style.clickedItems}>
            <button
              onClick={() => {
                setClick(false);
                router.push("/");
              }}
            >
              Works
            </button>
            <button
              onClick={() => {
                setClick(false);
                router.push("/about");
              }}
            >
              About
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

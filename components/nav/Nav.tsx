import style from "./nav.module.scss";
import { useRouter } from "next/router";

export default function Nav() {
  const router = useRouter();

  return (
    <nav className={style.navContainer}>
      <div>
        <strong>HYEJI</strong>
        HAN
      </div>

      <div className={style.items}>
        <button onClick={() => router.push("/")}>Works</button>
        <button onClick={() => router.push("/playground")}>Playground</button>
        <button onClick={() => router.push("/about")}>About</button>
      </div>
    </nav>
  );
}

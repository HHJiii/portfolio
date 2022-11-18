import Image from "next/image";

import style from "./footer.module.scss";
import footerImg1 from "@image/linkedIn.svg";
import footerImg2 from "@image/mail.svg";
import footerImg3 from "@image/footer3.svg";
import footerImg4 from "@image/footer4.svg";
import { useRouter } from "next/router";

export default function Footer() {
  const images = [
    {
      label: footerImg1,
      value: "https://www.linkedin.com/in/hyeji-han",
    },
    {
      label: footerImg3,
      value: "https://github.com/Hyeji-Han",
    },
    {
      label: footerImg4,
      value: "https://medium.com/@hyejihan",
    },
  ];

  const router = useRouter();

  return (
    <footer className={style.footerContainer}>
      <div className={style.name}>
        <h2 className={style.main}>{`Let's get to know each other`}</h2>
        <span className={style.sub}>Get in touch.</span>
      </div>
      <div className={style.content}>
        <div>
          {images.map((item, i) => (
            <Image
              onClick={() => router.push(item.value)}
              className={style.item}
              key={`footer image: ${i}`}
              src={item.label}
              width={20}
              height={20}
              alt="footer link image"
            />
          ))}
        </div>
        <span>@ Hyeji Han 2022</span>
      </div>
    </footer>
  );
}

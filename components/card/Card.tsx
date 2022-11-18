/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import style from "./card.module.scss";
import Back from "@image/back.svg";
import Test from "@image/testPerson.webp";
import More from "@image/more.svg";
import { useRouter } from "next/router";

export default function Card({
  title,
  sub,
  image,
  path,
  s,
}: {
  title: string;
  sub: string;
  path: string;
  image?: any;
  s?: any;
}) {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push(path)}
      style={s}
      className={style.cardContainer}
    >
      <div>
        <div className={style.title}>{title}</div>
        <div className={style.sub}>{sub}</div>
      </div>
      {!image ? (
        <Phone>
          <img style={{ width: "90%" }} src={"/images/chat.png"} alt="" />
        </Phone>
      ) : (
        <div className={style.main}>
          <div className={style.mainImg}>
            <img src={image} alt="main-image" />
          </div>
        </div>
      )}
    </button>
  );
}

function Phone({ children }: { children: React.ReactNode }) {
  return (
    <div className={style.phone}>
      <div className={style.nav}>
        <Image src={Back} alt="back" width={20} height={20} />
        <div className={style.info}>
          <div>
            <div className={style.figure}>
              <Image src={Test} alt="back" width={30} height={30} />
            </div>
          </div>
          <div className={style.desc}>
            <span>Sam</span>
            <span>online</span>
          </div>
        </div>
        <Image src={More} alt="back" width={20} height={20} />
      </div>
      {children}
    </div>
  );
}

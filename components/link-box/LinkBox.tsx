import Image from "next/image";
import { useRouter } from "next/router";

import style from "./linkBox.module.scss";

export default function LinkBox({
  icon,
  title,
  text,
  link,
}: {
  [x: string]: string;
}) {
  const router = useRouter();
  const onClick = () => {
    router.push(link);
  };

  return (
    <button onClick={onClick} className={style.linkContainer}>
      <Image src={icon} alt="box-icon" width={25} height={25} />
      <div className={style.desc}>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </button>
  );
}

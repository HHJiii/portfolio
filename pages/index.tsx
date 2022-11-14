import style from "../styles/Home.module.scss";
import { useScrollFadeIn } from "../hooks/usescroll";
import Card from "components/card/Card";
import Test from "@image/test2.webp";

export default function Home() {
  const animatedItem1 = useScrollFadeIn("0", "50");
  const animatedItem2 = useScrollFadeIn("0.05", "50");
  const animatedItem3 = useScrollFadeIn("0.1", "50");
  const animatedItem4 = useScrollFadeIn("0.1", "20");
  const animatedItem5 = useScrollFadeIn("0.2", "20");

  const contacts = [
    { label: "LinkedIn", value: "" },
    { label: "E-Mail", value: "" },
    { label: "Gitub", value: "" },
    { label: "Medium", value: "" },
  ];

  return (
    <div className={style.container}>
      <div className={style.section}>
        <div className={style.section1}>
          <div className={style.section1Wapper}>
            <h1 {...animatedItem1} className={style.intro}>
              {`My name is Hyeji Han, I’m a `}
              <span>product designer & media </span>
              {`artist from Seoul.`}
            </h1>
            <div className={style.description}>
              <span {...animatedItem2}>
                I help users to create memorable experiences through inclusive
                design.
              </span>
              <div {...animatedItem3} className={style.contacts}>
                {contacts.map((cotact, i) => (
                  <button key={`contact: ${i}`}>{cotact.label}</button>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className={style.section2}>
          <Card
            animation={animatedItem4}
            title="Trashbeing"
            sub="Send text, voice message, video, emojis or annotations."
            path="project1"
          />
          <Card
            animation={animatedItem5}
            title="End Poverty In California"
            sub="Easily create fun, entertaining videos to share with friends."
            path="project1"
          />
        </div>
      </div>
    </div>
  );
}

import style from "../styles/About.module.scss";
import { useScrollFadeIn } from "../hooks/usescroll";
import { useScaleFadeIn } from "../hooks/usescale";
import { useRouter } from "next/router";

export default function About() {
  const animatedItem1 = useScrollFadeIn("0", "50");
  const animatedItem2 = useScrollFadeIn("0.5", "50");
  const animatedItem4 = useScrollFadeIn("0.3", "50");
  const animatedItem5 = useScrollFadeIn("0.3", "70");
  const animatedItem6 = useScrollFadeIn("0.3", "70");
  const animatedItem7 = useScrollFadeIn("0.3", "70");
  const animatedItem8 = useScrollFadeIn("0.3", "70");
  const animatedItem9 = useScrollFadeIn("0.5", "70");
  const animatedItem3 = useScaleFadeIn("0", "50");
  const router = useRouter();

  return (
    <div className={style.aboutContainer}>
      <div className={style.aboutWapper}>
        <h1>About</h1>
        <div {...animatedItem3} className={style.aboutImgContainer}>
          <div className={style.aboutImg} />
        </div>
        <p {...animatedItem4} className={style.intro}>
         Hi, there! <p></p> Meet Hyeji Han, Product Designer & Media Artist from Seoul
        </p>
        <p {...animatedItem5} className={style.content}>
          As a skilled product designer and social activist with almost 5 years of experience in the public sector, I am deeply passionate about creating positive social impact. Growing up on the beautiful island of Borneo, I developed a love for nature and a bubbly, fun-loving personality!{" "}
        </p>
        <p {...animatedItem6} className={style.content}>
          After earning my degree in business administration, I have worked at the Korean National Agency — Arts Council Korea — where I focused on communications, social advocacy, fundraising and donor research. I have consulted on numerous projects related to culture and the arts, and have helped countless struggling artists along the way.
        </p>
        <p {...animatedItem7} className={style.content}>
         My primary area of interest is finding solutions to social issues such as unfairness, poverty, and discrimination. I believe that everyone, regardless of their abilities or challenges, should be able to fully enjoy life and participate in the arts without any barriers or discrimination.
        </p>
        <p {...animatedItem8} className={style.content}>
        That is why I am committed to designing a world that is inclusive and equitable for all.
        </p>
        <br></br>
        <div onClick={() => router.push('https://drive.google.com/file/d/1MZtD2RQ88z8BMXOZCE0lzp90BpRAFcWp/view?usp=sharing')} {...animatedItem9} className={style.resome}>
          Resume
        </div>

        <div className={style.awards}>
          <div {...animatedItem1} className={style.title}>
            Contact
          </div>
          <div {...animatedItem2} className={style.awardsContent}>
            <div className={style.row}>
              <span>hyejihan92@gmail.com</span>
              <span>E-Mail</span>
            </div>
            <div className={style.row}>
              <span>{`@8gust11th`}</span>
              <span>Instagram</span>
            </div>
            <div className={style.row}>
              <span>{`+82 1049130207`}</span>
              <span>Mobile</span>
            </div>
            <div className={style.row}>
              <span>{`PaigeHan`}</span>
              <span>Oculus</span>
            </div>
            <br></br>
            <br></br>
          </div>
        </div>
      </div>
    </div>
  );
}

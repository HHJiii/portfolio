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
          My name is Hyeji Han, I’m a product designer & media artist from
          Seoul.
        </p>
        <p {...animatedItem5} className={style.content}>
          I am a product designer with almost 5 years experience in public
          sector. As a skilled social activist, I have a clear point of interest
          within the social impact sector that has not been actively questioned.{" "}
        </p>
        <p {...animatedItem6} className={style.content}>
          I was born and spent my childhood on the beautiful island of Borneo, it is an entrancing place filled with beautiful dense rainforest. I grew up as a nature lover surrounded by such beautiful nature. I am very bubbly, funny, and full of laughter. 
        </p>
        <p {...animatedItem7} className={style.content}>
          After graduating from university with a degree in business administration, I began to delve into the complex social issues affecting local communities. Throughout the past 5 years, I have worked for a National Agency, Arts Council Korea, with a focus in communications, social advocacy, and fundraising/donor research. I consulted on many projects related to culture and arts and helped struggling artists.
        </p>
        <p {...animatedItem8} className={style.content}>
          The field I am interested in is solving social problems including
          unfairness, poverty, and discrimination. I would like to design the
          world so that, regardless of their disability or difficulty, people
          can fully enjoy their life and arts without any discrimination or
          barriers.
        </p>
        <br></br>
        <div onClick={() => router.push('https://drive.google.com/file/d/1Nb3iaRs3FrqIf7BJS6sPDbAFjkDslgxa/view?usp=sharing')} {...animatedItem9} className={style.resome}>
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

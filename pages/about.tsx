import style from "../styles/About.module.scss";
import { useScrollFadeIn } from "../hooks/usescroll";
import { useScaleFadeIn } from "../hooks/usescale";
import { useRouter } from "next/router";

export default function About() {
  const animatedItem1 = useScrollFadeIn("0", "50");
  const animatedItem2 = useScrollFadeIn("0.5", "50");
  const animatedItem3 = useScaleFadeIn("0", "50");
  const animatedItem4 = useScrollFadeIn("0.3", "50");
  const animatedItem5 = useScrollFadeIn("0.3", "70");
  const animatedItem6 = useScrollFadeIn("0.3", "70");
  const animatedItem7 = useScrollFadeIn("0.3", "70");
  const animatedItem8 = useScrollFadeIn("0.3", "70");
  const animatedItem9 = useScrollFadeIn("0.5", "70");
  const router = useRouter();

  return (
    <div className={style.aboutContainer}>
      <div className={style.aboutWapper}>
        <h1>About</h1>
        <div {...animatedItem3} className={style.aboutImgContainer}>
          <div className={style.aboutImg} />
        </div>
        <p {...animatedItem4} className={style.intro}>
          Hi there! I&apos;m Paige Han, a product advocate striving to make the world better.
          </p>
            <p {...animatedItem5} className={style.content}>
            My journey began with a degree in business administration, and my interest deepened during my time at the Korean National Agency, where I immersed myself in the art of social advocacy, fundraising, and accessibility for service design.
            </p>
            <p {...animatedItem6} className={style.content}>
            I am currently studying Human Centered Design & Engineering at the University of Washington, focusing on enhancing data accessibility, developing responsible AI models, and contributing to the innovation of interaction and inclusivity in products.
            </p>
            <p {...animatedItem7} className={style.content}>
            My goal is simple: to design a world where everyone feels welcome and empowered, just like you reading this now. Join me on this journey to turn imagination into reality.
        </p>
        <br></br>
        <div onClick={() => window.open('https://drive.google.com/file/d/1oph_wcmLjYb5ORPnNnYuNOCviz88ylIj/view?usp=sharing', '_blank')} {...animatedItem8} className={style.resome}>
        Resume
        </div>

        <div className={style.awards}>
          <div {...animatedItem1} className={style.title}>
            Contact
          </div>
          <div {...animatedItem2} className={style.awardsContent}>
            <div className={style.row}>
              <span>{'paigehan@uw.edu'}</span>
              <span>E-Mail</span>
            </div>
            <div className={style.row}>
              <span>{`(206)513-1145`}</span>
              <span>Mobile</span>
            </div>
            <div className={style.row}>
              <span>{`@afterhann`}</span>
              <span>Instagram</span>
            </div>
            <div className={style.row}>
              <span>{`PaigeHan`}</span>
              <span>Oculus Quest</span>
            </div>
            <br></br>
            <br></br>
          </div>
        </div>
      </div>
    </div>
  );
}

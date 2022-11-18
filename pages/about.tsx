import style from "../styles/About.module.scss";
import { useScrollFadeIn } from "../hooks/usescroll";
import { useScaleFadeIn } from "../hooks/usescale";

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
          Over the past years, I have worked at a South Korean non-profit
          organization. I supported artists in all sorts of ways in leading
          creative fundraising campaigns as a project manager. Also I planned
          and operated a web service for struggling artists and local
          communities as a product manager.
        </p>
        <p {...animatedItem7} className={style.content}>
          The field I am interested in is solving social problems including
          unfairness, poverty, and discrimination. I would like to design the
          world so that, regardless of their disability or difficulty, people
          can fully enjoy their life and arts without any discrimination or
          barriers.
        </p>
        <p {...animatedItem8} className={style.content}>
          Since I majored in business, I always think about and design important
          business strategies at UX. I am good at making data-based decisions
          about the most efficient and productive methods.
        </p>
        <div {...animatedItem9} className={style.resome}>
          Resume
        </div>

        <div className={style.awards}>
          <div {...animatedItem1} className={style.title}>
            Awards
          </div>
          <div {...animatedItem2} className={style.awardsContent}>
            <div className={style.row}>
              <span>Adidas</span>
              <span>2022</span>
            </div>
            <div className={style.row}>
              <span>Google</span>
              <span>2021</span>
            </div>
            <div className={style.row}>
              <span>Club Mate</span>
              <span>2020</span>
            </div>
            <div className={style.row}>
              <span>Deciem</span>
              <span>2019</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import style from "../styles/Home.module.scss";
import { useScrollFadeIn } from "../hooks/usescroll";
import Card from "components/card/Card";
import Test from "@image/test2.webp";
import LinkBox from "components/link-box/LinkBox";
import json from "../data.json";

export default function Home() {
  const animatedItem1 = useScrollFadeIn("0", "50");
  const animatedItem2 = useScrollFadeIn("0.05", "50");
  const animatedItem3 = useScrollFadeIn("0.1", "50");
  const animatedItem4 = useScrollFadeIn("0.1", "20");
  const animatedItem5 = useScrollFadeIn("0.2", "20");
  const animatedItem6 = useScrollFadeIn("0.1", "20");
  const animatedItem7 = useScrollFadeIn("0.2", "20");

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
          {json.card.map((e, i) => (
            <Card
              key={i}
              title={e.title}
              sub={e.sub}
              path={e.path}
              image={e.image}
            />
          ))}
        </div>
        <div className={style.linkBox}>
          <LinkBox
            icon="/images/Article@2x.png"
            title="Persuasive Design"
            text="Published article on Medium"
            link="https://medium.com/design-bootcamp/persuasive-design-what-makes-a-visitor-donate-to-charity-websites-5e8047bb4e14"
          />
          <LinkBox
            icon="/images/Article@2x.png"
            title="Nudge Trilogy : Dark, White.."
            text="Published article on Medium"
            link="https://medium.com/design-bootcamp/nudge-trilogy-dark-white-and-no-nudge-zone-ae028f48a4e3"
          />
          <LinkBox
            icon="/images/Article@2x.png"
            title="Galápagos Syndrome of.."
            text="Published article on Medium"
            link="https://medium.com/design-bootcamp/the-gal%C3%A1pagos-syndrome-of-technology-in-south-korea-2f3a4d7250a"
          />
          <LinkBox
            icon="/images/Article@2x.png"
            title="Explainable AI (XAI)"
            text="Published article on Medium"
            link=""
          />
          <LinkBox
            icon="/images/Phosphor@2x.png"
            title="Waste Classification"
            text="ML models by Kaggle dataset"
            link="https://github.com/Hyeji-Han/Waste-Classification/blob/main/waste_Classification.ipynb"
          />
          <LinkBox
            icon="/images/Phosphor@2x.png"
            title="eXplainable Human"
            text="Game Art Workshop"
            link="https://www.isabellearvers.com/2019/05/games-as-lights-and-colors-on-canvas-workshop-acc-gwangju-isea-2019/"
          />
          <LinkBox
            icon="/images/Video@2x.png"
            title="Certificate of Family Relations"
            text="Short Film"
            link="https://vimeo.com/320956895"
          />
          <LinkBox
            icon="/images/capstone@2x.png"
            title="Capstone Design Project"
            text={`Data Mining  & Visualization`}
            link=""
          />
        </div>
      </div>
    </div>
  );
}

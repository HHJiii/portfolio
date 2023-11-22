import React, { useState } from 'react';
import style from '../styles/Home.module.scss';
import Card from 'components/card/Card';
import LinkBox from 'components/link-box/LinkBox';
import json from '../data.json';
import { useRouter } from 'next/router';
import { useScrollFadeIn } from '../hooks/usescroll'; 

export default function Home() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const animatedItem1 = useScrollFadeIn('0', '50');
  const animatedItem2 = useScrollFadeIn('0.05', '50');
  const animatedItem3 = useScrollFadeIn('0.1', '50');

  const router = useRouter();

  const contacts = [
    { label: 'LinkedIn', value: 'https://www.linkedin.com/in/hyeji-han', rel: 'noopener noreferrer' },
    { label: 'Github', value: 'https://github.com/Hyeji-Han', rel: 'noopener noreferrer' },
    { label: 'Medium', value: 'https://medium.com/@hyejihan', rel: 'noopener noreferrer' },
  ];

  return (
    <div className={style.container}>
      <div className={style.section}>
        <div className={style.section1}>
          <div className={style.section1Wapper}>
            <h1 {...animatedItem1} className={style.intro}>
              {`My name is Paige Han, a`}
              <span
                className={`${style.designation} ${isClicked ? style.clicked : ''}`}
                onClick={handleClick}
              >
                {isClicked ? ' Product Researcher' : ' Product Designer'}
              </span>
              {` from Seattle.`}
            </h1>
            <div className={style.description}>
              <span {...animatedItem2}>
                who values many multi-faceted factors of the product —
                technology, accessibility, and business strategy.
              </span>
              <div {...animatedItem3} className={style.contacts}>
                {contacts.map((contact, i) => (
                  <button
                    key={`contact: ${i}`}
                    onClick={() => router.push(contact.value)}
                  >
                    {contact.label}
                  </button>
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
         target="_blank"
         rel="noopener noreferrer"
/>
        <LinkBox
        icon="/images/Article@2x.png"
        title="Nudge Trilogy : Dark, White..."
        text="Published article on Medium"
        link="https://medium.com/design-bootcamp/nudge-trilogy-dark-white-and-no-nudge-zone-ae028f48a4e3"
        target="_blank"
        rel="noopener noreferrer"
/>
        <LinkBox
        icon="/images/Article@2x.png"
        title="Galápagos Syndrome of..."
        text="Published article on Medium"
        link="https://medium.com/design-bootcamp/the-gal%C3%A1pagos-syndrome-of-technology-in-south-korea-2f3a4d7250a" target="_blank"
        rel="noopener noreferrer"
/>
        <LinkBox
        icon="/images/Article@2x.png"
        title="Explainable AI(XAI)"
        text="Published article on Medium"
        link="https://medium.com/@hyejihan/explainable-human-can-the-ego-be-explained-f4ee3308bf89"
        target="_blank"
        rel="noopener noreferrer"
/>
        <LinkBox
        icon="/images/Article@2x.png"
        title="Beyond the Human-Centered..."
        text="Published article on Medium"
        link="https://medium.com/design-bootcamp/beyond-the-human-centered-design-9da5fb33058f"
        target="_blank"
        rel="noopener noreferrer"
        />
        <LinkBox
          icon="/images/Phosphor@2x.png"
          title="Machinima Game Design"
          text="Game Art Workshop"
          link="https://www.isabellearvers.com/2019/05/games-as-lights-and-colors-on-canvas-workshop-acc-gwangju-isea-2019/"
          target="_blank"
          rel="noopener noreferrer"
        />
        <LinkBox
          icon="/images/Phosphor@2x.png"
          title="Waste Classification"
          text="ML models by Kaggle dataset"
          link="https://github.com/Hyeji-Han/Waste-Classification/blob/main/waste_Classification.ipynb"
          target="_blank"
          rel="noopener noreferrer"
        />
        <LinkBox
          icon="/images/Phosphor@2x.png"
          title="SleepNova, Smart sleep mask"
          text="Prototype presentation"
          link="https://drive.google.com/file/d/17qHkwLj5f9DSWTXc0sOvLygxX4bCVvVh/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        />
        </div>
      </div>
    </div>
  );
}
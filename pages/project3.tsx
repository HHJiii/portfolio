/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import map from "@image/mainfeature3.png";
import record from "@image/record.svg";
import sm from "@image/smiley.svg";
import house from "@image/house.svg";
import one from "@image/one.svg";
import two from "@image/two.svg";

import style from "../styles/Project3.module.scss";
import { useEffect, useRef, useState } from "react";
import { useResize } from "hooks/useResize";
import json from "../data.json";
import { useRouter } from "next/router";
import useMoveScrool from "hooks/useProgess";

export default function ProjectOne() {
  const ref = useRef<any>(null);
  const [divHeight, setDivHeight] = useState(0);
  const { nowWidth, nowHeight } = useResize();
  const [nowProgress, setNowProgress] = useState(0);

  const goodsTabs: { [x in number]: any } = {
    0: useMoveScrool(),
    1: useMoveScrool(),
    2: useMoveScrool(),
    3: useMoveScrool(),
    4: useMoveScrool(),
    5: useMoveScrool(),
    6: useMoveScrool(),
  };

  useEffect(() => {
    function refHeight(index: number) {
      return goodsTabs[index].element.current?.offsetTop ?? 0;
    }
    if (refHeight(0) <= divHeight && refHeight(1) > divHeight) {
      setNowProgress(0);
    } else if (refHeight(1) <= divHeight && refHeight(2) > divHeight) {
      setNowProgress(1);
    } else if (refHeight(2) <= divHeight && refHeight(3) > divHeight) {
      setNowProgress(2);
    } else if (refHeight(3) <= divHeight && refHeight(4) > divHeight) {
      setNowProgress(3);
    } else if (refHeight(4) <= divHeight && refHeight(5) > divHeight) {
      setNowProgress(4);
    } else if (refHeight(5) <= divHeight) {
      setNowProgress(5);
    }
  }, [divHeight]);

  const router = useRouter();

  const process = [
    { name: "1. Research", text: "Learn about the topic and ourselves" },
    { name: "2. Exploration", text: "Gather High-Quality  Understanding" },
    { name: "3. Modeling", text: "Create a Brilliant Data & AI Model" },
    { name: "4. Design", text: "Start design works - visual, sound, space" },
    { name: "5. Prototype", text: "Hold Inspirational  Design Sprints" },
    { name: "6. Reflection", text: "Get Fast, Productive Feedback" },
  ];

  useEffect(() => {
    window.addEventListener("scroll", event =>
      setDivHeight(window.pageYOffset)
    );
  }, []);

  return (
    <div ref={ref} className={style.project2Container}>
      {nowWidth > 1200 && (
        <div
          className={style.progress}
          style={{ opacity: divHeight > 300 ? "1" : "0" }}
        >
          <button
            style={{ color: nowProgress === 0 ? "black" : "#565656" }}
            onClick={() => {
              goodsTabs[0].onMoveToElement();
            }}
          >
            Overview
          </button>
          <button
            style={{ color: nowProgress === 1 ? "black" : "#565656" }}
            onClick={() => {
              goodsTabs[1].onMoveToElement();
            }}
          >
            Research
          </button>
          <button
            style={{ color: nowProgress === 2 ? "black" : "#565656" }}
            onClick={() => {
              goodsTabs[2].onMoveToElement();
            }}
          >
            Data Modeling
          </button>
          <button
            style={{ color: nowProgress === 3 ? "black" : "#565656" }}
            onClick={() => {
              goodsTabs[3].onMoveToElement();
            }}
          >
            Design
          </button>
          <button
            style={{ color: nowProgress === 4 ? "black" : "#565656" }}
            onClick={() => {
              goodsTabs[4].onMoveToElement();
            }}
          >
            Prototype
          </button>
          <button
            style={{ color: nowProgress === 5 ? "black" : "#565656" }}
            onClick={() => {
              goodsTabs[5].onMoveToElement();
              setNowProgress(5);
            }}
          >
            Reflection
          </button>
        </div>
      )}
      <div className={style.intro}>
        <span>Interactive Media Art</span>
        <h1>eXplainable Human</h1>
        {nowWidth > 1200 ? (
          <div className={style.mainImage}>
            <img
              src={"/images/met5.jpeg"}
              alt="project3-main"
              className={style.introImage}
            />
          </div>
        ) : (
          <>
            {nowWidth > 800 ? (
              <img
                src={"/images/met5.jpeg"}
                alt="project3-main"
                className={style.introImage}
              />
            ) : (
              <img
                src={"/images/met5800.jpeg"}
                alt="project3-main"
                className={style.introImage}
              />
            )}
          </>
        )}
      </div>
      <div ref={goodsTabs[0].element} className={style.overview}>
        <span>Overview</span>
        <p>
         {`Can the Ego be Explained? It seems impossible to describe "the self" in one sentence. Unexplained uncertainty has also affected the field of AI, and the concept of eXplainable AI has emerged to solve this problem. This shows the human will to pursue more reliability by explaining the reasons and processes that AI uses to produce results.`}
        </p>
        <p>
        {`Then, is everything that can be explained reliable? met. chose a most difficult topic of the 'self' as our object explanation and tried to see if it could be better understood through dialogue with AI. e also want to experience the coincidence and conflict that occurs between the 'self' described by AI and the 'self' described by members of audience.`}
        </p>
      </div>
      {nowWidth > 800 ? (
        <table className={style.table}>
          <thead>
            <tr>
              <th>Team</th>
              <th>Duration</th>
              <th>Tool</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{`Team proejct`}</td>
              <td>16 weeks</td>
              <td>Javascript</td>
              <td>Data Modeling</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td>Projection Mapping</td>
              <td>Interaction Design</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td>Touch Designer</td>
              <td>Exhibit Design</td>
            </tr>
          </tbody>
        </table>
      ) : (
        <>
          <table className={style.table}>
            <thead>
              <tr>
                <th>Team</th>
                <th>Duration</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Tean proejct</td>
                <td>16 weeks</td>
              </tr>
            </tbody>
          </table>
          <table className={style.table}>
            <thead>
              <tr>
                <th>Tool</th>
                <th>Role</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Javascript</td>
                <td>Data Modeling</td>
              </tr>
              <tr>
                <td>Projection Mapping</td>
                <td>Interaction Design</td>
              </tr>
              <tr>
                <td>Touch Designer</td>
                <td>Exhibit Design</td>
              </tr>
            </tbody>
          </table>
        </>
      )}
      <div style={{ width: "100%" }}>
        <Sub
          name={`"Who are met.?"`}
          content={`met. is an art collective. Our collaborative practice seeks to navigate the confluence of art, science, technology, and the philosophy. Through art, the interdisciplinary group of specialists, including a data scientist, programmer, designer, engineer and film-maker, aims to explore the relationship between the self and the world, and new forms of technology.`}
          background={"black"}
        />
        <Sub
          name={`"Why we met?"`}
          content={`Artificial intelligence is being introduced in many specialized fields such as finance, medical care, and education, but it seems that artificial intelligence has not yet reached our inner minds and understandings of our self-image. Can AI explain the human ego? With this question in mind, my team, met., planned an interactive media artwork.`}
          background={"#365F7D"}
        />
      </div>
      <div className={style.designProcess}>
        <div className={style.designIntro}>
          <h2>WORK PROCESS</h2>
          <span>
            {`We follow the steps below, from identifying problems to designing individual audience experiences.`}
          </span>
          <div className={style.processesCon}>
            <div className={style.processes}>
              {process.map((e, i) => (
                <div key={`process: ${i}`} className={style.process}>
                  <div>{e.name}</div>
                  <div>{e.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div ref={goodsTabs[1].element} className={style.chepter}>
          <h2>01</h2>
          <h2>RESEARCH</h2>
          <div className={style.main}>
            <span>01 Research</span>
            <h3 className={style.first}>{`Background of the Exhibition`}</h3>
            <p className={style.p}>
            {`As our society has become more complicated, we have begun to deal with personal information and assets based on customer trust in the fields of finance, insurance, and medical care. Beyond simply classifying images or predicting numbers, AI is now being created for "making clear judgments". As a result, there is a need to develop AI and algorithms to ensure fairness, reliability, and accuracy.`}
            </p>
            <div className={style.image2}>
              <img src="/images/teammet.jpg" alt="01" />
              <img src="/images/poster_rgb.png" alt="01" />
            </div>
            <div
              style={{
                width: "100%",
                fontSize: "36px",
                fontWeight: "bold",
                display: "flex",
                justifyContent: "center",
                color: "white",
                backgroundColor: "black",
                marginTop: "88px",
                padding: "30px 40px",
                textAlign: "center",
              }}
            >
              Can the Ego be Explained?
            </div>
          </div>
        </div>
        <div className={style.chepter}>
          <h2>02</h2>
          <h2>EXPLORE</h2>
          <div className={style.main}>
            <span>02 Explore XAI</span>
            <h3 className={style.first}>{`XAI:WHAT IS IT?`}</h3>
            <p className={style.p}>
            {`Explainable AI (XAI) or Interpretable AI, is artificial intelligence (AI) whose decisions and predictions can be understood by humans. It contrasts with the "black box" concept in machine learning where even its designers cannot explain why an AI arrived at a specific decision.`}
            </p>
            <img
              className={style.image}
              src="/images/metimg1.png"
              alt="01"
            />
            <h3>{`HOW DOES XAI WORK?`}</h3>
            <p className={style.p}>
             It can be useful to subdivide XAI into these three categories:<br>
              </br>
              a. Explainable data<br></br>
              b. Explainable predictions<br></br>
              c. Explainable algorithms<br></br>
            
              These principles help define the output expected from XAI. Explainable AI (XAI) is operated as follows:
            </p>
            <img
              className={style.image}
              src="/images/DXAI.png"
              alt="01"
            />
          </div>
        </div>
        <div className={style.chepter}>
        <div ref={goodsTabs[2].element} />
          <h2>03</h2>
          <h2>DATA MODELING</h2>
          <div className={style.main}>
            <span>03 Data Modeling</span>
            <h3 className={style.first}>{`Build blocks of natural language; Intent and entities`}</h3>
            <p className={style.p}>
            {`The AI implemented in this exhibition asks questions for the audience to introduce themselves, collects the audience's answers, and extracts and interprets keywords. After that, the AI infers the audience's collective ego by reconstructing sentences based on the interpreted content.`}<br></br>
            <br></br>
            To build this AI, as a data architect and IxD designer, I was the first runner in this marathon of a project.<br></br>
            <br></br>
            {`I constructed three-stage system of questions that our AI could use to understand people. The first stage is demographic questions such as “gender,” and “age.” The second is sociological questions about friendship and hatred in this world. It is more radical than the first stage. The third stage involves more confidential questions. Our AI asks audience what secrets they cherish and they trust AI. The answers to these questions are incorporated into our own rule-based matrix, and a line of sentences expressing each person’s self-image is derived.`}
            </p>
            <img
              className={style.image}
              src="/images/met7.png"
              alt="01"
            />
            <h3>{`GPT-3 for the Subtle Art`}</h3><br></br>
            <img
              className={style.image}
              src="/images/metimg3.png"
              alt="01"
            />
            <p className={style.p}>
            {`At the heart of this project, we use the “GPT-3” language model to extend this simple line of extracted sentences. Generative Pre-trained Transformer 3 (GPT-3; stylized GPT·3) is an autoregressive language model that uses deep learning to produce human-like text. Given an initial text as a prompt, it will produce text that continues the prompt. We aimed to give our audience members “reasonable” answers by using 172.5 billion parameters.`}
<br></br>
            {`To minimize  the toxicity of this GPT-3, our team trained a lot of versions of source sentences in the open API playground, our team was able to get the best answers and create explainable data.`}
            </p>
            <img
              className={style.image}
              src="/images/gpt3.gif"
              alt="01"
            />
          </div>
        </div>
        <div className={style.chepter}>
        <div ref={goodsTabs[3].element} />
          <h2>04</h2>
          <h2>DESIGN</h2>
          <div className={style.main}>
            <span>04 Design</span>
            <h3 className={style.first}>{`Design Factors`}</h3>
            <p className={style.p}>
              Design part has three main features revolving around Visual Design, Sound Design, and Space Design.
            </p>
            <div className={style.ideate}>
              <div className={style.row}>
                <img src={"images/met10.png"} alt="" />
                <div className={style.desc}>
                  <span>STEP1</span>
                  <h3>Visual Design</h3>
                  <p>
                  {`The circular symbol shape was envisioned to express the audience's self-image. As the answer intensifies, the color surrounding the circle becomes darker.`}
                  </p>
                  <img src={""} alt="" />
                </div>
              </div>
              <div className={style.row}>
                <div className={style.desc}>
                  <span>STEP2</span>
                  <h3>Sound Design</h3>
                  <p>
                    The sound is designed to feel heavy and intense, developing with the size or color of the circular symbol. This creates a more atmospheric and professional exposition.<br></br><span onClick={() => router.push('https://soundcloud.com/jseok9712/sd001-free?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing')} style={{ cursor: "pointer", color: "#777777", fontSize: "16px" }}>
                    * Click on this to explore the more detailed sound.<link rel="stylesheet" href="https://soundcloud.com/jseok9712/sd001-free?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" /> 
                   </span>
                  </p>
                </div>
                <img src={"images/SOUND.gif"} alt="" />
              </div>
              <div className={style.row}>
                <img src={"images/spacedesign.png"} alt="" />
                <div className={style.desc}>
                  <span>STEP3</span>
                  <h3>Space Design</h3>
                  <p>
                    To create an intimate and communicative atmosphere, we hosted the event in a small underground gallery space in Sinchon, Seoul. In a narrow space of only 250 square feet, the AI and the audience were present, trying to create a feeling of mutual communication.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className={style.chepter}>
        <div ref={goodsTabs[4].element} />
          <h2>05</h2>
          <h2>PROTOTYPE</h2>
          <div className={style.main}>
            <span>05 Prototype</span>
            <h3 className={style.first}>Interactive Media</h3>
            <p className={style.p}>
              This is part of our exhibition. The audience inputs answers, and AI is collecting and analyzing the answers.
            </p>
            <img className={style.image} src="/images/exhuman.gif" alt="01" />

            <h3 style={{ marginTop: "50px" }}>{`Interactive Effects`}</h3>
            <p className={style.p}>
              A dramatic element was inserted in the middle to break the monotony of the question and answer format. Like an Easter egg, dummy phrases are engraved on the face, and blue screens are sporadically floating to increase tension..
            </p>
            <div className={style.image2}>
              <img src="/images/met3.jpeg" alt="01" />
              <img src="/images/met4.jpeg" alt="01" />
            </div>
          </div>
          <div className={style.moreDetail}>
            <button
              style={{ cursor: "pointer" }}
              onClick={() =>
                router.push(
                  "https://www.teammet.imweb.me"
                )
              }
            >
              More Detailed Information
            </button>
          </div>
        </div>
        <div className={style.chepter}>
          <h2>06</h2>
          <h2>EXHIBITION</h2>
          <div className={style.main}>
            <span>06 Exhibition</span>
            <h3 className={style.first}>{`We invite you to "eXplainable Human"`}</h3><br></br>
            <img
              className={style.image}
              src="/images/met6.jpeg"
              alt="01"
            />
            <p className={style.p}>
                    We held an exhibition for a total of three days from 4th to 6th of November.<br></br><span onClick={() => router.push('https://vimeo.com/manage/videos/774940869')} style={{ cursor: "pointer", color: "#777777", fontSize: "20px" }}>
                    * Click here to watch our documenting video.<link rel="stylesheet" href="https://vimeo.com/manage/videos/774940869" /> 
                   </span>
                  </p>
          </div>
        </div>
      </div>
      <div className={style.learn}>
        <div ref={goodsTabs[5].element} className={style.title}>
          <h2>REFLECTION</h2>
          <span>These are lessons I learned from this project</span>
        </div>
        <div className={style.contents}>
          <div className={style.content}>
            {nowWidth > 800 && (
              <img
                className={style.image}
                src="/images/egoposter.jpeg"
                alt="learned"
              />
            )}
            <div className={style.desc}>
              <h3>Explainability of human</h3>
              <p>{`In other words, can AI explain us?
               This was the only purpose of our exhibition. The audience received an answer as if they were listening to a perfect explanation for themselves at a fortune-telling shop, or with a slight unpleasant feeling of uncanniness. It's fascinating to see the different ways that people view themselves.`}</p>
            </div>
          </div>
          <div className={style.content}>
            {nowWidth > 800 && (
              <img
                className={style.image}
                src="/images/met7.jpeg"
                alt="learned"
              />
            )}
            <div className={style.desc}>
              <h3>The Shadow of AI Lurks in the Uncanny Valley</h3>
              <p>{`Our AI model and GPT3 created self-images that the audience could print out and receive as a receipt. The mass-produced "ego" became something like a commodity, pulled out of a factory line reminiscent of Henry Ford's conveyor belts. The audience was able to feel the power of the Artificial Intelligence, and the eerie feeling of being reduced to a mere product.`}</p>
            </div>
          </div>
        </div>
      </div>
      <span
        style={{
          borderTop: "1px solid black",
          width: "80%",
          maxWidth: "1200px",
        }}
      />
      <div className={style.projects}>
        <h2>More Projects</h2>
        <div className={style.images}>
          {json.card.map(({ title, sub, image, path }, i) => {
            if (i !== 1) {
              return (
                <button
                  className={style.card}
                  onClick={() => router.push(path)}
                  key={i}
                >
                  <div className={style.row}>
                    <span>{title}</span>
                    <span>{sub}</span>
                  </div>
                  <div className={style.container}>
                    <img src={image} alt="" />
                  </div>
                </button>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}

function Sub({
  name,
  content,
  background,
}: {
  name: string;
  content: string;
  background: string;
}) {
  return (
    <div
      style={{
        backgroundColor: background,
      }}
      className={style.subContainer}
    >
      <div className={style.subWapper}>
        <h3>{name}</h3>
        <p>{content}</p>
      </div>
    </div>
  );
}

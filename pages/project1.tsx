/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Back from "@image/back.svg";
import Test from "@image/testPerson.webp";
import More from "@image/more.svg";
import Text from "@image/chat.png";
import bottom from "@image/Columns-1.png";
import map from "@image/mainfeature3.png";
import record from "@image/record.svg";
import sm from "@image/smiley.svg";
import house from "@image/house.svg";
import one from "@image/one.svg";
import two from "@image/two.svg";

import style from "../styles/Project1.module.scss";
import { useEffect, useRef, useState } from "react";
import { useResize } from "hooks/useResize";
import json from "../data.json";
import { useRouter } from "next/router";
import useMoveScrool from "hooks/useProgess";

export default function ProjectOne() {
  const ref = useRef<any>(null);
  const [divHeight, setDivHeight] = useState(0);
  const [moreIndex, setMoreIndex] = useState(0);
  const { nowWidth, nowHeight } = useResize();

  const goodsTabs = {
    0: useMoveScrool(),
    1: useMoveScrool(),
    2: useMoveScrool(),
    3: useMoveScrool(),
    4: useMoveScrool(),
    5: useMoveScrool(),
    6: useMoveScrool(),
  };

  const router = useRouter();

  const process = [
    { name: "Research", text: "Solis works seamlessly" },
    { name: "Emphasize", text: "Solis works seamlessly" },
    { name: "Define", text: "Solis works seamlessly" },
    { name: "Ideate", text: "Solis works seamlessly" },
    { name: "Test", text: "Solis works seamlessly" },
    { name: "Iteration", text: "Solis works seamlessly" },
  ];

  const more = [
    "/images/tablet1.jpg",
    "/images/tablet2.jpg",
    "/images/tablet3.jpg",
  ];

  useEffect(() => {
    window.addEventListener("scroll", event =>
      setDivHeight(window.pageYOffset)
    );
  }, []);

  return (
    <div ref={ref} className={style.project1Container}>
      {nowWidth > 1200 && (
        <div
          className={style.progress}
          style={{ opacity: divHeight > 300 ? "1" : "0" }}
        >
          <button onClick={() => goodsTabs[0].onMoveToElement()}>
            Overview
          </button>
          <button onClick={() => goodsTabs[1].onMoveToElement()}>
            Research
          </button>
          <button onClick={() => goodsTabs[2].onMoveToElement()}>
            Final Design
          </button>
          <button onClick={() => goodsTabs[3].onMoveToElement()}>Test</button>
          <button onClick={() => goodsTabs[4].onMoveToElement()}>
            Main Features{" "}
          </button>
          <button onClick={() => goodsTabs[5].onMoveToElement()}>
            Takeaways
          </button>
        </div>
      )}
      <div className={style.intro}>
        <span>Service Design</span>
        <h1>Eco-Log</h1>
        <div className={style.introImage}>
          <div className={style.border}>
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
            <Image
              style={{
                transform: `translateY(${
                  -divHeight + 100 < -180 ? -180 : -divHeight + 100
                }px) translateZ(0px)`,
                zIndex: "1",
                width: "90%",
              }}
              src={Text}
              alt="back"
              width={240}
            />
            <div className={style.footer}>
              <Image src={bottom} alt="채팅" fill />
            </div>
          </div>
          {nowWidth > 800 && (
            <>
              <img
                style={{
                  transform: `translateY(${
                    -divHeight + 100 < -180 ? -180 : -divHeight + 100
                  }px) translateZ(0px)`,
                  position: "absolute",
                  top: "200px",
                  width: "150px",
                  left: "230px",
                  zIndex: "100",
                }}
                src={"/images/modal.png"}
                alt=""
              />
              <img
                style={{
                  transform: `translateY(${
                    -divHeight + 100 < -180 ? -180 : -divHeight + 100
                  }px) translateZ(0px)`,
                  position: "absolute",
                  top: "40px",
                  right: "230px",
                  width: "150px",
                }}
                src={"/images/mention@2x.png"}
                alt=""
              />
            </>
          )}
        </div>
      </div>
      <div ref={goodsTabs[0].element} className={style.overview}>
        <span>Overview</span>
        <p>
          Eco-Log is the service featuring of recording waste disposal and
          providing impact data. The service helps users become a more
          waste-conscious by rewarding their action.The concept behind the
          platform is an equitable distribution of fresh produce and a postive
          enviornmental impact.
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
              <td>Independent proejct</td>
              <td>12 weeks</td>
              <td>Figma</td>
              <td>User research</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td>Framer</td>
              <td>End to end Design</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td>Miro</td>
              <td>Usability Test</td>
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
                <td>Independent proejct</td>
                <td>12 weeks</td>
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
                <td>Figma</td>
                <td>User research</td>
              </tr>
              <tr>
                <td>Framer</td>
                <td>End to end Design</td>
              </tr>
              <tr>
                <td>Miro</td>
                <td>Usability Test</td>
              </tr>
            </tbody>
          </table>
        </>
      )}
      <div style={{ width: "100%" }}>
        <Sub
          name={"PROBLEM"}
          content={`Most people throw away dozens of pieces of garbage a day, but it's hard to recognize at once how much they consume and throw away, and how those waste damage the environment. And there is also a lack of continuous motivation to continue this behavior.`}
          background={"black"}
        />
        <Sub
          name={"SOLUTION"}
          content={`Eco-Log starts with the user's lower-effort user actions. It encourages people discard their waste in an appropriate way and reduce the amount. It also motivated users achieve their goals by allowing them to gather digital rewards, which can be traded in the app for discount codes.`}
          background={"#71B458"}
        />
      </div>
      <div className={style.designProcess}>
        <div className={style.designIntro}>
          <h2>Design Process</h2>
          <span>
            {`Solis helps you manage your calendar throughout the day. From events
            to tasks and meetings, it's all taken care of.`}
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
            <h3>{`Background & Primary Research`}</h3>
            <p className={style.p}>
              Waste is a significant global issue. The environmental impact is
              monumental, with massive amounts of waste generated annually with
              only basic or little treatment to minimize its impact.
            </p>
            <p className={style.p}>
              According to the studies, US citizens and businesses are the
              largest contributors to the waste problem. The US represents 4% of
              the global population but generates 12% of global municipal waste.
            </p>
            <div className={style.image2}>
              <img src="/images/one1.png" alt="01" />
              <img src="/images/one2.png" alt="01" />
            </div>
          </div>
        </div>
        <div className={style.chepter}>
          <h2>02</h2>
          <h2>EMPATHIZE</h2>
          <div className={style.main}>
            <span>01 Empathize</span>
            <h3>{`Survey`}</h3>
            <p className={style.p}>
              I create the questionnaire including 13 types of questions, and
              got 30 replies from the all over the United States.
            </p>
            <p className={style.p}>
              According to the survey results, more than 80% of respondents were
              aware of the direness of the garbage issue in the communitu, but
              there was a slight difference in the specific disposal methods and
              the level of social impact expected.
            </p>
            <p className={style.p}>
              It depends on the type of residence and the state they are living
              now. I came to understand how they manage waste disposal according
              to their lifestyle.
            </p>
            <img className={style.image} src="/images/main2.png" alt="01" />
            <h3 style={{ marginTop: "50px" }}>{`Interview`}</h3>
            <p className={style.p}>
              To correlate the above two factors, I conducted interviews with 5
              people living in the U.S. All interviewees have concernd that
              there will be side effects if we start to regulate the garbage
              problem.
            </p>
            <p className={style.p}>
              {`However, there is a general consensus among them about the need
              for compensation in community . They insisted that "rewards" would
              encourage people to engage the system from a long-term
              perspective.`}
            </p>
            <img className={style.image} src="/images/Rows.png" alt="01" />
            <h3 style={{ marginTop: "50px" }}>{`User Persona`}</h3>
            <p className={style.p}>
              {`I created two types of personas. One is in her 30s and another is in her 20s, and both are living in the United States.`}
            </p>
            <p className={style.p}>
              {`Their knowledge of the environment degredation is relatively different, but it is clear that they take the garbage issue seriously and want services related to awareness improvement.`}
            </p>
            <div className={style.image2}>
              <img
                className={style.image2}
                src="/images/persona1.png"
                alt="01"
              />
              <img
                className={style.image}
                src="/images/persona2.png"
                alt="01"
              />
            </div>
            <h3 style={{ marginTop: "50px" }}>{`User Journey Map`}</h3>
            <p className={style.p}>
              {`I created User Journey Map by five Journey Steps.

Users gathered waste, searched Information, disposed of waste, reported Disposal Results, and got compensation through the service.`}
            </p>
            <div className={style.image2}>
              <img className={style.image2} src="/images/frame1.png" alt="01" />
              <img className={style.image} src="/images/frame2.png" alt="01" />
            </div>
          </div>
        </div>
        <div className={style.chepter}>
          <h2>03</h2>
          <h2>DEFINE</h2>
          <div className={style.main}>
            <span>03 Define</span>
            <h3>{`Affinity Map`}</h3>
            <p className={style.p}>
              For organizing the ideas from research, I created an affinity map.
              All interviewers were aware of the seriousness of garbage issues.
              However, the priorities of what they put forward as problem
              solutions were different. I classified into four
              categories-Awareness, Incentives, Behaviors, and Improvements.
            </p>
            <img className={style.image} src="/images/image8.png" alt="01" />
            <h3>{`Pain Points`}</h3>
            <p className={style.p}>
              I found 10 major pain points that all were unique in their
              situation, contexts, and relevant to the original problem. I
              decided that there were FOUR insights that we wanted to
              concentrate on moving forward.
            </p>
          </div>
        </div>
        <div className={style.chepter}>
          <h2>04</h2>
          <h2>IDEATE</h2>
          <div className={style.main}>
            <span>04 Ideate</span>
            <h3>{`Card Sorting`}</h3>
            <p className={style.p}>
              To come up with a wide range of ideas, we engaged in an informed
              brainstorming session and creativity/feasibility chart keeping our
              pain points in mind. Below are card sorting.
            </p>
            <h3>{`Information Architecture`}</h3>
            <p className={style.p}>
              Based on the card sorting, I created Information Architecture for
              the holistic sketch.
            </p>
            <img className={style.image} src="/images/info.jpg" alt="01" />
            <h3 style={{ marginTop: "50px" }}>{`Low Fidelity Sketch`}</h3>
            <p className={style.p}>
              To provide intuitive flow, I sketched based on user flow for the
              tasks.
            </p>
            <img
              className={style.image}
              src="/images/low-fidelity.png"
              alt="01"
            />
            <h3 style={{ marginTop: "50px" }}>{`Wireframe`}</h3>
            <img className={style.image} src="/images/lowfi.jpg" alt="01" />
            <div ref={goodsTabs[2].element}></div>
            <h3 style={{ marginTop: "50px" }}>{`Final Design`}</h3>
            <p className={style.p}>
              For the Final Design, I revised the design and created digital
              high-fidelity wireframes.Refer to figma file for more detailed
              design.
            </p>
            <div
              style={{
                width: "100%",
                overflow: "hidden",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img style={{ width: "1200px" }} src="/images/box.jpg" alt="01" />
            </div>
          </div>
        </div>
        <div ref={goodsTabs[3].element} className={style.chepter}>
          <h2>05</h2>
          <h2>TEST</h2>
          <div className={style.main}>
            <span>05 Test</span>
            <h3>{`Usability Testing`}</h3>
            <img className={style.image} src="/images/c1.gif" alt="01" />
            <p className={style.p}>
              To test my final prototype’s usability, I asked my interviewees if
              they would be willing to test out the app. Thankfully, most of
              them were interested in trying it out and provided useful feedback
              that would’ve been challenging to identify otherwise
            </p>
            <p className={style.p}>
              Eco-Log received a relatively high score of 80 points in Usability
              testing.
            </p>
            <div className={style.row}>
              <img src="/images/r-1.png" alt="01" />
              <img src="/images/r-3.png" alt="01" />
              <img src="/images/r-2.png" alt="01" />
            </div>
            <h3 style={{ marginTop: "50px" }}>{`After Usability Test`}</h3>
            <img className={style.image} src="/images/img.jpg" alt="01" />
            <p className={style.p}>
              Users gave positive feedback on recording information and claiming
              rewards. Due to ‘compensation,’ user said that they felt being
              motivated.
            </p>
            <p className={style.p}>
              On the other hand, I found some features that were most
              uncomfortable and even unlikely to use them well. It seems
              necessary to improve another functions such as finding the nearest
              recycling center or checking the vendor’s schedules.
            </p>
            <div className={style.image2}>
              <img src="/images/test1.png" alt="01" />
              <img src="/images/test2.png" alt="01" />
            </div>
          </div>
        </div>
      </div>
      <div ref={goodsTabs[4].element} className={style.feature}>
        <div className={style.title}>
          <h2>Main Features</h2>
          <span>
            The service has three main features revolving around Record
            Tracking, Identifying The Waste, and Rewarding.
          </span>
        </div>
        <div className={style.item}>
          <img
            className={style.itemImg}
            style={{ borderRadius: "30px" }}
            src={"/images/c2.gif"}
            alt="사진"
          />
          <div className={style.desc}>
            <Image src={sm} alt="icon" width={30} height={30} />
            <h3>Record Tracking</h3>
            <p>{`Eco-log provides a record tracking function so that users can check all the trash they've thrown away.`}</p>
            <p>{`Dive deep into data with advanced analysis. Users can get key statistics like CO2 tracking and analysis of your whole discarding progress.`}</p>
          </div>
        </div>
        <div className={style.item}>
          <div className={style.desc}>
            <Image src={record} alt="icon" width={30} height={30} />
            <h3>Identify The Waste</h3>
            <p>{`We identify your waste quickly and accurately by using AI technology. Users’ uploaded data will be a great nourishment asset for promoting community and state-specific garbage policies.`}</p>
          </div>
          <img
            className={style.itemImg}
            style={{ borderRadius: "30px" }}
            src={"/images/c3.gif"}
            alt="사진"
          />
        </div>
        <div className={style.item}>
          <img
            className={style.itemImg}
            src={"/images/rewarding.png"}
            alt="사진"
          />
          <div className={style.desc}>
            <Image src={map} alt="icon" width={30} height={30} />
            <h3>Rewarding</h3>
            <p>{`After recording, users can claim rewards. The waste disposal validation process allows users to gather digital rewards, which can be traded in the app for discount codes to purchase environmental products.`}</p>
          </div>
        </div>
      </div>
      <div className={style.more}>
        <div className={style.title}>
          <h2>One more step!</h2>
          <span>
            Eco-Log offers another type of the application which can be utilized
            on a large screen.
          </span>
        </div>
        <div className={style.content}>
          <img className={style.moreImage} src={more[moreIndex]} alt="more" />
          <div className={style.btns}>
            {[
              "Enjoy Large Screen",
              "Real-time information",
              "With your neighnors",
            ].map((e, i) => (
              <button
                style={{
                  backgroundColor: i === moreIndex ? "#99CD66" : "transparent",
                }}
                key={`btn: ${i}`}
                onClick={() => setMoreIndex(i)}
              >
                <Image
                  style={{
                    filter:
                      i !== moreIndex
                        ? "invert(100%) sepia(2%) saturate(348%) hue-rotate(258deg) brightness(118%) contrast(100%)"
                        : "invert(0%) sepia(1%) saturate(7475%) hue-rotate(300deg) brightness(97%) contrast(99%)",
                  }}
                  src={house}
                  alt=""
                  width={25}
                  height={25}
                />
                <span>{e}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className={style.learn}>
        <div ref={goodsTabs[5].element} className={style.title}>
          <h2>Takeaways</h2>
          <span>These are lessons I learned from this project</span>
        </div>
        <div className={style.contents}>
          <div className={style.content}>
            {nowWidth > 800 && (
              <img
                className={style.image}
                src="/images/learned1.png"
                alt="learned"
              />
            )}
            <div className={style.desc}>
              <Image src={one} alt="icon" width={20} height={20} />
              <h3>the core of Choice architecture</h3>
              <p>{`The most important thing I learned from the project was to explore what services were needed to change users' behavior. In the whold process, I tried to put 'nudge' strategies everywhere to induce good behavior. Rather than directly telling users not to throw away trash, I learned to indirectly say how much your small steps are saving the planet, through design.`}</p>
            </div>
          </div>
          <div className={style.content}>
            {nowWidth > 800 && (
              <img
                className={style.image}
                src="/images/learned2.png"
                alt="learned"
              />
            )}
            <div className={style.desc}>
              <Image src={two} alt="icon" width={20} height={20} />
              <h3>the core of Choice architecture</h3>
              <p>{`The most important thing I learned from the project was to explore what services were needed to change users' behavior. In the whold process, I tried to put 'nudge' strategies everywhere to induce good behavior. Rather than directly telling users not to throw away trash, I learned to indirectly say how much your small steps are saving the planet, through design.`}</p>
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
            if (i !== 0) {
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
        <div>{content}</div>
      </div>
    </div>
  );
}

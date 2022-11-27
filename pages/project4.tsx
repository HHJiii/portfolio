/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Back from "@image/back.svg";
import Test from "@image/testPerson.webp";
import More from "@image/more.svg";
import Text from "@image/chat.png";
import bottom from "@image/Columns-1.png";
import map from "@image/mainfeature3.png";
import record from "@image/mainfeature2.png";
import sm from "@image/mainfeature1.png";


import style from "../styles/Project4.module.scss";
import { useEffect, useRef, useState } from "react";
import { useResize } from "hooks/useResize";
import json from "../data.json";
import { useRouter } from "next/router";
import useMoveScrool from "hooks/useProgess";

export default function ProjectOne() {
  const ref = useRef<any>(null);
  const [divHeight, setDivHeight] = useState(0);
  const [moreIndex, setMoreIndex] = useState(0);
  const { nowWidth } = useResize();
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

  const router = useRouter();

  const process = [
    { name: "1. Research", text: "Understand the background" },
    { name: "2. Emphasize", text: "Gather High-Quality User Understanding" },
    { name: "3. Define", text: "Create a Brilliant Design Brief" },
    { name: "4. Ideate", text: "Start developing solutions" },
    { name: "5. Test", text: "Hold Inspirational  Design Sprints" },
  ];

  const more = [
    "",
    "",
    "",
  ];
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
          <button
            style={{
              color: nowProgress === 0 ? "black" : "#565656",
            }}
            onClick={() => {
              goodsTabs[0].onMoveToElement();
              setNowProgress(0);
            }}
          >
            Overview
          </button>
          <button
            style={{ color: nowProgress === 1 ? "black" : "#565656" }}
            onClick={() => {
              goodsTabs[1].onMoveToElement();
              setNowProgress(1);
            }}
          >
            Method
          </button>
          <button
            style={{ color: nowProgress === 2 ? "black" : "#565656" }}
            onClick={() => {
              goodsTabs[2].onMoveToElement();
              setNowProgress(2);
            }}
          >
            Objective
          </button>
          <button
            style={{ color: nowProgress === 3 ? "black" : "#565656" }}
            onClick={() => {
              goodsTabs[3].onMoveToElement();
              setNowProgress(3);
            }}
          >
            Analysis Process
          </button>
          <button
            style={{ color: nowProgress === 4 ? "black" : "#565656" }}
            onClick={() => {
              goodsTabs[4].onMoveToElement();
              setNowProgress(4);
            }}
          >
            Benefit
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
        <span>Data Analysis Project</span>
        <h1>Social Network Analysis</h1>
        <h3>BIG DATA ANALYSIS CONTEST organized by Korea Performing Arts Box Office Information System(KOPIS)</h3>
        <br></br>
        {nowWidth > 1200 ? (
          <div className={style.mainImage}>
            <img
              src={"/images/cintest1.jpg"}
              alt="project4-main"
              className={style.introImage}
            />
          </div>
        ) : (
          <>
            {nowWidth > 800 ? (
              <img
                src={"/images/cintest1800.jpg"}
                alt="project4-main"
                className={style.introImage}
              />
            ) : (
              <img
                src={"/images/cintest1800.jpg"}
                alt="project4-main"
                className={style.introImage}
              />
            )}
          </>
        )}
      </div>
      <div ref={goodsTabs[0].element} className={style.overview}>
        <span>Overview</span>
        <p>
          I conducted an analysis of the relationship network of performing artists through the SNA (Social Network Analysis; the process of investigating social structures through the use of networks and graph theory) method.
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
              <td>4 weeks</td>
              <td>Excel VBA</td>
              <td>Data Mining</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td>Python</td>
              <td>Data Modeling/EDA</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td>Data Visualization</td>
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
                <td>{`Independent\n proejct`}</td>
                <td>4 weeks</td>
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
                <td>Excel VBA</td>
                <td>Data Mining</td>
              </tr>
              <tr>
                <td>Python</td>
                <td>Data Modeling/EDA</td>
              </tr>
              <tr>
                <td></td>
                <td>Data Visualization</td>
              </tr>
            </tbody>
          </table>
        </>
      )}
      <div style={{ width: "100%" }}>
      </div>
      <div className={style.designProcess}>
        <div className={style.designIntro}>
          <h2>WORK PROCESS</h2>
          <span>
            {``}
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
          <h2>METHOD</h2>
          <div className={style.main}>
            <span>01 Method</span>
            <h3 className={style.first}>{`What is Social Network Analysis`}</h3>
            <p className={style.p}>
              Social network analysis is the process of investigating social structures through the use of networks and graph theory. It characterizes networked structures in terms of nodes and the ties, edges, or links that connect them.
            </p>
            <p className={style.p}>
              Social network analysis (SNA) tools are used to analyze patterns of relationships among people in groups. They are useful for examining the social structure and interdependencies (or work patterns) of individuals or organizations.
            </p>
            <div className={style.image2}>
              <img src="/images/sna.png" alt="01" />
              <img src="/images/sna2.png" alt="01" />
            </div>
            </div>
            </div>
         <div ref={goodsTabs[2].element} className={style.chepter}>
          <h2>02</h2>
          <h2>OBJECTIVE</h2>
          <div className={style.main}>
            <span>02 Objective of Analysis</span>
            <h3 className={style.first}>{`Fandom Culture`}</h3>
            <p className={style.p}>
             {`The purpose of this project can be explained by using two simple words. The first is 'fandom culture.' This includes those who enjoy performances regularly, driving the sales of the performing arts market, and most importantly prioritize whether their facourite "performance artist" has been on the casting board when they hear that famous works are being released.`}
            </p>
            <p className={style.p}>
             {`Additionally, there is a Korean subculture or community that seeks the acquaintances of the actor or actress of interest. That is, knowing about the relations between certain actors or actresses is attractive to this particular group that enjoys performing arts and culture.`}
            </p>
            <p className={style.p}>
             {`I am convinced that there would be demand to analyze this human network. Below is the website of DCInside Gallry, called Reddit of Korea. It has a similar concept to subreddits(called galleries) for various topic.`}
            </p>
            <img className={style.image} src="/images/dc.gif" alt="01" />
            <h3>{`COVID-19`}</h3>
            <p className={style.p}>
              {`The other key is 'Pandemic.' The raw data provided by KOPIS consists of information for 70 million performance reservations -- from the second half of 2019 to the first half of 2022 -- which means that the control and experimental groups can be perfectly identified before and after COVID-19.`} 
            </p>
            <p className={style.p}>
              {`This would provide a solid opportunity to understand dynamic changes in social networks due to external variables. According to the survey from frontiers, 89% of performers typically performed offline and with others before COVID-19, whereas offline with others subsequently dropped to 7% and was not replaced with a similar increase in online interactions with others, which went up only to 21%.`}
            </p>
            {nowWidth > 800 ? (
              <img
                className={style.image}
                src="/images/pandemic.jpeg"
                alt="01"
              />
            ) : (
              <img
                className={style.image}
                src="/"
                alt="01"
              />
            )}
            </div>
            </div>
         <div ref={goodsTabs[3].element} className={style.title}>
          <div className={style.chepter}>
          <h2>03</h2>
          <h2>DATA CLEANING & MINING</h2>
          <div className={style.main}>
            <span>03 Data Cleaning & Mining </span>
            <h3 className={style.first}>{`Data Cleaning`}</h3>
            <p className={style.p}>
             {`Data Cleaning is the process of fixing incorrect, incomplete, duplicate or otherwise erroneous data in a data set. I used a VBA Macro in excel and Power Query.`}
            </p>
            <img className={style.image} src="/images/data1.png" alt="01" />
            <h3>{`Data Mining`}</h3>
            <p className={style.p}>
             {`Data mining is the process of extracting and discovering patterns in large data sets involving methods at the intersection of machine learning, statistics, and database systems. I processed this process with Python's pyspark, and extracted the dataset by year with unnecessary items removed.`} 
            </p>
            <img
              className={style.image}
              src="/images/data2.png"
              alt="01"
            />
          </div>
        </div>
        <div className={style.chepter}>
          <h2>04</h2>
          <h2>DATA MODELING</h2>
          <div className={style.main}>
            <span>04 Data Modeling</span>
            <h3 className={style.first}>{`Exploratory data analysis(EDA)`}</h3>
            <p className={style.p}>
             {`To discover a frequent set of items, I explored the dataset. It was sorted based on 'Instance frequency,', and rules for 'confidence' and 'lift' were also generated.`}
            </p>
            <img
              className={style.image}
              src="/images/data3.png"
              alt="01"
            />
            <h3>{`Parameter Tuning`}</h3>
            <p className={style.p}>
             {`Based on the results of the association analysis, the frequently appearing item set is analyzed according to the association rule. Then, I used Python's networkx library.`}
            </p>
            <img className={style.image} src="/images/data4.png" alt="01" />
            <div className={style.main}></div>
          </div>
        </div>
        <div className={style.chepter}>
          <h2>05</h2>
          <h2>DATA VISUALIZATION</h2>
          <div className={style.main}>
            <span>05 Data Visualization</span>
            <h3 className={style.first}>The Strength of Weak Ties</h3>
            <p className={style.p}>
             {`Contrary to general common sense, social network theory argues that loose relationships are alternatives to organizational and market innovation. From 2019 to 2022, significant network results were derived by defining the "simultaneous performance" of the cast and crew as a weak connection in big data in the performing arts industry for about four years. In general, it can be seen that there are people with higher degrees of neutrality, whose nodes are larger than other characters, every year.`}
            </p>
            <div className={style.image2}>
              <img src="/images/datacontest3.png" alt="01" />
              <img src="/images/datagraph.png" alt="01" />
            </div>
            <h3 style={{ marginTop: "50px" }}>{`Pandemic`}</h3>
            <p className={style.p}>
             {`Our relationship is affected by the pandemic. 2020 is a year to look very carefully. Although the performance was difficult due to the pandemic, it can be seen that the relationship between performing artists also decreased by more than 50% compared to the previous year. Most of the connections were hit almost directly in proportion to the actual performance, and there was also the aftermath of Omicron in 2021, but the network is gradually recovering.`}
            </p>
            <img
              className={style.image}
              src="/images/data5.png"
              alt="01"
            />
            <div className={style.moreDetail}>
              <button
                style={{ cursor: "pointer" }}
                onClick={() =>
                  router.push(
                    "https://colab.research.google.com/drive/1goQM3cpQ1T9BRfBhJXqKuZJdS9CNjcpe#scrollTo=z14n_UyvSzNF"
                  )
                }
              >
                Check the result out
              </button>
            </div>
          </div>
        </div>
        <div ref={goodsTabs[4].element} className={style.chepter}>
          <h2>06</h2>
          <h2>BENEFIT</h2>
          <div className={style.main}>
            <span>06 Benefits of Analysis</span>
            <h3 className={style.first}>{`Promote Information Accessibility`}</h3>
            <img className={style.image} src="/images/contest.jpg" alt="01" />
            <p className={style.p}>
             {`First, access to information increases due to the advantage of a network that is easy for anyone to comprehend. Much data makes the mistake of using kargon without considering the 'viewer.' However, my project has the advantage of maximizing information accessibility in terms of visualizing human-to-human relationships as clear elements.`}
            </p>
            <p className={style.p}>
             {`Second, my project can provide a research basis for potential viewing factors further research on various purchasing factors. In the meantime, if cost utility has been the main factor in analyzing the industry, this is likely the first time to proceed with human-to-human relationships.`}
            </p>
            <h3>{`Promote convenience for various stakeholders`}</h3>
            <p className={style.p}>
              {`Third, when producing a work, the producer/planner considers many factors when making casting decisions. At this time, personal relationship networks contain basic information for/on/about each person and relationship information with her or his connections. Thus, for a more experimental work, it is possible to cast two actors whose scope of activity does not overlap at all, or cast actors with significant joint work experience by emphasizing  the. harmony between characters.`}
            </p>
            <p className={style.p}>
             {`Finally, the data from my project will be very helpful to national agencies or various administrative agencies. In the case of 'E-NARA DOUM', the Integrated Government Subsidy Management System by the Korean government could only track legally registered relatives, and other administrative systems, 'NCAS(National Culture and Arts Support System)' do not provide any information about this network. It will be significant to report an informal network of relationships between people on a trial basis.`}
            </p>
            <div className={style.image2}>
              <img src="/images/enara.png" alt="01" />
              <img src="/images/ncas.png" alt="01" />
            </div>
          </div>
        </div>
      </div>
      </div>
      <div className={style.learn}>
        <div ref={goodsTabs[5].element} className={style.title}>
          <h2>Reflection</h2>
          <span>These are lessons I learned from this project</span>
        </div>
        <div className={style.contents}>
          <div className={style.content}>
            {nowWidth > 800 && (
              <img
                className={style.image}
                src="/images/samename.png"
                alt="learned"
              />
            )}
            <div className={style.desc}>
              <h3>People who ahre the same name</h3>
              <p>{`As in the case of musical actor "Kim Joon-soo" and Korean traditional musician "Kim Joon-soo," separation is necessary in the preprocessing process in consideration of the same name. In addition, names that frequently appear in item sets such as "Kim Min-ji" and "Kim Hyun-joo" are likely to be the same name, so they should also be separated based on performance information.`}</p>
            </div>
          </div>
          <div className={style.content}>
            {nowWidth > 800 && (
              <img
                className={style.image}
                src="/images/Virtual.jpeg"
                alt="learned"
              />
            )}
            <div className={style.desc}>
              <h3>Exclusion of online performances</h3>
              <p>{`urrently, the original data is limited to physical performances held in actual performances. However, after the pandemic, the proportion of virtual performances increased, and it was not analyzed that the cast and production crew gathered to produce non-face-to-face performances such as live broadcasting and recording performances. If the data are analyzed in consideration of non-face-to-face performances, there is a strong possibility that another type of result will come out.`}</p>
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
        <p>{content}</p>
      </div>
    </div>
  );
}

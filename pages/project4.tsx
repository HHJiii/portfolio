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
    { name: "1. Method", text: "Understand the method for Analysis" },
    { name: "2. Objective", text: "Explore the objectives of Analysis" },
    { name: "3. Analysis", text: "Data Cleaning to Data visualization" },
    { name: "4. Benefit", text: "Benefits of the project" },
    { name: "5. Reflection", text: "Drawbacks of the project" },
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
        <p>
         {`Applying 'The Strength of Weak Ties' in the Korean Performing Arts Industry`}
        </p>
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
                src={"/images/cintest1.jpg"}
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
        {`In October 2022, I participated in the Korea Performing Arts Box Office Information System (KOPIS) Big Data Analysis Contest. My analysis topic was based on "The Strength of Weak Ties," a sociological theory proposed by Mark Granovetter in 1973. This theory suggests that weak ties (loose connections) play a significant role in the spread of information because they provide a bridge between isolated groups.`}<p></p>
         {`To conduct my analysis, I used the Social Network Analysis (SNA) method to examine the relationship network of performing artists. SNA is a technique that investigates social structures through the use of networks and graph theory. My analysis aimed to understand the importance of weak ties in the performing arts industry and identify their potential impact on the spread of information.`}<p></p>
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
              <img src="/images/sna1.png" alt="01" />
              <img src="/images/sna2.jpeg" alt="01" />
            </div>
            </div>
            </div>
         <div ref={goodsTabs[2].element} className={style.chepter}>
          <h2>02</h2>
          <h2>OBJECTIVE</h2>
          <div className={style.main}>
            <span>02 Objective of Analysis</span>
            <h3 className={style.first}>{`Exploring Korean Fandom Culture`}</h3>
            <p className={style.p}>
             {`The purpose of this project can be explained by using two simple words. The first is 'fandom culture.' This includes individuals who regularly attend performances and drive the sales of the performing arts market. For many fans, the presence of their favorite "performance artist" on the cast list is a deciding factor in whether they will see a particular production.`}
            </p>
            <p className={style.p}>
             {`Additionally, there is a Korean subculture or community that is interested in the relationships between actors and actresses. Knowing about the connections between these individuals is attractive to this group, which enjoys performing arts and culture.`}
            </p>
            <p className={style.p}>
             {`I believe there is a demand for analyzing these human networks. For example, the website DCInside Gallery, also known as the "Reddit of Korea," has a concept similar to Reddit's subreddits (called "galleries") for various topics.`}
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
                Check the results
              </button>
            </div>
          </div>
        </div>
        <div ref={goodsTabs[4].element} className={style.chepter}>
          <h2>06</h2>
          <h2>BENEFIT</h2>
          <div className={style.main}>
            <span>06 Benefits of Analysis</span>
            <h3 className={style.first}>{`Promoting Information Literacy`}</h3>
            <img className={style.image} src="/images/contest.jpg" alt="01" />
            <p className={style.p}>
             {`Firstly, my project benefits from being easily understandable due to the clear visualization of human-to-human relationships. This ensures that the information is easily accessible, unlike data that often uses jargon without considering the audience.`}
            </p>
            <p className={style.p}>
             {`Secondly, my project can be used as a basis for research on viewing and purchasing factors in the performing arts industry, and may be the first to analyze human-to-human relationships in terms of cost utility.`}
            </p>
            <p className={style.p}>
             {`Overall, my project offers unique insights by considering both accessibility and the impact of human relationships in the industry.`}
            </p>
            <h3>{`Promoting Convenience for Stakeholders`}</h3>
            <p className={style.p}>
              {`Third, When creating a work, producers or planners consider various factors when making casting decisions. At this time, personal relationship networks provide basic information about each person and their relationships with their connections. Therefore, for more experimental works, it is possible to cast actors whose areas of activity do not overlap at all, or to cast actors who have significant joint work experience by emphasizing the harmony between their characters. `}
            </p>
            <p className={style.p}>
             {`Finally, the data from my project will be very useful to national agencies or various administrative agencies. For example, the Korean government's Integrated Government Subsidy Management System, 'E-NARA DOUM', can only track legally registered relatives, and other administrative systems, such as 'NCAS (National Culture and Arts Support System)', do not provide any information about these networks. It would be significant to provide a trial report on informal networks of relationships between people.`}
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
          <h2>REFLECTION</h2>
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
              <h3>Dealing with People who share the same name</h3>
              <p>{`Data duplication is the problem. In the preprocessing stage, it is important to distinguish between individuals who share the same name, such as musical actor "Kim Joon-soo" and Korean traditional musician "Kim Joon-soo." Similarly, names that frequently appear in item sets, such as "Kim Min-ji" and "Kim Hyun-joo," are likely to be the same person, so it is necessary to differentiate them based on performance information. Avoiding data duplication is key to ensuring accurate results.`}</p>
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
              <h3>Ignoring the Online World</h3>
              <p>{`The original data currently only includes physical performances that take place in person. However, with the increase in virtual performances during the pandemic, it is important to consider the impact of non-face-to-face performances such as live broadcasts and recorded performances on the cast and production crew. If we analyze data that includes these types of performances, it is likely that we will see different results.`}</p>
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

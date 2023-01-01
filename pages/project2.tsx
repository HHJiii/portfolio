/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import map from "@image/mainfeature3.png";
import record from "@image/record.svg";
import sm from "@image/smiley.svg";
import house from "@image/house.svg";
import one from "@image/one.svg";
import two from "@image/two.svg";

import style from "../styles/Project2.module.scss";
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
    { name: "1. Research", text: "Understand the background" },
    { name: "2. Emphasize", text: "Gather High-Quality User Understanding" },
    { name: "3 .Define", text: "Create a Brilliant Design Brief" },
    { name: "4. Ideate", text: "Start developing solutions" },
    { name: "5. Prototype", text: "Hold Inspirational  Design Sprints" },
    { name: "6. Test", text: "Get Fast, Productive Feedback" },
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
            Final Design
          </button>
          <button
            style={{ color: nowProgress === 3 ? "black" : "#565656" }}
            onClick={() => {
              goodsTabs[3].onMoveToElement();
            }}
          >
            Test
          </button>
          <button
            style={{ color: nowProgress === 4 ? "black" : "#565656" }}
            onClick={() => {
              goodsTabs[4].onMoveToElement();
            }}
          >
            Main Features{" "}
          </button>
          <button
            style={{ color: nowProgress === 5 ? "black" : "#565656" }}
            onClick={() => {
              goodsTabs[5].onMoveToElement();
              setNowProgress(5);
            }}
          >
            Takeaways
          </button>
        </div>
      )}
      <div className={style.intro}>
        <span>Responsive Web & Redesign</span>
        <h1>End Poverty in California</h1>
        {nowWidth > 1200 ? (
          <div className={style.mainImage}>
            <img
              src={"/images/MainBackground.png"}
              alt="project2-main"
              className={style.introImage}
            />
          </div>
        ) : (
          <>
            {nowWidth > 800 ? (
              <img
                src={"/images/1200.png"}
                alt="project2-main"
                className={style.introImage}
              />
            ) : (
              <img
                src={"/images/800.png"}
                alt="project2-main"
                className={style.introImage}
              />
            )}
          </>
        )}
      </div>
      <div ref={goodsTabs[0].element} className={style.overview}>
        <span>Overview</span>
        <p>
          End Poverty in California(EPIC) is a very mission driven non-profit
          organization established to address poverty in California. While their
          agenda and mission statement certainly are crucial ethical causes,
          there is strong evidence that suggests their current UX design and
          subsequent social media layout withhold them from effectively gaining
          more donor-related support.
        </p>
        <p>
          To help solve this dilemma of lack of donor outreach from the
          perspective of their UX design, I suggest more effective, evocative,
          and relevant UX ideas, which can be applied for this websites.
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
              <td>{`Independent\n proejct`}</td>
              <td>4 weeks</td>
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
              <td>Adobe Photoshop</td>
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
                <td>Figma</td>
                <td>User research</td>
              </tr>
              <tr>
                <td>Framer</td>
                <td>End to end Design</td>
              </tr>
              <tr>
                <td>Adobe Photoshop</td>
                <td>Usability Test</td>
              </tr>
            </tbody>
          </table>
        </>
      )}
      <div style={{ width: "100%" }}>
        <Sub
          name={"PROBLEM"}
          content={`While EPIC's agenda and mission statement are crucial ethical causes, there is strong evidence that suggests their current UX design and layout of websites withhold them from effectively gaining more donor-related support.`}
          background={"black"}
        />
        <Sub
          name={"SOLUTION"}
          content={`On charity websites, it is necessary to meticulously consider the factors that become ‘triggers’. The combination of these elements is the beginning of the ‘Persuasive design’ and leads to the Charity websites to succeed. To help solve this dilemma of lack of donor outreach from the perspective of their UX design, I will suggest how successful fundraising today depends on effective, evocative, and relevant UX ideas.`}
          background={"#CFCBC4"}
        />
      </div>
      <div className={style.designProcess}>
        <div className={style.designIntro}>
          <h2>DESIGN PROCESS</h2>
          <span>
            {`I follow the design process which ranges from identifying the problem that the design or product will solve, all the way to research, planning, prototyping, test and iteration.`}
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
            <h3 className={style.first}>{`Poverty Issue in California`}</h3>
            <p className={style.p}>
              California’s poverty rate remains the highest in the United
              States. Roughly 5 million Californians live below the poverty
              level, which represents 13.15% of the state’s total population.
              However, more than a quarter of Californians are still living in
              or near poverty. According to the California Poverty Measure
              (CPM), 28.7% of residents were poor or near poor as of the fall of
              2021.
            </p>
            <div className={style.image2}>
              <img src="/images/page-header.jpeg" alt="01" />
              <img src="/images/research2.png" alt="01" />
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
              HOW MIGHT WE MAKE A VISITOR DONATE TO A CHARITY WEBSITE?
            </div>
          </div>
        </div>
        <div className={style.chepter}>
          <h2>02</h2>
          <h2>EMPATHIZE</h2>
          <div className={style.main}>
            <span>02 Empathize</span>
            <h3 className={style.first}>{`Problem Statement`}</h3>
            <p className={style.p}>
              I found the EPIC website while researching the poverty issue in
              California. The current website design is creative, but it lacks
              persuasive elements.
            </p>
            <div className={style.longContainer}>
              <img src={"/images/long.png"} alt="" />
              <div className={style.content}>
                <img src={"/images/EPICDef.png"} alt="" />
                <div className={style.desc}>
                  <h3>Unclear Layout</h3>
                  <p>
                    A cluttered layout, hidden navigation menu, lack of color
                    contrast, non-responsive design, and inconsistent typefaces
                    are a few hallmarks of bad website design, but the main
                    issue with sites that feature poor design is a lack of
                    user-centricity.
                  </p>
                </div>
                <div className={style.desc}>
                  <h3>Lack of Impactfulness</h3>
                  <p>
                    The EPIC shows this important information at the bottom of
                    the homepage on their website, and then makes people who
                    came to the website (or support the organization) tend to
                    have strong motivation later.
                  </p>
                </div>
                <div className={style.desc}>
                  <h3>Disturbing UI factors</h3>
                  <p>
                    With the combination of use of various colors and
                    inappropriate fonts, the website evokes a feeling of
                    playfulness rather than sincerity. People’s initial
                    impressions tend to be influenced by images compared to text
                    because color affects viewers physiologically and
                    psychologically.
                  </p>
                </div>
              </div>
            </div>
            <br></br>
            <br></br>
            <h3 style={{ marginTop: "50px" }}>{`Interview`}</h3>
            <p className={style.p}>
              {`I interviewed six people who have experience working at non-profit
              organizations. What's interesting is that despite all the
              different experiences of the six interviewees, they all expressed
              concerns over the absence of UX on the website of a non-profit
              organization.`}
            </p>
            <img className={style.image} src="/images/interview.png" alt="01" />
          </div>
        </div>
        <div className={style.chepter}>
          <h2>03</h2>
          <h2>DEFINE</h2>
          <div className={style.main}>
            <span>03 Define</span>
            <h3 className={style.first}>{`Font and Color`}</h3>
            <p className={style.p}>
              To take advantage of the above-mentioned problems, I set the
              following style guide. I chose low-saturation colors as their main
              colors, leaving the strong blue and orange colors of the EPIC logo
              they might want to maintain.
            </p>
            <img
              className={style.image}
              src="/images/font-color.png"
              alt="01"
            />
            <h3>{`Grid System`}</h3>
            <p className={style.p}>
              I set the responsive layout grid system made up of three elements:
              columns, gutters, and margins.
            </p>
            <img
              className={style.image}
              src="/images/grid-system.png"
              alt="01"
            />
          </div>
        </div>
        <div className={style.chepter}>
          <h2>04</h2>
          <h2>IDEATE</h2>
          <div className={style.main}>
            <span>04 Ideate</span>
            <h3 className={style.first}>{`Persuasive Design Factors`}</h3>
            <p className={style.p}>
              I focused on unpacking the few recognized factors for high
              fundraising performance that depend on effective, evocative, and
              relevant UX ideas.
            </p>
            <div className={style.ideate}>
              <div className={style.row}>
                <img src={"images/ideate1.gif"} alt="" />
                <div className={style.desc}>
                  <br></br>
                  <span>LAYOUT</span>
                  <h3>Clear Layout</h3>
                  <p>
                    The main content area must serve as a powerful billboard:
                    eye-catching, evocative, and relatable to the user. In
                    addition to, by deploying important key statistics following
                    the Main content area, the organization’s purpose can be
                    conveyed concisely and powerfully.
                  </p>
                  <img src={"images/desc1.png"} alt="" />
                </div>
              </div>
              <div className={style.row}>
                <div className={style.desc}>
                  <span>Charity Box</span>
                  <h3>Easy access to Charity Box</h3>
                  <p>
                    EPIC currently has no online fundraising box. Making
                    connections with supporters is integral to effectively
                    managing the nonprofit’s fundraising strategy. Thus, I
                    created an online fundraising box for securing funds.
                  </p>
                  <img src={"images/desc2.png"} alt="" />
                </div>
                <img src={"images/ideate2.png"} alt="" />
              </div>
              <div className={style.row}>
                <img src={"images/ideate3.gif"} alt="" />
                <div className={style.desc}>
                  <span>Font and Color</span>
                  <h3>Emotion-evoking UI</h3>
                  <p>
                    To encourage people to be empathetic and supportive, I chose
                    soothing colors such as grayish-blue for EPIC. Also, to
                    deliver the message in a more serious, appropriate tone, I
                    utilized different fonts from before.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div ref={goodsTabs[2].element} />
        <div className={style.chepter}>
          <h2>05</h2>
          <h2>PROTOTYPE</h2>
          <div className={style.main}>
            <span>05 Prototype</span>
            <h3 className={style.first}>Overall Views</h3>
            <p className={style.p}>
              I set up four breakpoints for the responsive web and completed the
              design. At a given breakpoint range, the layout adjusts to suit
              the screen size and orientation. It provides an optimal viewing
              experience for the user, no matter what device they are using.
            </p>
            <img className={style.image} src="/images/whole.png" alt="01" />

            <h3 style={{ marginTop: "50px" }}>{`Final Design`}</h3>
            <p className={style.p}>
              For the Final Design, I revised the design and created digital
              high-fidelity wireframes.Refer to figma file for more detailed
              design.
            </p>
            <img
              className={style.image}
              src="/images/Dribbble-shot.png"
              alt="01"
            />
          </div>
          <div className={style.moreDetail}>
            <button
              style={{ cursor: "pointer" }}
              onClick={() =>
                router.push(
                  "https://www.figma.com/file/7MctMRFAuTpGvk5zgjJGXH/Untitled?node-id=0%3A1&t=SBlZv966k1o1DlTr-1"
                )
              }
            >
              More Detailed Design
            </button>
          </div>
        </div>
        <div ref={goodsTabs[3].element} className={style.chepter}>
          <h2>06</h2>
          <h2>TEST</h2>
          <div className={style.main}>
            <span>06 Test</span>
            <h3 className={style.first}>{`Usability Testing`}</h3><br></br>
            <img
              className={style.image}
              src="/images/usability-testing.gif"
              alt="01"
            />
            <p className={style.p}>
              With the first prototype in place, I wanted to get it in front of
              a group of target users in order to weed out the biggest usability
              issues before moving forward. I conducted moderated usability
              tests with five participants and they proved really successful in
              flagging critical usability issues.
            </p>
            <p className={style.p}>
              My redesigned website received a high score of 92 points in
              Usability testing.
            </p>
            <div className={style.row}>
              <img src="/images/circle1.png" alt="01" />
              <img src="/images/circle2.png" alt="01" />
              <img src="/images/circle3.png" alt="01" />
            </div>
            <h3 style={{ marginTop: "50px" }}>{`After Usability Test`}</h3><br></br>
            <img
              className={style.image}
              src="/images/Usability-testing.png"
              alt="01"
            />
            <p className={style.p}>
              I organized the testing results in a rainbow spreadsheet and rated
              the errors in order to prioritize the changes that needed to be
              made.
            </p>
            <p className={style.p}>
              The results of the user testing showed that users found the new
              version of the website to be more efficient, more learnable, and
              more memorable than the previous version of the site. Users were
              able to access the information they wanted more easily and they
              spent more time on the site.
            </p>
            <div className={style.image2}>
              <img src="/images/ut1.png" alt="01" />
              <img src="/images/ut2.png" alt="01" />
            </div>
          </div>
        </div>
      </div>
      <div ref={goodsTabs[4].element} className={style.feature}>
        <div className={style.title}>
          <h2>MAIN FEATURES</h2>
          <span>
            {`The website's three main features revolve around the main page, condensed information, and the subsequent donation page.`}
          </span>
        </div>
        <div className={style.item}>
          <img
            className={style.itemImg}
            src={"/images/redesign1.png"}
            alt="사진"
          />
          <div className={style.desc}>
            <h3>MAIN VISUAL (LANDING PAGE)</h3>
            <p>{`The main page is in the most powerful zone, determining the identity of the website. According to statistics, almost 80% of website visitors leave without even reading the first page. I would modify the layout of the first page on EPIC's website to be more engaging and effective in order to keep visitors on the site.`}</p>
          </div>
        </div>
        <br></br>
        <div className={style.item}>
          <div className={style.desc}>
            <h3>key Poverty statistics</h3>
            <p>{`Numbers have significant impacts. Rather than saying how serious the poverty problem is, if we summarize it in numbers, it will remain in visitors memory much longer. By deploying important key statistics following the Main content area, the organization's purpose can be conveyed concisely and powerfully.`}</p>
            <h3>Epic’s focus areas</h3>
            <p>{`Beyond the realm of just statistics, I found that the scattered information was another arduous feature. So, I collected and categorized the facts to increase user convenience and readability by allowing users to see EPIC’s main focus areas at a glance.`}</p>
          </div>
          {nowWidth > 800 ? (
            <img
              className={style.itemImg}
              src={"/images/sol2.png"}
              alt="사진"
            />
          ) : (
            <img className={style.itemImg} src={"/images/m1.png"} alt="사진" />
          )}
        </div>
        <br></br>
        <div className={style.item}>
          <img className={style.itemImg} src={"/images/f8.png"} alt="사진" />
          <div className={style.desc}>
            <h3>DONATION PAGE(SUB PAGE)</h3>
            <p>{`I built these donation-related pages for online connection between charities and donors. Securing funds is a great help both in terms of UX and business strategy. Charity box would be helpful for a stronger bond and motivation for those who support EPIC. In preparation for this, I propose the following design related to donate-support.`}</p>
          </div>
        </div>
      </div>
      <div className={style.learn}>
        <div ref={goodsTabs[5].element} className={style.title}>
          <h2>TAKEAWAYS</h2>
          <span>These are lessons I learned from this project</span>
        </div>
        <div className={style.contents}>
          <div className={style.content}>
            {nowWidth > 800 && (
              <img
                className={style.image}
                src="/images/graph.png"
                alt="learned"
              />
            )}
            <div className={style.desc}>
              <h3>Persuasive Design</h3>
              <p>{`This was a great opportunity to utilize the UX ideas related to persuasive design and its factors. As a skilled social activist and a product designer with social responsibility,I learned how to create a user's experience  beyond the User Interface and use it strategically through this entire redesign process.`}</p>
            </div>
          </div>
          <div className={style.content}>
            {nowWidth > 800 && (
              <img
                className={style.image}
                src="/images/takeaways2.png"
                alt="learned"
              />
            )}
            <div className={style.desc}>
              <h3>Clinical nature of public UX and its potential</h3>
              <p>{`This project served to considering the UX virtues that non-profit institutions can use. Persuasive design uses an understanding of human’s cognitive ability to impact on human behavior. On charity websites, it is necessary to meticulously consider the factors that become ‘triggers’. The combination of these elements is the beginning of the ‘Persuasive design’ and leads to the Charity websites to succeed.`}</p>
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

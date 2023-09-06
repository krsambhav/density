import Image from "next/image";
import { Inter } from "next/font/google";
import memoji from "../assets/memoji.jpeg";
import mainposter from "../assets/mainposter.png";
import zombie from "../assets/zombie.png";
import Card from "./components/Card";
import secondposter from "../assets/secondposter.png";
import appstore from "../assets/appstore.png";
import List from "./components/List";
import { HiLocationMarker, HiMail } from "react-icons/hi";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`flex min-h-screen min-w-screen flex-col items-center`}>
      <section className="first-section w-[70vw] flex flex-col items-center">
        <div className="nav-container flex flex-row gap-10 justify-center items-center h-fit mt-10">
          <div className="memoji-container w-[60px] mr-[100px]">
            <Image src={memoji} alt="memoji" className="rounded-md" />
          </div>
          <div className="nav-links-container flex gap-10 mr-[80px]">
            <div className="nav-link">Emotions</div>
            <div className="nav-link">Manifesto</div>
            <div className="nav-link">Self-awareness Test</div>
            <div className="nav-link">Work With Us</div>
          </div>
          <div className="nav-download-btn-container">
            <div className="nav-btn bg-black text-white rounded-3xl py-3 px-5">
              Download app
            </div>
          </div>
        </div>
        <div className="main-poster-container mt-10">
          <Image src={mainposter} alt="memoji" className="rounded-md" />
        </div>
        <div className="description-container flex flex-row gap-10 w-[80%] mt-10 justify-between">
          <div className="title text-2xl">EQ beats IQ</div>
          <div className="text w-[25%] text-gray-500">
            People with high emotional intelligence (EQ) live more fulfilled
            lives. They tend to be happier and have healthier relationships.
          </div>
          <div className="text w-[25%] text-gray-500">
            They are more successful in their pursuits and make for inspiring
            leaders. According to science, they earn $29k a year.
          </div>
        </div>
      </section>
      <section className="second-section w-[70vw] flex flex-col gap-10 items-center mt-10">
        <div className="title-container flex flex-row items-end gap-5 w-[100%]">
          <div className="title text-4xl font-semibold">
            Does this sound familiar...
          </div>
          <div className="zombie-container">
            <Image src={zombie} alt="memoji" className="rounded-md w-[60px]" />
          </div>
        </div>
        <div className="cards-container flex flex-row w-[100%] overflow-x-scroll whitespace-nowrap gap-10">
          <Card
            emoji="😛"
            title="You argue with a colleague"
            text="You get angry and defensive, instead of staying open and working towards
        common ground."
          />
          <Card
            emoji="😛"
            title="You are at a lively dinner party"
            text="You play on your phone, instead of confidently approaching strangers and striking up a chat."
          />
          <Card
            emoji="😛"
            title="You attend a class reunion"
            text="You compare yourself with your peers' achievements, instead of making your self-judgement more independent of others."
          />
          <Card
            emoji="😛"
            title="You hit dead end in a negotiation"
            text="You get nervous, frazzled, and frustrated, instead of staying optimistic and solution-oriented."
          />
          <Card
            emoji="😛"
            title="You argue with a colleague"
            text="You get angry and defensive, instead of staying open and working towards
        common ground."
          />
          <Card
            emoji="😛"
            title="You are at a lively dinner party"
            text="You play on your phone, instead of confidently approaching strangers and striking up a chat."
          />
          <Card
            emoji="😛"
            title="You attend a class reunion"
            text="You compare yourself with your peers' achievements, instead of making your self-judgement more independent of others."
          />
          <Card
            emoji="😛"
            title="You hit dead end in a negotiation"
            text="You get nervous, frazzled, and frustrated, instead of staying optimistic and solution-oriented."
          />
        </div>
        <Image src={secondposter} alt="memoji" className="rounded-md" />
      </section>
      <section className="second-section w-[70vw] flex flex-col gap-10 items-center mt-10">
        <div className="title-container flex flex-col w-[100%]">
          <div className="title text-lg">
            Wrong with self-improvement & how we are fixing it.
          </div>
          <div className="big-title flex flex-row items-end gap-5">
            <div className="title text-4xl font-semibold">
              Self-improvement. Ugh.
            </div>
            <div className="zombie-container">
              <Image
                src={zombie}
                alt="memoji"
                className="rounded-md w-[60px]"
              />
            </div>
          </div>
        </div>
        <div className="list-container w-[70%] flex flex-col gap-10 h-[500px] overflow-scroll">
          <List
            title="It iss not as easy as 1-2-3."
            text="The journey of change may be long, but our sessions are quick. We get to
        the point and tell you what you want to know (and nothing else)."
          />
          <List
            title="It is not as easy as 1-2-3."
            text="The journey of change may be long, but our sessions are quick. We get to
        the point and tell you what you want to know (and nothing else)."
          />
          <List
            title="It is not as easy as 1-2-3."
            text="The journey of change may be long, but our sessions are quick. We get to
        the point and tell you what you want to know (and nothing else)."
          />
          <List
            title="It is not as easy as 1-2-3."
            text="The journey of change may be long, but our sessions are quick. We get to
        the point and tell you what you want to know (and nothing else)."
          />
          <List
            title="It is not as easy as 1-2-3."
            text="The journey of change may be long, but our sessions are quick. We get to
        the point and tell you what you want to know (and nothing else)."
          />
          <List
            title="It is not as easy as 1-2-3."
            text="The journey of change may be long, but our sessions are quick. We get to
        the point and tell you what you want to know (and nothing else)."
          />
          <List
            title="It is not as easy as 1-2-3."
            text="The journey of change may be long, but our sessions are quick. We get to
        the point and tell you what you want to know (and nothing else)."
          />
        </div>
        <div className="description-container flex flex-row gap-10 w-[80%] mt-10 justify-between">
          <div className="title text-2xl">EQ beats IQ</div>
          <div className="text w-[25%] text-gray-500">
            People with high emotional intelligence (EQ) live more fulfilled
            lives. They tend to be happier and have healthier relationships.
          </div>
          <div className="text w-[25%] text-gray-500">
            They are more successful in their pursuits and make for inspiring
            leaders. According to science, they earn $29k a year.
          </div>
        </div>
      </section>
      <footer className="flex flex-col items-center mt-20 mb-20">
        <div className="image-container">
          <Image src={memoji} alt="memoji" className="rounded-md w-[50px]" />
        </div>
        <div className="title text-2xl mt-2">ahead</div>
        <div className="details-container flex flex-row gap-20 mt-5">
          <div className="location-container flex flex-row items-center gap-2">
            <HiLocationMarker />
            Auguststraße 26, 10117 Berlin
          </div>
          <div className="email-container flex flex-row items-center gap-2">
            <HiMail />
            hi@ahead-app.com
          </div>
        </div>
        <div className="app-store mt-5">
          <Image src={appstore} alt="memoji" className="rounded-md w-[120px]" />
        </div>
        <div className="copyright mt-5">
          © 2022 Ahead app. All right reserved
        </div>
      </footer>
    </main>
  );
}

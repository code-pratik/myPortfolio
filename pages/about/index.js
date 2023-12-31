import { useEffect, useState } from "react";
import Head from "next/head";
import {
  FaCss3,
  FaFigma,
  FaHtml5,
  FaJs,
  FaReact,
  FaWordpress,
} from "react-icons/fa";
import CountUp from "react-countup";
import {
  SiAdobephotoshop,
  SiAdobexd,
  SiExpress,
  SiFirebase,
  SiFramer,
  SiMongodb,
  SiMongoose,
  SiMui,
  SiNextdotjs,
  SiNodedotjs,
  SiRedux,
  SiTailwindcss,
} from "react-icons/si";

const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          <FaHtml5 key="key1" />,
          <FaCss3 key="key2" />,
          <FaJs key="key3" />,
          <FaReact key="key4" />,
          <SiNextdotjs key="key5" />,
          <SiTailwindcss key="key6" />,
          <SiNodedotjs key="key7" />,
          <SiMongodb key="key8" />,
          <SiExpress key="key9" />,
          <SiRedux key="key10" />,
          <SiMongoose key="key11" />,
          <SiFramer key="key12" />,
          <SiMui key="key13" />,
        ],
      },
      {
        title: "UI/UX Design",
        icons: [<FaFigma key="key14" />],
      },
    ],
  },
  //hello
  {
    title: "awards",
    info: [
      {
        title: "Vittorcloud hackathon 2023-Participant-4th Rank",
        stage: "2023",
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "NA",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title:
          "Information Technology - Government Engineering Collage, Modasa , Guj",
        cgpa: "8.50-CGPA",
        stage: "2020-2023",
      },
      {
        title:
          "Information Technology - Government Polyteqnic, Ahmedabad , Guj",
        cgpa: "7.98-CGPA",
        stage: "2017-2020",
      },
    ],
  },
];
import { Avatar, Circles } from "../../components";
import { fadeIn } from "../../variants";
import { motion } from "framer-motion";
const About = () => {
  const [index, setIndex] = useState(0);
  const [hidration, setHidaration] = useState(false);

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Head>
        <title>About Page</title>
      </Head>
      <Circles />
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:block absolute bottom-0 -left-[370px]"
      >
        <Avatar />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col  items-center xl:flex-row gap-x-6 ">
        <div className="flex flex-col flex-1 justify-center">
          <div className="z-50">
            <motion.h2
              className="h2"
              variants={fadeIn("right", 0.6)}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              Captivating <span className="text-accent">stories</span> birth
              mangnificent designs.
            </motion.h2>
            <motion.p
              variants={fadeIn("right", 0.6)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
            >
              Hi , My Name is Pratik Prajapati , I just begin my carrier in web
              Development ,I am looking forward to Contribute my skills and
              dedication to change the world with the innovative work.
            </motion.p>
          </div>
          <div className="hidden md:flex md:max-m-xl xl:max-w-none mx-auto xl:mx-0 mb-16">
            <div className="flex flex-1 xl:gap-x-6">
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:bottom-0 flex flex-col gap-y-3">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={0} className="px-2" /> +
                </div>
                <div className="px-2">Years of Experienece</div>
              </div>
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:bottom-0 flex flex-col gap-y-3">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={5} className="px-2" /> +
                </div>
                <div className="px-2">Projects Done</div>
              </div>
            </div>
          </div>
        </div>
        <motion.div className="flex flex-col w-full xl:max-w-[48%] h-[480px]">
          <div className="flex  gap-x-4  xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemindex) => {
              return (
                <div
                  key={itemindex}
                  className={`${
                    index === itemindex &&
                    "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                  } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0 max-[400px]:text-[15px]`}
                  onClick={() => setIndex(itemindex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-8 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemindex) => {
              return (
                <div
                  key={itemindex}
                  className="flex-1 flex flex-col max-sm:text-[13px]  gap-x-2 max-w-max text-white/60"
                >
                  <div className="font-light  md:mb-0">{item.title}</div>
                  {item.cgpa}
                  <br /> {item.stage}
                  <div className="flex gap-x-4 max-sm:gap-x-2 max-xl:justify-center">
                    {item.icons?.map((icons, index) => {
                      return (
                        <div
                          key={index}
                          className="text-2xl max-[400px]:text-[15px]"
                        >
                          {icons}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
        <div className="max-md:flex md:hidden md:max-m-xl xl:max-w-none mx-auto xl:mx-0 mb-16">
          <div className="flex flex-1 xl:gap-x-6">
            <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:bottom-0 flex flex-col gap-y-3">
              <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                <CountUp start={0} end={0} className="px-2" /> +
              </div>
              <div className="px-2">Years of Experienece</div>
            </div>
            <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:bottom-0 flex flex-col gap-y-3">
              <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                <CountUp start={0} end={5} className="px-2" /> +
              </div>
              <div className="px-2">Projects Done</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

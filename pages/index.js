import Image from "next/image";

import { ParticlesContainer, ProjectsBtn, Avatar } from "../components";

import { motion } from "framer-motion";

import { fadeIn } from "../variants";
import Head from "next/head";

const Home = () => {
  return (
    <div className="bg-primary h-full">
      <Head>
        <title>
          Home
        </title>
      </Head>
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
          <motion.h1
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1"
          >
            Unleashing Innovation <br />
            with the<span className="text-accent"> MERN Stack </span>
          </motion.h1>
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-[600px] mx-auto xl:mx-0 mb-10 xl:mb-16"
          >
            I am an ambitious and dedicated fresher, specializing in the MERN stack. With a strong foundation in MongoDB, Express.js, React, and Node.js, I strive to create captivating web experiences. My projects showcase clean code, intuitive design, and a user-centric approach. Let&lsquo;s collaborate and create something exceptional together.
          </motion.p>
          <div className="relative xl:hidden flex justify-center">
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-x-0 "></div>
        <ParticlesContainer />
        <motion.div variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden" className="w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[2%]"><Avatar /></motion.div>
      </div>
    </div >
  );
};

export default Home;

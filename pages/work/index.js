import { motion } from 'framer-motion'
import { Circles, Bulb, ServiceSlider, WorkSlider } from '../../components';
import { fadeIn } from '../../variants';
import Head from 'next/head';

const Work = () => {
  return <div className='h-full bg-primary/30 py-36 flex items-center '>
    <Head>
      <title>
        Work
      </title>
    </Head>
    <Circles />
    <Bulb />
    <div className='container mx-auto'>
      <div className='flex flex-col xl:flex-row gap-x-8'>
        <div className='text-center  flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0' >
          < motion.h2
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden" className='h2 xl:mt-8'>My Work <span className='text-accent'>.</span></motion.h2>
          <motion.p variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden" className='max-w-[400px] mb-4 mx-auto lg:mx-0'>hello i provide Services for web designs and devlopment in React,you can checkout all Services here.</motion.p>
        </div>
        <motion.div variants={fadeIn("left", 0.6)}
          initial="hidden"
          animate="show"
          exit="hidden" className='w-full xl:max-w-[60%]'>
          <WorkSlider />
        </motion.div>
      </div>
    </div>
  </div>;
};

export default Work;

// import React from 'react';
import { motion } from 'framer-motion';
import profileImg from '../assets/profile.png';

const Hero = () => {
  const handleViewResume = () => {
    window.open(
      "https://drive.google.com/file/d/1qE0JTLo2wa-GEnwL9-xNX3FZNrel7vmd/view?usp=sharing",
      "_blank"
    );
  };

  return (
    <section
      id="hero"
      className="w-full min-h-screen flex items-center justify-center bg-gray-950 transition-colors duration-300"
    >
      <div className="flex items-center gap-6 mb-4">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative w-48 h-32 md:w-52 md:h-40 rounded-full overflow-hidden ml-16"
        >
          <img
              src={profileImg}
              alt="Profile"
              className=" w-full h-full rounded-full border-2 border-white-500 object-cover"
          />
          {/* w-60 h-48  */}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center w-full px-2"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            <span className='text-blue-400'>Hi, I'm{' '}</span>
            <span className="text-white-600 dark:text-white-400">Krishna Shivani Kanamarlapudi</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8"
          >
            I'm an Application Developer with an interest in Cloud, AI and Development
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleViewResume}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md text-md font-medium transition-colors"
            >
              Resume
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 
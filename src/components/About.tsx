// import React from 'react';
import {motion} from 'framer-motion'
import { useInView } from 'react-intersection-observer';

const About = () => {
    const {ref, inView} = useInView({
        triggerOnce: true,
        threshold: 0.2
    });

    return (
        <section id="about" className="dark:bg-gray-950 py-10 w-full text-left">
            <div className='max-w-3xl mx-auto px-6 text-left w-full'>
                <motion.h2
                    ref={ref}
                    initial={{ opacity: 0, y: -30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-2xl md:text-3xl font-bold text-white mb-4"
                    >
                    About Me
                </motion.h2>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="bg-gray-800 rounded-lg shadow-lg p-8 text-left"
                    >
                    <p className="mb-4">
                    I am a developer with a strong interest in{" "}
                    <span className="text-blue-400 font-semibold">Cloud, AI and Development</span>.  
                    In development, I mainly focus on{" "}
                    <span className="text-blue-400 font-semibold">React and React Native</span>, 
                    building interactive and user-friendly applications.  
                    Alongside this, I enjoy learning about cloud and have practical experience with {" "}
                    <span className="text-blue-400 font-semibold">Azure</span> 
                    . I also explore how AI can be integrated into real-world solutions.
                    </p>
                    <p>
                    When I'm not coding, I enjoy reading and writing articles, as well as 
                    exploring emerging technologies in Cloud, AI and software development.
                    </p>

                </motion.div>
            </div>
        </section>
    )
}

export default About;
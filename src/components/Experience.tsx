// import React from 'react';
import {motion} from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import WorkExpCard from '../cards/WorkExpCard';

const Experience = () => {
    const {ref, inView} = useInView({
            triggerOnce: true,
            threshold: 0.2
    });
    
    return (
        <section id="experience" className=" bg-gray-100 dark:bg-gray-950 py-10">
            <div className='max-w-3xl mx-auto px-6 text-left'>
                <motion.h2
                    ref={ref}
                    initial={{ opacity: 0, y: -30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-2xl md:text-3xl font-bold text-white mb-4"
                >
                    Experience
                </motion.h2>
                <WorkExpCard 
                    company='Upvote Consulting Services Pvt. Ltd.'
                    role="React Native Developer Intern"
                    type="Internship"
                    technologies={[
                        "React Native",
                        "Firebase",
                        "MongoDB",
                        "ExpressJS",
                        "NodeJS",
                        "Expo"
                    ]}
                />
            </div>
        </section>
    )
}

export default Experience;
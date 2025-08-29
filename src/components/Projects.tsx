import {motion} from 'framer-motion';
import { useInView }  from 'react-intersection-observer';
import ProjExpCard from '../cards/ProjExpCard';

const Projects = () => {
const {ref, inView} = useInView({
        triggerOnce: true,
        threshold: 0.2
    });

    return (
    <section id="projects" className=" dark:bg-gray-950 py-10 w-full">
        <div className='max-w-3xl mx-auto px-6 text-left w-full'>
            <motion.h2
                ref={ref}
                initial={{ opacity: 0, y: -30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="text-2xl md:text-3xl font-bold text-white mb-4"
            >
                Projects
            </motion.h2>

            <ProjExpCard 
                    title='TimeSheet'
                    description="TimeSheet-UCS is a comprehensive timesheet management 
                                application designed to help employees and administrators 
                                efficiently manage work-related activities."
                    code="https://github.com/kkshivani18/TimeSheet-UCS"
                    technologies={[
                        "React Native",
                        "Firebase",
                        "MongoDB",
                        "ExpressJS",
                        "NodeJS",
                        "Expo"
                    ]}
            />

            <ProjExpCard 
                    title='NewsNexus'
                    description="This project is an API Gateway with JWT-based authentication and 
                                role-based access control, serving as a secure central entry point 
                                for multiple APIs."
                    code="https://github.com/kkshivani18/NewsNexus"
                    technologies={[
                        "Spring Boot Security",
                        "Streamlit",
                        "MySQL",
                        "Python",
                        "Java",
                        "Maven"
                    ]}
            />
            <ProjExpCard 
                    title='Azure Expense Tracker'
                    description="The Azure Expense Tracker is a cloud-based web application 
                                designed to help users track their expenses."
                    code="https://github.com/kkshivani18/Azure-Expense-Tracker"
                    technologies={[
                        "Azure",
                        "Terraform",
                        "Github Actions",
                        "React",
                        "Azure CosmosDB",
                        "Azure App Service",
                        "Azure Static Website",
                        "Javascript",
                        "HTML",
                        "CSS"
                    ]}
            />
            <ProjExpCard 
                    title='Autonomous War-Torn Navigation System'
                    description="Built an AI-powered drone rescue system with 80% detection accuracy, 
                                 featuring real-time path planning and Bluetooth communication for automated navigation."
                    code="https://github.com/abandonedmonk/Autonomous-War-Torn-Navigation-System"
                    technologies={[
                        "Python",
                        "OpenCV",
                        "PyTorch",
                        "C++"
                    ]}
            />
        </div>
    </section>
    )
}

export default Projects;
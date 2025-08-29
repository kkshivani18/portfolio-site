import type {JSX} from 'react';
import {motion} from 'framer-motion';
import { useInView }  from 'react-intersection-observer';

const platforms = [
    {
        name: 'Email',
        link: 'mailto:kkrishnashivani18@gmail.com'
    },
    {
        name: 'Github',
        link: 'https://github.com/kkshivani18'
    },
    {
        name: 'LinkedIn',
        link: 'https://www.linkedin.com/in/kkshivani'
    },
    {
        name: 'Medium',
        link: 'https://medium.com/@kkrishnashivani18'
    }]

    const GmailIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 48 48">
            <path fill="#4caf50" d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"></path>
            <path fill="#1e88e5" d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"></path>
            <polygon fill="#e53935" points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"></polygon>
            <path fill="#c62828" d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"></path>
            <path fill="#fbc02d" d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z"></path>
        </svg>
    );

    const GithubIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 32 32">
        <path fill-rule="evenodd" d="M 16 4 C 9.371094 4 4 9.371094 4 16 C 4 21.300781 7.4375 25.800781 12.207031 27.386719 C 12.808594 27.496094 13.027344 
        27.128906 13.027344 26.808594 C 13.027344 26.523438 13.015625 25.769531 13.011719 24.769531 C 9.671875 25.492188 8.96875 23.160156 8.96875 23.160156 
        C 8.421875 21.773438 7.636719 21.402344 7.636719 21.402344 C 6.546875 20.660156 7.71875 20.675781 7.71875 20.675781 C 8.921875 20.761719 9.554688 
        21.910156 9.554688 21.910156 C 10.625 23.746094 12.363281 23.214844 13.046875 22.910156 C 13.15625 22.132813 13.46875 21.605469 13.808594 21.304688 
        C 11.144531 21.003906 8.34375 19.972656 8.34375 15.375 C 8.34375 14.0625 8.8125 12.992188 9.578125 12.152344 C 9.457031 11.851563 9.042969 10.628906 9.695313 8.976563 
        C 9.695313 8.976563 10.703125 8.65625 12.996094 10.207031 C 13.953125 9.941406 14.980469 9.808594 16 9.804688 C 17.019531 9.808594 18.046875 9.941406 19.003906 10.207031 
        C 21.296875 8.65625 22.300781 8.976563 22.300781 8.976563 C 22.957031 10.628906 22.546875 11.851563 22.421875 12.152344 C 23.191406 12.992188 23.652344 14.0625 23.652344 
        15.375 C 23.652344 19.984375 20.847656 20.996094 18.175781 21.296875 C 18.605469 21.664063 18.988281 22.398438 18.988281 23.515625 C 18.988281 25.121094 18.976563 26.414063 
        18.976563 26.808594 C 18.976563 27.128906 19.191406 27.503906 19.800781 27.386719 C 24.566406 25.796875 28 21.300781 28 16 C 28 9.371094 22.628906 4 16 4 Z"></path>
        </svg>
    );

    const LinkedInIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 48 48">
            <path fill="#0288D1" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path>
            <path fill="#FFF" d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 
            2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 
            25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"></path>
        </svg>
    );

    const MediumIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 64 64">
<path d="M52,8H12c-2.209,0-4,1.791-4,4v40c0,2.209,1.791,4,4,4h40c2.209,0,4-1.791,4-4V12C56,9.791,54.209,8,52,8z M47,19.5	l-1.821,2.197C45.064,21.811,45,21.965,45,22.125V41.75c0,0.16,0.064,0.314,0.179,0.428L47,44.546V45H37v-0.454l2.821-2.368	C39.936,42.064,40,41.91,40,41.75V23.879L31.848,45h-0.001h-1.543L22,24.375v16.108c0,0.22,0.076,0.433,0.215,0.605L25,44.546V45h-8	v-0.454l2.783-3.438C19.923,40.936,20,40.721,20,40.5V22.388c0-0.142-0.05-0.279-0.142-0.388L18,19.5V19h7.097l7.624,19.183	L40.002,19H47V19.5z"></path>
</svg>
    );

    const icons: { [key: string]: JSX.Element } = {
        'Email': <GmailIcon />,
        'Github': <GithubIcon />,
        'LinkedIn': <LinkedInIcon />,
        'Medium': <MediumIcon />
    }

const Contact = () => {
    const {ref, inView} = useInView({
        triggerOnce: true,
        threshold: 0.2
    })

    return (
        <section id = "contact" className='dark:bg-gray-950 py-10 w-full'>
            <div className='max-w-3xl mx-auto px-6 text-left w-full'>
                <motion.h2
                    ref={ref}
                    initial={{ opacity: 0, y: -30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-2xl md:text-3xl font-bold text-white mb-4"
                >
                    Get in Touch
                </motion.h2>
                <motion.p 
                    className='mb-5'
                >
                    I'm open to discuss about new opportunities and exciting projects. 
                    Feel free to reach out through any of the platforms below.
                </motion.p>
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-y-4 md:gap-y-6 gap-x-6">
                    {platforms.map((contact, idx) => (
                        <a
                        key={idx}
                        href={
                            contact.link.startsWith("http") || contact.link.startsWith("mailto")
                            ? contact.link
                            : `${contact.link}` 
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative p-4 bg-gray-800 dark:bg-gray-900 rounded-lg flex items-center space-x-3 cursor-pointer max-w-36 transition-colors duration-300 hover:bg-gray-700"
                        >
                        {icons[contact.name.trim()] || null}
                        <span className="text-white font-medium hover:underline">
                            {contact.name}
                        </span>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Contact;;
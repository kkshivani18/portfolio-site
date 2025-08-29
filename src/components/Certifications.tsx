// import React from 'react';
import type { JSX } from 'react';
import {motion} from 'framer-motion';
import { useInView }  from 'react-intersection-observer';

const certificates = [
    {
        title: 'Microsoft Certified: Azure Fundamentals (AZ-900)',
        issuer: 'Microsoft',
        year: '2024',
        link: 'https://learn.microsoft.com/en-us/users/shivanikk-9298/credentials/c968a00ccc38a6d7'
    },
    {
        title: 'Google Cybersecurity Professional Certificate',
        issuer: 'Google',
        year: '2024',
        link: 'https://www.credly.com/badges/a68714be-039d-437b-afae-836b8f306038'
    }]

    const GoogleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48">
        <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
        <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
        <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
        <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
    </svg>
    );

    const MicrosoftIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48">
            <path fill="#ff5722" d="M6 6H22V22H6z" transform="rotate(-180 14 14)"></path>
            <path fill="#4caf50" d="M26 6H42V22H26z" transform="rotate(-180 34 14)"></path>
            <path fill="#ffc107" d="M26 26H42V42H26z" transform="rotate(-180 34 34)"></path>
            <path fill="#03a9f4" d="M6 26H22V42H6z" transform="rotate(-180 14 34)"></path>
        </svg>
    )

    const icons: { [key: string]: JSX.Element } = {
        'Microsoft': <MicrosoftIcon />,
        'Google': <GoogleIcon />
    }

const Certifications = () => {
    const {ref, inView} = useInView({
        triggerOnce: true,
        threshold: 0.2
    })

    return (
        <section id = "certifications" className='dark:bg-gray-950 py-10 w-full'>
            <div className='max-w-3xl mx-auto px-6 text-left w-full'>
                <motion.h2
                    ref={ref}
                    initial={{ opacity: 0, y: -30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-2xl md:text-3xl font-bold text-white mb-4"
                >
                    Certifications
                </motion.h2>

                <div className="space-y-6">
                    {certificates.map((cert, idx) => (
                        <div key={idx} className="flex items-center bg-gray-800 dark:bg-gray-900 rounded-lg shadow-lg p-6">
                        <div className="mr-6 flex-shrink-0">
                            {icons[cert.issuer.trim()] || null}
                        </div>

                        <div>
                            <div className="text-xl font-semibold text-white mb-1">{cert.title}</div>
                            <div className="text-gray-300 text-sm mb-1">
                            Issued by: <span className="font-medium">{cert.issuer}</span>
                            </div>
                            <div className="text-gray-300 text-sm mb-1">
                            Issued: <span className="font-medium">{cert.year}</span>
                            </div>
                            <a
                            href={cert.link}
                            className="text-blue-400 hover:underline text-sm font-medium inline-flex items-center"
                            target="_blank" rel="noopener noreferrer"
                            >
                            Verify Credential
                            {/* <svg className="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M12.293 2.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l8-8zM17 7l-4-4m1 10h3a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-3a1 1 0 011-1z"></path>
                            </svg> */}
                            </a>
                        </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Certifications;
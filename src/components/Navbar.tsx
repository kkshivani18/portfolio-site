// import { motion, useScroll, useTransform } from 'framer-motion';
// import ThemeToggle from './themeToggle';
// import { useTheme } from '../context/themeContext';

// const Navbar = () => {
//   const { theme } = useTheme();
//   const { scrollY } = useScroll();
//   const backgroundColor = useTransform(
//     scrollY,
//     [0, 100],
//     ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.8)']
//   );

//   const darkBackgroundColor = useTransform(
//     scrollY,
//     [0, 100],
//     ['rgba(3, 7, 18, 0)', 'rgba(3, 7, 18, 0.8)']
//   );

//   const navItems = [
//     { href: '#about', label: 'About' },
//     { href: '#projects', label: 'Projects' },
//     { href: '#skills', label: 'Skills' },
//     { href: '#certifications', label: 'Certifications' },
//     { href: '#contact', label: 'Contact' },
//   ];

//   const handleViewResume = () => {
//     window.open(
//       "https://drive.google.com/file/d/14NBdTfmX36sQp2uT3pr19wDmnvB98bzx/view?usp=sharing",
//       "_blank"
//     );
//   };

//   return (
//     <motion.nav
//       style={{ backgroundColor: theme === 'dark' ? darkBackgroundColor : backgroundColor }}
//       className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-all duration-300"
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5 }}
//           >
//             <a href="#" className="text-xl font-bold text-gray-800 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
//               Krishna Shivani
//             </a>
//           </motion.div>

//           <div className="hidden md:block">
//             <div className="flex items-center space-x-4">
//               {navItems.map((item, index) => (
//                 <motion.a
//                   key={item.href}
//                   href={item.href}
//                   initial={{ opacity: 0, y: -20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.5, delay: index * 0.1 }}
//                   className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
//                 >
//                   {item.label}
//                 </motion.a>
//               ))}
//             </div>
//           </div>

//           <div className="flex items-center gap-4">
//             <ThemeToggle />
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={handleViewResume}
//               className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
//             >
//               View Resume
//             </motion.button>
//           </div>
//         </div>
//       </div>
//     </motion.nav>
//   );
// };

// export default Navbar; 


// import { motion, useScroll, useTransform } from "framer-motion";

// const Navbar = () => {
//   const { scrollY } = useScroll();

//   // Change this to "white" if you want a white navbar
//   const backgroundColor = useTransform(
//     scrollY,
//     [0, 100],
//     ["rgba(0.95, 0.95, 0.95, 0.95)", "rgba(0, 0, 0, 1)"] // transparent → black
//   );

//   const navItems = [
//     { href: "#about", label: "About" },
//     { href: "#projects", label: "Projects" },
//     { href: "#skills", label: "Skills" },
//     { href: "#certifications", label: "Certifications" },
//     { href: "#contact", label: "Contact" },
//   ];

//   const handleViewResume = () => {
//     window.open(
//       "https://drive.google.com/file/d/14NBdTfmX36sQp2uT3pr19wDmnvB98bzx/view?usp=sharing",
//       "_blank"
//     );
//   };

//   return (
//     <motion.nav
//       style={{ backgroundColor }}
//       className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-all duration-300"
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo */}
//           {/* <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5 }}
//           >
//             <a
//               href="#"
//               className="touch-pan-left text-xl font-bold text-white transition-colors"
//             >
//               Krishna Shivani
//             </a>
//           </motion.div> */}

//           {/* Nav Items */}
//           <div className="hidden md:block">
//             <div className="flex items-center space-x-4">
//               {navItems.map((item, index) => (
//                 <motion.a
//                   key={item.href}
//                   href={item.href}
//                   initial={{ opacity: 0, y: -20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.5, delay: index * 0.1 }}
//                   className="text-gray-200 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
//                 >
//                   {item.label}
//                 </motion.a>
//               ))}
//             </div>
//           </div>

//           {/* Resume Button */}
//           {/* <div className="flex items-center gap-4">
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={handleViewResume}
//               className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
//             >
//               View Resume
//             </motion.button>
//           </div> */}
//         </div>
//       </div>
//     </motion.nav>
//   );
// };

// export default Navbar;





import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Menu, X } from "lucide-react"; 

const Navbar = () => {
  const { scrollY } = useScroll();
  const [isOpen, setIsOpen] = useState(false);

  // Smooth scroll background effect
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(0.95, 0.95, 0.95, 0.3)", "rgba(0, 0, 0, 0.9)"]
  );

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#certifications", label: "Certifications" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <motion.nav
       style={{ backgroundColor }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 backdrop-blur-md 
                 transition-all duration-300 px-2 py-3 rounded-full shadow-lg w-auto"
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        {/* <a href="#" className="text-lg font-bold text-white">
          Krishna Shivani
        </a> */}

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6 ml-8 mr-8">
          {navItems.map((item, index) => (
            <motion.a
              key={item.href}
              href={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="text-gray-200 hover:text-white text-sm font-medium transition-colors"
            >
              {item.label}
            </motion.a>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden ml-1 mr-1 px-0.25rem py-0.25 justify-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-10 aspect-square flex items-center justify-center rounded-full bg-black/80 text-white shadow-md"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute top-16 left-0 right-0 mx-auto w-40
                     bg-black/90 rounded-lg shadow-lg p-4 flex flex-col space-y-3 md:hidden"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)} 
              className="text-white hover:text-blue-400 px-3 py-2 rounded-md text-base font-medium"
            >
              {item.label}
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;



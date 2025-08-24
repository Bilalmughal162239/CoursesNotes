// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import {
//   FaBars,
//   FaTimes,
//   FaCode,
//   FaHome,
//   FaBook,
//   FaUser,
//   FaEnvelope,
//   FaMoon,
//   FaSun
// } from 'react-icons/fa';
// import { Link } from 'react-router-dom';

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const navItems = [
//     { name: 'Home', icon: FaHome, href: '/' },
//     { name: 'Courses', icon: FaBook, href: '#courses' },
//     { name: 'About', icon: FaUser, href: '/about' },
//     { name: 'Contact', icon: FaEnvelope, href: '#contact' },
//   ];

//   return (
//     <motion.header
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       transition={{ duration: 0.5 }}
//       className={`header ${isScrolled ? 'scrolled' : ''}`}
//     >
//       <div className="container mx-auto px-4">
//         <div className="flex items-center justify-between h-16 lg:h-20">
//           {/* Logo */}
//           <Link to="/">
//             <motion.div
//               whileHover={{ scale: 1.05 }}
//               className="flex items-center space-x-2"
//             >
//               <div className="logo-icon">
//                 <FaCode className="text-2xl lg:text-3xl text-primary-500" />
//               </div>
//               <span className="logo-text text-xl lg:text-2xl font-bold bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
//                 CodeMaster
//               </span>
//             </motion.div>
//           </Link>

//           {/* Desktop Navigation */}
//           <nav className="hidden lg:flex items-center space-x-8">
//             {navItems.map((item, index) => (
//               <motion.a
//                 key={item.name}
//                 href={item.href}
//                 whileHover={{ y: -2 }}
//                 whileTap={{ y: 0 }}
//                 className="nav-link flex items-center space-x-2 text-gray-700 hover:text-primary-500 transition-colors duration-300"
//                 initial={{ opacity: 0, y: -20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.1 }}
//               >
//                 <item.icon className="text-sm" />
//                 <span className="font-medium">{item.name}</span>
//               </motion.a>
//             ))}
//           </nav>

//           {/* Theme Toggle & Mobile Menu Button */}
//           <div className="flex items-center space-x-4">
//             <motion.button
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//               onClick={() => setIsDarkMode(!isDarkMode)}
//               className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-300"
//             >
//               {isDarkMode ? <FaSun className="text-yellow-500" /> : <FaMoon className="text-gray-600" />}
//             </motion.button>

//             <motion.button
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className="lg:hidden p-2 rounded-lg bg-primary-500 text-white"
//             >
//               {isMenuOpen ? <FaTimes /> : <FaBars />}
//             </motion.button>
//           </div>
//         </div>

//         {/* Mobile Navigation */}
//         <motion.nav
//           initial={{ opacity: 0, height: 0 }}
//           animate={{
//             opacity: isMenuOpen ? 1 : 0,
//             height: isMenuOpen ? 'auto' : 0
//           }}
//           transition={{ duration: 0.3 }}
//           className="lg:hidden overflow-hidden"
//         >
//           <div className="py-4 space-y-2">
//             {navItems.map((item, index) => (
//               <motion.a
//                 key={item.name}
//                 href={item.href}
//                 initial={{ x: -50, opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 transition={{ delay: index * 0.1 }}
//                 className="mobile-nav-link flex items-center space-x-3 p-3 rounded-lg hover:bg-primary-50 transition-colors duration-300"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 <item.icon className="text-primary-500" />
//                 <span className="font-medium text-gray-700">{item.name}</span>
//               </motion.a>
//             ))}
//           </div>
//         </motion.nav>
//       </div>
//     </motion.header>
//   );
// };

// export default Header;

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  FaBars,
  FaTimes,
  FaCode,
  FaHome,
  FaBook,
  FaUser,
  FaEnvelope,
  FaMoon,
  FaSun,
  FaChevronDown,
  FaChevronUp,
  FaCss3Alt,
  FaHtml5,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { SiBootstrap, SiCplusplus } from 'react-icons/si';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', icon: FaHome, href: '/' },
    { name: 'About', icon: FaUser, href: '/about' },
    { name: 'Contact', icon: FaEnvelope, href: '#contact' },
  ];

  const courseItems = [
    { name: 'HTML', icon: FaHtml5, color: "text-orange-600", href: 'HTMLNotesPage' },
    { name: 'CSS', icon: FaCss3Alt, color: "text-blue-600", href: '/courses/css' },
    { name: 'Bootstrap', icon: SiBootstrap, color: "text-purple-600", href: '/courses/bootstrap' },
    { name: 'JavaScript', icon: FaJs, color: "text-yellow-500", href: '/courses/javascript' },
    { name: 'React', icon: FaReact, color: "text-cyan-400", href: '/courses/react' },
    { name: 'Node.js', icon: FaNodeJs, color: "text-green-600", href: 'NodeNotes' },
    { name: 'C', icon: SiCplusplus, color: "text-indigo-600", href: '/courses/c' },
    { name: 'C++', icon: SiCplusplus, color: "text-indigo-700", href: '/courses/cpp' },
    { name: 'Python', icon: FaPython, color: "text-sky-500", href: '/courses/python' },
  ];


  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`header ${isScrolled ? 'scrolled' : ''}`}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2"
            >
              <div className="logo-icon">
                <FaCode className="text-2xl lg:text-3xl text-primary-500" />
              </div>
              <span className="logo-text text-xl lg:text-2xl font-bold bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
                CodeMaster
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                className="nav-link flex items-center space-x-2 text-gray-700 hover:text-primary-500 transition-colors duration-300"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <item.icon className="text-sm" />
                <span className="font-medium">{item.name}</span>
              </motion.a>
            ))}

            {/* Courses Dropdown */}
            <motion.div
              className="relative"
              onHoverStart={() => setIsCoursesOpen(true)}
              onHoverEnd={() => setIsCoursesOpen(false)}
            >
              <motion.button
                whileHover={{ y: -2 }}
                className="nav-link flex items-center space-x-2 text-gray-700 hover:text-primary-500 transition-colors duration-300"
              >
                <FaBook className="text-sm" />
                <span className="font-medium">Courses</span>
                {isCoursesOpen ? <FaChevronUp className="text-xs" /> : <FaChevronDown className="text-xs" />}
              </motion.button>

              {isCoursesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50 border border-gray-200"
                >
                  {courseItems.map((item, index) => (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      className="flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-500 transition-colors duration-300"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                       <item.icon className={item.color + " text-xl"} />
                      <span className="text-sm">{item.name}</span>
                    </motion.a>
                  ))}
                </motion.div>
              )}
            </motion.div>
          </nav>

          {/* Theme Toggle & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-300"
            >
              {isDarkMode ? <FaSun className="text-yellow-500" /> : <FaMoon className="text-gray-600" />}
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-primary-500 text-white"
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.nav
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isMenuOpen ? 1 : 0,
            height: isMenuOpen ? 'auto' : 0
          }}
          transition={{ duration: 0.3 }}
          className="lg:hidden overflow-hidden"
        >
          <div className="py-4 space-y-2">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="mobile-nav-link flex items-center space-x-3 p-3 rounded-lg hover:bg-primary-50 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                <item.icon className="text-primary-500" />
                <span className="font-medium text-gray-700">{item.name}</span>
              </motion.a>
            ))}

            {/* Mobile Courses Dropdown */}
            <div className="border-t border-gray-200 pt-2 mt-2">
              <button
                onClick={() => setIsCoursesOpen(!isCoursesOpen)}
                className="mobile-nav-link flex items-center justify-between w-full p-3 rounded-lg hover:bg-primary-50 transition-colors duration-300"
              >
                <div className="flex items-center space-x-3">
                  <FaBook className="text-primary-500" />
                  <span className="font-medium text-gray-700">Courses</span>
                </div>
                {isCoursesOpen ? <FaChevronUp /> : <FaChevronDown />}
              </button>

              {isCoursesOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="pl-8 mt-2 space-y-2"
                >
                  {courseItems.map((item, index) => (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-center space-x-3 p-2 rounded-lg hover:bg-primary-50 transition-colors duration-300"
                      onClick={() => setIsMenuOpen(false)}
                    >
                       <item.icon className={item.color + " text-xl"} />
                      <span className="text-sm text-gray-700">{item.name}</span>
                    </motion.a>
                  ))}
                </motion.div>
              )}
            </div>
          </div>
        </motion.nav>
      </div>
    </motion.header>
  );
};

export default Header;
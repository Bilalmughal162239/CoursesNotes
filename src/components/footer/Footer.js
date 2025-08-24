import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaFacebook, 
  FaTwitter, 
  FaLinkedin, 
  FaGithub, 
  FaInstagram,
  FaCode,
  FaArrowUp
} from 'react-icons/fa';

const Footer = () => {
  const year = new Date().getFullYear();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: FaFacebook, href: '#', color: 'hover:text-blue-600' },
    { icon: FaTwitter, href: '#', color: 'hover:text-blue-400' },
    { icon: FaLinkedin, href: '#', color: 'hover:text-blue-700' },
    { icon: FaGithub, href: '#', color: 'hover:text-gray-800' },
    { icon: FaInstagram, href: '#', color: 'hover:text-pink-600' },
  ];

  const quickLinks = [
    'HTML Course', 'CSS Course', 'JavaScript Course', 'React Course',
    'Node.js Course', 'C++ Course', 'Bootstrap Course', 'Python Course'
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <footer className="footer">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12"
        >
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg">
                <FaCode className="text-white text-xl" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
                CodeMaster
              </span>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Master programming with our comprehensive courses. From beginner to advanced, 
              we've got you covered with hands-on examples and real-world projects.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-2 bg-gray-100 rounded-full text-gray-600 transition-colors duration-300 ${social.color}`}
                >
                  <social.icon />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Popular Courses</h3>
            <ul className="space-y-2">
              {quickLinks.slice(0, 4).map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  className="text-gray-600 hover:text-primary-500 cursor-pointer transition-colors duration-300"
                >
                  {link}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* More Courses */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">More Courses</h3>
            <ul className="space-y-2">
              {quickLinks.slice(4).map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  className="text-gray-600 hover:text-primary-500 cursor-pointer transition-colors duration-300"
                >
                  {link}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Get in Touch</h3>
            <div className="space-y-3">
              <p className="text-gray-600">
                📧 contact@codemaster.com
              </p>
              <p className="text-gray-600">
                📱 +1 (555) 123-4567
              </p>
              <p className="text-gray-600">
                📍 123 Code Street, Tech City, TC 12345
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white py-2 px-4 rounded-lg font-medium hover:shadow-lg transition-shadow duration-300"
            >
              Start Learning Today
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Footer Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-gray-200 py-6"
        >
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-600">
              <span>Made with</span>
              <motion.div
                className="logo-icon"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <FaCode className="text-lg text-primary-500" />
              </motion.div>
              <span> CodeMaster Team</span>
            </div>
            
            <p className="text-gray-600 text-center">
              © {year} CodeMaster. All rights reserved.
            </p>

            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-primary-500 text-white rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <FaArrowUp />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

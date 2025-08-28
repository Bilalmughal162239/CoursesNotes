import React from 'react';
import { motion } from 'framer-motion';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaArrowRight,
  FaStar,
  FaUsers,
  FaPlay,
  FaCode,
  FaGraduationCap
} from 'react-icons/fa';
import { SiCplusplus, SiBootstrap } from 'react-icons/si';
import { Link } from 'react-router-dom';

const Home = () => {
  const courses = [
    {
      name: 'HTML5',
      icon: FaHtml5,
      color: 'text-orange-500',
      bgColor: 'bg-orange-100',
      students: '15.2k',
      rating: 4.9,
      description: 'Master the foundation of web development',
      href: 'HTMLNotesPage'
    },
    {
      name: 'CSS3',
      icon: FaCss3Alt,
      color: 'text-blue-500',
      bgColor: 'bg-blue-100',
      students: '12.8k',
      rating: 4.8,
      description: 'Create beautiful and responsive designs',
      href: 'CssNotesPage',
    },
    {
      name: 'JavaScript',
      icon: FaJs,
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-100',
      students: '18.5k',
      rating: 4.9,
      href: 'JavaSceriptNotes',
      description: 'Build interactive web applications'
    },
    {
      name: 'React',
      icon: FaReact,
      color: 'text-cyan-500',
      bgColor: 'bg-cyan-100',
      students: '14.3k',
      href: 'ReactNotesPage',
      rating: 4.9,
      description: 'Create modern user interfaces'
    },
    {
      name: 'Node.js',
      icon: FaNodeJs,
      color: 'text-green-500',
      bgColor: 'bg-green-100',
      students: '11.7k',
      rating: 4.8,
      href: 'NodeNotesPage',
      description: 'Build scalable backend applications'
    },
    {
      name: 'Bootstrap',
      icon: SiBootstrap,
      color: 'text-purple-500',
      bgColor: 'bg-purple-100',
      students: '9.4k',
      rating: 4.7,
      href: 'BootstrapNotes',
      description: 'Rapid responsive web development'
    },
    {
      name: 'C++',
      icon: SiCplusplus,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
      students: '13.1k',
      href: 'CppNotesPage',
      rating: 4.8,
      description: 'Master system programming'
    },
    {
      name: 'Python',
      icon: FaPython,
      color: 'text-green-600',
      bgColor: 'bg-green-100',
      students: '16.9k',
      rating: 4.9,
      description: 'Versatile programming language'
    },
  ];

  const stats = [
    { icon: FaUsers, value: '50K+', label: 'Students' },
    { icon: FaCode, value: '100+', label: 'Projects' },
    { icon: FaGraduationCap, value: '95%', label: 'Success Rate' },
    { icon: FaStar, value: '4.9', label: 'Rating' },
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
    <div className="home">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-4xl lg:text-6xl font-bold leading-tight"
                >
                  Master
                  <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
                    {' '}Programming
                  </span>
                  <br />
                  Skills Today
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-xl text-gray-600 leading-relaxed"
                >
                  Learn from comprehensive courses with hands-on examples,
                  real-world projects, and expert guidance. Start your coding journey today!
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary flex items-center justify-center space-x-2 px-8 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <span>Start Learning</span>
                  <FaArrowRight />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-secondary flex items-center justify-center space-x-2 px-8 py-4 border-2 border-primary-500 text-primary-500 rounded-xl font-semibold hover:bg-primary-50 transition-colors duration-300"
                >
                  <FaPlay />
                  <span>Watch Demo</span>
                </motion.button>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8"
              >
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="flex items-center justify-center mb-2">
                      <stat.icon className="text-2xl text-primary-500" />
                    </div>
                    <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="hero-image-container sm:ps-0 md:ps-5 lg:ps-10">
                <div className="floating-cards">
                  {courses.slice(0, 6).map((course, index) => (
                    <motion.div
                      key={course.name}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1 + index * 0.1 }}
                      whileHover={{ scale: 1.1, y: -5 }}
                      className={`floating-card ${course.bgColor} p-4 rounded-xl shadow-lg`}
                      style={{
                        position: 'absolute',
                        top: `${Math.random() * 60}%`,
                        left: `${Math.random() * 60}%`,
                      }}
                    >
                      <course.icon className={`text-3xl ${course.color}`} />
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="courses-section py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Popular <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">Courses</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our comprehensive collection of programming courses designed for all skill levels
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {courses.map((course, index) => (
              <motion.div
                key={course.name}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="course-card bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className={`w-16 h-16 ${course.bgColor} rounded-xl flex items-center justify-center mb-4`}>
                  <course.icon className={`text-3xl ${course.color}`} />
                </div>
                <h3 className="text-xl font-bold mb-2">{course.name}</h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1">
                    <FaStar className="text-yellow-400" />
                    <span className="font-semibold">{course.rating}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-gray-500">
                    <FaUsers className="text-sm" />
                    <span className="text-sm">{course.students}</span>
                  </div>
                </div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to={course.href}
                    className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-shadow duration-300 inline-block text-center"
                  >
                    Start Course
                  </Link>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div
              className="space-y-8"
            >
              <div>
                <h2 className="text-4xl font-bold mb-4">
                  Why Choose <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">CodeMaster?</span>
                </h2>
                <p className="text-xl text-gray-600">
                  We provide the most comprehensive and practical programming education
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    title: 'Hands-on Examples',
                    description: 'Learn by doing with practical code examples and exercises'
                  },
                  {
                    title: 'Real-world Projects',
                    description: 'Build portfolio-worthy projects that showcase your skills'
                  },
                  {
                    title: 'Expert Support',
                    description: 'Get help from experienced developers and instructors'
                  },
                  {
                    title: 'Lifetime Access',
                    description: 'Access course materials and updates forever'
                  }
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4"
                  >
                    <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div
              className="relative"
            >
              <div className="bg-gradient-to-br from-primary-500 to-secondary-500 rounded-3xl p-8 text-white">
                <div className="space-y-6">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-2">Start Your Journey</h3>
                    <p className="opacity-90">Join thousands of successful developers</p>
                  </div>

                  <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-semibold">Course Progress</span>
                      <span className="text-sm opacity-75">75%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2 mb-4">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: '75%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="bg-white h-2 rounded-full"
                      />
                    </div>
                    <div className="text-sm opacity-75">
                      12 of 16 lessons completed
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-white text-primary-500 py-3 rounded-xl font-semibold hover:shadow-lg transition-shadow duration-300"
                  >
                    Continue Learning
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
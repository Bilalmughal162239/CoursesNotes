import React from 'react';
import { motion } from 'framer-motion';
import {
  FaUsers,
  FaGraduationCap,
  FaCode,
  FaStar,
  FaHeart,
  FaLightbulb,
  FaRocket,
  FaHandshake,
  FaQuoteLeft
} from 'react-icons/fa';

const About = () => {
  const stats = [
    { icon: FaUsers, value: '50,000+', label: 'Happy Students', color: '#3b82f6' },
    { icon: FaGraduationCap, value: '100+', label: 'Courses', color: '#8b5cf6' },
    { icon: FaCode, value: '500+', label: 'Projects', color: '#10b981' },
    { icon: FaStar, value: '4.9/5', label: 'Average Rating', color: '#f59e0b' },
  ];

  const values = [
    {
      icon: FaLightbulb,
      title: 'Innovation',
      description: 'We constantly update our curriculum with the latest technologies and industry best practices.',
      color: '#f59e0b'
    },
    {
      icon: FaHeart,
      title: 'Passion',
      description: 'We are passionate about teaching and helping students achieve their programming goals.',
      color: '#ef4444'
    },
    {
      icon: FaRocket,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from course content to student support.',
      color: '#8b5cf6'
    },
    {
      icon: FaHandshake,
      title: 'Community',
      description: 'We believe in building a strong community of learners who support each other.',
      color: '#10b981'
    }
  ];

  // const team = [
  //   {
  //     name: 'Sarah Johnson',
  //     role: 'Founder & CEO',
  //     image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face',
  //     bio: 'Former Google engineer with 10+ years of experience in web development and education.',
  //     social: {
  //       linkedin: '#',
  //       github: '#',
  //       twitter: '#'
  //     }
  //   },
  //   {
  //     name: 'Michael Chen',
  //     role: 'Lead Instructor',
  //     image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
  //     bio: 'Full-stack developer and educator specializing in React, Node.js, and modern web technologies.',
  //     social: {
  //       linkedin: '#',
  //       github: '#',
  //       twitter: '#'
  //     }
  //   },
  //   {
  //     name: 'Emily Rodriguez',
  //     role: 'Content Director',
  //     image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
  //     bio: 'Curriculum designer with expertise in creating engaging and effective learning experiences.',
  //     social: {
  //       linkedin: '#',
  //       github: '#',
  //       twitter: '#'
  //     }
  //   },
  //   {
  //     name: 'David Kim',
  //     role: 'Technical Lead',
  //     image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
  //     bio: 'Senior software engineer with experience at Microsoft and Amazon, passionate about teaching.',
  //     social: {
  //       linkedin: '#',
  //       github: '#',
  //       twitter: '#'
  //     }
  //   }
  // ];

  const testimonials = [
    {
      name: 'Alex Thompson',
      role: 'Software Developer at Netflix',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
      quote: 'CodeMaster transformed my career. The hands-on approach and real-world projects gave me the confidence to land my dream job.',
      rating: 5
    },
    {
      name: 'Maria Garcia',
      role: 'Frontend Developer at Spotify',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face',
      quote: 'The instructors are amazing and the community is so supportive. I went from complete beginner to professional developer in 8 months.',
      rating: 5
    },
    {
      name: 'James Wilson',
      role: 'Full Stack Developer at Airbnb',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face',
      quote: 'Best investment I ever made. The curriculum is comprehensive and always up-to-date with industry standards.',
      rating: 5
    }
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
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-content"
          >
            <h1 className="hero-title">
              About <span className="gradient-text">CodeMaster</span>
            </h1>
            <p className="hero-subtitle">
              Empowering the next generation of developers through comprehensive,
              hands-on programming education that bridges the gap between learning and real-world application.
            </p>
          </motion.div>
        </div>
        <div className="hero-bg-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="stats-grid"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="stat-card"
              >
                <div className="stat-icon" style={{ backgroundColor: `${stat.color}20` }}>
                  <stat.icon style={{ color: stat.color }} />
                </div>
                <div className="stat-content">
                  <h3 className="stat-value">{stat.value}</h3>
                  <p className="stat-label">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="story-section">
        <div className="container">
          <div className="story-grid">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="story-content"
            >
              <h2 className="section-title">Our Story</h2>
              <div className="story-text">
                <p>
                  CodeMaster was born from a simple observation: traditional programming education
                  often falls short of preparing students for real-world development challenges.
                  Founded in 2020 by a team of experienced developers and educators, we set out
                  to create a learning platform that bridges this gap.
                </p>
                <p>
                  Our mission is to provide comprehensive, practical programming education that
                  not only teaches syntax and concepts but also instills problem-solving skills,
                  best practices, and the confidence needed to succeed in the tech industry.
                </p>
                <p>
                  Today, we're proud to have helped over 50,000 students transform their careers
                  and achieve their programming goals. From complete beginners to experienced
                  developers looking to expand their skills, our community continues to grow
                  and thrive.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="story-image flex justify-center align-center relative"
            >
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop"
                alt="Team collaboration"
              />
              <div className="image-overlay">
                <div className="overlay-content">
                  <h3>Building the Future</h3>
                  <p>Together, one line of code at a time</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-header"
          >
            <h2 className="section-title">Our Values</h2>
            <p className="section-subtitle">
              The principles that guide everything we do
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="values-grid"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="value-card"
              >
                <div className="value-icon" style={{ backgroundColor: `${value.color}20` }}>
                  <value.icon style={{ color: value.color }} />
                </div>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-description">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="team-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-header"
          >
            <h2 className="section-title">Meet Our Team</h2>
            <p className="section-subtitle">
              Passionate educators and industry experts dedicated to your success
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="team-grid"
          >
            {team.map((member, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="team-card"
              >
                <div className="member-image">
                  <img src={member.image} alt={member.name} />
                  <div className="social-overlay">
                    <a href={member.social.linkedin} className="social-link">
                      <FaLinkedin />
                    </a>
                    <a href={member.social.github} className="social-link">
                      <FaGithub />
                    </a>
                    <a href={member.social.twitter} className="social-link">
                      <FaTwitter />
                    </a>
                  </div>
                </div>
                <div className="member-info">
                  <h3 className="member-name">{member.name}</h3>
                  <p className="member-role">{member.role}</p>
                  <p className="member-bio">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section> */}

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-header"
          >
            <h2 className="section-title">What Our Students Say</h2>
            <p className="section-subtitle">
              Real stories from real students who transformed their careers
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="testimonials-grid"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="testimonial-card"
              >
                <div className="quote-icon">
                  <FaQuoteLeft />
                </div>
                <p className="testimonial-quote">{testimonial.quote}</p>
                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <div className="testimonial-author">
                  <img src={testimonial.image} alt={testimonial.name} />
                  <div className="author-info">
                    <h4 className="author-name">{testimonial.name}</h4>
                    <p className="author-role">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="cta-content"
          >
            <h2 className="cta-title">Ready to Start Your Journey?</h2>
            <p className="cta-subtitle">
              Join thousands of students who have transformed their careers with CodeMaster
            </p>
            <div className="cta-buttons">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                Start Learning Today
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary"
              >
                View All Courses
              </motion.button>
            </div>
          </motion.div>
        </div>
        <div className="cta-bg-shapes">
          <div className="cta-shape cta-shape-1"></div>
          <div className="cta-shape cta-shape-2"></div>
        </div>
      </section>
    </div>
  );
};

export default About;

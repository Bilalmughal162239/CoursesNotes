import React, { useState } from 'react';

const AdmissionPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    course: '',
    experience: '',
    motivation: ''
  });

  const [selectedCourses, setSelectedCourses] = useState([]);

  const courses = [
    { id: 'html5', name: 'HTML5', icon: '🌐', color: 'from-orange-400 to-red-500', difficulty: 'Beginner' },
    { id: 'css3', name: 'CSS3', icon: '🎨', color: 'from-blue-400 to-blue-600', difficulty: 'Beginner' },
    { id: 'javascript', name: 'JavaScript', icon: '⚡', color: 'from-yellow-400 to-orange-500', difficulty: 'Intermediate' },
    { id: 'react', name: 'React JS', icon: '⚛️', color: 'from-cyan-400 to-blue-500', difficulty: 'Intermediate' },
    { id: 'nodejs', name: 'Node JS', icon: '🚀', color: 'from-green-400 to-green-600', difficulty: 'Intermediate' },
    { id: 'c', name: 'C Programming', icon: '💻', color: 'from-gray-400 to-gray-600', difficulty: 'Beginner' },
    { id: 'cpp', name: 'C++', icon: '⚙️', color: 'from-purple-400 to-purple-600', difficulty: 'Intermediate' },
    { id: 'python', name: 'Python', icon: '🐍', color: 'from-green-400 to-blue-500', difficulty: 'Beginner' },
    { id: 'bootdtrap', name: 'Bootstrap', icon: '☕', color: 'from-red-400 to-orange-500', difficulty: 'Intermediate' }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleCourseSelect = (courseId) => {
    setSelectedCourses(prev => 
      prev.includes(courseId) 
        ? prev.filter(id => id !== courseId)
        : [...prev, courseId]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', { ...formData, selectedCourses });
    // Handle form submission here
  };

  return (
    <div className="admission-container">
      {/* Hero Section */}
      <section className="hero-section bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="hero-content">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Join <span className="text-yellow-300">CodeMaster</span>
                <br />Academy
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Master programming skills with our comprehensive free courses. 
                From beginner to advanced, we've got you covered!
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center bg-white/20 rounded-full px-4 py-2">
                  <span className="text-2xl mr-2">🎓</span>
                  <span>Free Courses</span>
                </div>
                <div className="flex items-center bg-white/20 rounded-full px-4 py-2">
                  <span className="text-2xl mr-2">👨‍💻</span>
                  <span>Expert Instructors</span>
                </div>
                <div className="flex items-center bg-white/20 rounded-full px-4 py-2">
                  <span className="text-2xl mr-2">📜</span>
                  <span>Certificates</span>
                </div>
              </div>
            </div>
            <div className="hero-animation">
              <div className="floating-elements">
                <div className="floating-card">💻</div>
                <div className="floating-card">🚀</div>
                <div className="floating-card">⚡</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Choose Your Learning Path
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Select from our comprehensive range of programming courses designed for all skill levels
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {courses.map((course) => (
              <div
                key={course.id}
                className={`course-card ${selectedCourses.includes(course.id) ? 'selected' : ''}`}
                onClick={() => handleCourseSelect(course.id)}
              >
                <div className={`course-header bg-gradient-to-r ${course.color}`}>
                  <span className="course-icon">{course.icon}</span>
                  <div className="course-info">
                    <h3 className="course-name">{course.name}</h3>
                    <span className="course-difficulty">{course.difficulty}</span>
                  </div>
                </div>
                <div className="course-body">
                  <div className="course-features">
                    <div className="feature">
                      <span className="feature-icon">📚</span>
                      <span>Interactive Lessons</span>
                    </div>
                    <div className="feature">
                      <span className="feature-icon">💡</span>
                      <span>Hands-on Projects</span>
                    </div>
                    <div className="feature">
                      <span className="feature-icon">🏆</span>
                      <span>Certificate</span>
                    </div>
                  </div>
                  {selectedCourses.includes(course.id) && (
                    <div className="selected-indicator">
                      <span className="checkmark">✓</span>
                      Selected
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Form Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Complete Your Admission
              </h2>
              <p className="text-xl text-gray-600">
                Fill out the form below to start your coding journey
              </p>
            </div>

            <form onSubmit={handleSubmit} className="admission-form">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="form-group">
                  <label htmlFor="firstName" className="form-label">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName" className="form-label">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone" className="form-label">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-group mb-6">
                <label htmlFor="experience" className="form-label">
                  Programming Experience
                </label>
                <select
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  className="form-input"
                >
                  <option value="">Select your level</option>
                  <option value="beginner">Complete Beginner</option>
                  <option value="some">Some Experience</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                </select>
              </div>

              <div className="form-group mb-8">
                <label htmlFor="motivation" className="form-label">
                  Why do you want to learn programming?
                </label>
                <textarea
                  id="motivation"
                  name="motivation"
                  value={formData.motivation}
                  onChange={handleInputChange}
                  rows="4"
                  className="form-input"
                  placeholder="Tell us about your goals and motivation..."
                ></textarea>
              </div>

              <div className="text-center">
                <button type="submit" className="submit-btn">
                  <span className="btn-text">Start Learning Journey</span>
                  <span className="btn-icon">🚀</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="stat-item">
              <div className="stat-number">10K+</div>
              <div className="stat-label">Students</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">9</div>
              <div className="stat-label">Courses</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">95%</div>
              <div className="stat-label">Success Rate</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Support</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdmissionPage;

'use client';

import { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import {
  FiDownload,
  FiMail,
  FiLinkedin,
  FiGithub,
  FiBook,
  FiCode,
  FiGlobe,
  FiAward,
  FiExternalLink,


} from 'react-icons/fi';

export default function About() {
  const [activeTab, setActiveTab] = useState('story');
  const sectionRef = useRef(null);

  // Simplified parallax effect
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -30]);

  const tabs = [
    { id: 'story', label: 'My Story', icon: <FiBook /> },
    { id: 'experience', label: 'Experience', icon: <FiCode /> },
    { id: 'education', label: 'Education', icon: <FiGlobe /> },
    { id: 'skills', label: 'Skills', icon: <FiAward /> },
  ];

  // Skills list for the skills tab
  // const skills = [
  //   { category: 'Frontend', items: ['React.js', 'Next.js', 'Tailwind CSS', 'JavaScript/TypeScript', 'HTML5/CSS3'] },
  //   { category: 'Backend', items: ['Node.js', 'Express', 'REST APIs', 'GraphQL', 'Database Design'] },
  //   { category: 'Tools', items: ['Git/GitHub', 'Docker', 'CI/CD', 'AWS', 'Vercel/Netlify'] },
  //   { category: 'E-commerce', items: ['Sanity CMS', 'Stripe Integration', 'ShipEngine', 'Payment Gateways', 'Order Management'] }
  // ];

  const tabContent = {
    story: (
      <div className="space-y-4 md:space-y-6">
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          I am an <span className="text-blue-600 dark:text-blue-400 font-medium">Senior Software Developer</span> with extensive experience designing, building, and operating scalable, high-availability applications inproduction environments.
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          Strong expertise in system design, cloud technologies, and modern development practices, with a consistent focus on performance, security, and long-term maintainability.
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          Proven ability to own complex technical initiatives end-to-end, from requirements gathering and architectural design through implementation, deployment, and ongoing support. Known as a reliable technical leader who writes clean, well-tested code, drives engineering best practices, and mentors junior developers to improve overall team effectiveness.
        </p>
        <blockquote className="pl-4 border-l-4 border-blue-500 italic text-gray-600 dark:text-gray-400 my-4 md:my-6">
          &quot;Every line of code should contribute to a solution that is not just functional, but exceptional and where possible, intelligent.&quot;
        </blockquote>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          Experienced in collaborating closely with product, design, and business stakeholders to deliver solutions that create measurable business value.
        </p>
        <div className="mt-4 md:mt-6 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800">
            <p className="text-2xl font-extrabold text-blue-700 dark:text-blue-300">150+</p>
            <p className="text-xs md:text-sm text-blue-700/80 dark:text-blue-300/80">Projects</p>
          </div>
          <div className="p-4 rounded-lg bg-purple-50 dark:bg-purple-900/20 border border-purple-100 dark:border-purple-800">
            <p className="text-2xl font-extrabold text-purple-700 dark:text-purple-300">550+</p>
            <p className="text-xs md:text-sm text-purple-700/80 dark:text-purple-300/80">AI Agents</p>
          </div>
          <div className="p-4 rounded-lg bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800">
            <p className="text-2xl font-extrabold text-emerald-700 dark:text-emerald-300">7+</p>
            <p className="text-xs md:text-sm text-emerald-700/80 dark:text-emerald-300/80">E‑commerce Platforms</p>
          </div>
          <div className="p-4 rounded-lg bg-amber-50 dark:bg-amber-900/20 border border-amber-100 dark:border-amber-800">
            <p className="text-2xl font-extrabold text-amber-700 dark:text-amber-300">50+</p>
            <p className="text-xs md:text-sm text-amber-700/80 dark:text-amber-300/80">UI Projects</p>
          </div>
        </div>
      </div>
    ),
    experience: (
      <div className="space-y-6 md:space-y-8">
        <div className="relative pl-6 md:pl-8 border-l-2 border-blue-600">
          <div className="absolute left-[-4px] md:left-[-8px] top-1 w-3 h-3 md:w-4 md:h-4 rounded-full bg-blue-600"></div>
          <div className="mb-1">
            <h4 className="font-bold text-lg md:text-xl text-gray-900 dark:text-white">Senior Software Engineer</h4>
            <p className="text-blue-600 dark:text-blue-400 font-medium">August 2023 – November 2025 • Rippling</p>
          </div>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm md:text-base">
            <li className="flex items-start"><span className="text-blue-600 mr-2">•</span>Owned design and development of cloud-native services supporting IT and workforce management features.</li>
            <li className="flex items-start"><span className="text-blue-600 mr-2">•</span>Led technical initiatives to modernize existing systems and improve scalability.</li>
            <li className="flex items-start"><span className="text-blue-600 mr-2">•</span>Built monitoring and automation to increase system reliability and reduce operational overhead.</li>
            <li className="flex items-start"><span className="text-blue-600 mr-2">•</span>Acted as a senior technical leader through design reviews, code reviews, and mentoring engineers.</li>
          </ul>
        </div>
        <div className="relative pl-6 md:pl-8 border-l-2 border-indigo-500">
          <div className="absolute left-[-4px] md:left-[-8px] top-1 w-3 h-3 md:w-4 md:h-4 rounded-full bg-indigo-500"></div>
          <div className="mb-1">
            <h4 className="font-bold text-lg md:text-xl text-gray-900 dark:text-white">Senior Software Engineer</h4>
            <p className="text-blue-600 dark:text-blue-400 font-medium">March 2021 – July 2023 • Cisco Systems</p>
          </div>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm md:text-base">
            <li className="flex items-start">
              <span className="text-indigo-500 mr-2 flex-shrink-0">•</span>
              <span>Implemented and enhanced backend services supporting large-scale enterprise networking platforms.</span>
            </li>
            <li className="flex items-start">
              <span className="text-indigo-500 mr-2 flex-shrink-0">•</span>
              <span>Participated in system architecture design and led development of key components used by multiple teams</span>
            </li>
            <li className="flex items-start">
              <span className="text-indigo-500 mr-2 flex-shrink-0">•</span>
              <span>Improved system performance and stability by identifying bottlenecks and implementing scalable solutions.</span>
            </li>
            <li className="flex items-start">
              <span className="text-indigo-500 mr-2 flex-shrink-0">•</span>
              <span>Collaborated with cross-functional teams to deliver secure, production-grade software.</span>
            </li>
          </ul>
        </div>
        <div className="relative pl-6 md:pl-8 border-l-2 border-blue-500">
          <div className="absolute left-[-4px] md:left-[-8px] top-1 w-3 h-3 md:w-4 md:h-4 rounded-full bg-blue-500"></div>
          <div className="mb-1">
            <h4 className="font-bold text-lg md:text-xl text-gray-900 dark:text-white">Software Engineer</h4>
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-2 md:mb-3">September 2018 – February • SiTime Corporation</p>
          </div>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm md:text-base">
            <li className="flex items-start">
              <span className="text-blue-500 mr-2 flex-shrink-0">•</span>
              <span>Developed and maintained internal software tools used by engineering and operations teams.</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2 flex-shrink-0">•</span>
              <span>Led design and implementation of services that improved system reliability and data consistency across platforms.</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2 flex-shrink-0">•</span>
              <span>Performed performance analysis and optimization on existing systems.</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2 flex-shrink-0">•</span>
              <span>Mentored junior engineers and provided technical guidance through code reviews and design discussions.</span>
            </li>
          </ul>
        </div>
        <div className="relative pl-6 md:pl-8 border-l-2 border-green-500">
          <div className="absolute left-[-4px] md:left-[-8px] top-1 w-3 h-3 md:w-4 md:h-4 rounded-full bg-green-500"></div>
          <div className="mb-1">
            <h4 className="font-bold text-lg md:text-xl text-gray-900 dark:text-white">Software Engineer</h4>
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-2 md:mb-3">Octobor 2015 – August 2018</p>
          </div>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm md:text-base">
            <li className="flex items-start">
              <span className="text-green-500 mr-2 flex-shrink-0">•</span>
              <span>Designed and implemented backend services used in real-time advertising workflows</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2 flex-shrink-0">•</span>
              <span>Built and maintained APIs and data pipelines supporting campaign configuration and reporting features.</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2 flex-shrink-0">•</span>
              <span>Worked closely with product managers and data engineers to translate business requirements into production-ready code.</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2 flex-shrink-0">•</span>
              <span>Took full ownership of features from development through deployment and ongoing maintenance.</span>
            </li>
          </ul>
        </div>
      </div>
    ),
    education: (
      <div className="space-y-6 md:space-y-8">
        <div className="relative pl-6 md:pl-8 border-l-2 border-purple-500">
          <div className="absolute left-[-4px] md:left-[-8px] top-1 w-3 h-3 md:w-4 md:h-4 rounded-full bg-purple-500"></div>
          <div className="mb-2">
            <h4 className="font-bold text-lg md:text-xl text-gray-900 dark:text-white">Bachelor of Computer Science</h4>
            <div className="flex items-center flex-wrap gap-2">
              <p className="text-purple-600 dark:text-purple-400 font-medium">University of California San Diego</p>
            </div>
          </div>
          <p className="text-gray-700 dark:text-gray-300 mb-3 text-sm md:text-base">
            Advancing expertise in artificial intelligence and Software development through rigorous coursework and project-based learning. The program covers:
          </p>
        </div>
      </div>
    ),
    skills: (
      <div className="space-y-6">
        <p className="text-lg text-center font-semibold text-blue-700 dark:text-blue-300">
          Technical Skillset
        </p>
        {/* Grouped sections with simple progress bars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-lg bg-white dark:bg-slate-800 border border-gray-100 dark:border-gray-700">
            <h5 className="font-bold mb-3 text-gray-900 dark:text-white">Frontend Development</h5>
            {[
              { name: 'React', level: 100 },
              { name: 'Javascript', level: 90 },
              { name: 'TypeScript', level: 93 },
              { name: 'HTML5', level: 100 },
              { name: 'CSS', level: 100 },
            ].map(s => (
              <div key={s.name} className="mb-3">
                <div className="flex justify-between text-xs text-gray-600 dark:text-gray-300">
                  <span>{s.name}</span><span>{s.level}%</span>
                </div>
                <div className="h-2 bg-gray-200 dark:bg-slate-700 rounded">
                  <div className="h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded" style={{ width: `${s.level}%` }}></div>
                </div>
              </div>
            ))}
          </div>
          <div className="p-4 rounded-lg bg-white dark:bg-slate-800 border border-gray-100 dark:border-gray-700">
            <h5 className="font-bold mb-3 text-gray-900 dark:text-white">Backend & System Design</h5>
            {[
              { name: 'REST APIs', level: 85 },
              { name: 'Microservices Architecture', level: 90 },
              { name: 'Distributed Systems', level: 80 },
              { name: 'gRPC', level: 88 },
              { name: 'JWT', level: 87 },
            ].map(s => (
              <div key={s.name} className="mb-3">
                <div className="flex justify-between text-xs text-gray-600 dark:text-gray-300">
                  <span>{s.name}</span><span>{s.level}%</span>
                </div>
                <div className="h-2 bg-gray-200 dark:bg-slate-700 rounded">
                  <div className="h-2 bg-gradient-to-r from-emerald-600 to-teal-600 rounded" style={{ width: `${s.level}%` }}></div>
                </div>
              </div>
            ))}
          </div>
          <div className="p-4 rounded-lg bg-white dark:bg-slate-800 border border-gray-100 dark:border-gray-700">
            <h5 className="font-bold mb-3 text-gray-900 dark:text-white">Cloud & DevOps</h5>
            {[
              { name: 'Amazon Web Services', level: 95 },
              { name: 'Docker', level: 90 },
              { name: 'Kubernetes', level: 80 },
              { name: 'Terraform', level: 82 },
              { name: 'CI/CD', level: 92 },
            ].map(s => (
              <div key={s.name} className="mb-3">
                <div className="flex justify-between text-xs text-gray-600 dark:text-gray-300">
                  <span>{s.name}</span><span>{s.level}%</span>
                </div>
                <div className="h-2 bg-gray-200 dark:bg-slate-700 rounded">
                  <div className="h-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded" style={{ width: `${s.level}%` }}></div>
                </div>
              </div>
            ))}
          </div>
          <div className="p-4 rounded-lg bg-white dark:bg-slate-800 border border-gray-100 dark:border-gray-700">
            <h5 className="font-bold mb-3 text-gray-900 dark:text-white">Databases & Data Technologies</h5>
            {[
              { name: 'PostgreSQL', level: 75 },
              { name: 'MySQL', level: 90 },
              { name: 'Redis', level: 97 },
              { name: 'DynamoDB', level: 88 },
              { name: 'Data Modeling', level: 91 },
              { name: 'Caching Strategies', level: 92 },
            ].map(s => (
              <div key={s.name} className="mb-3">
                <div className="flex justify-between text-xs text-gray-600 dark:text-gray-300">
                  <span>{s.name}</span><span>{s.level}%</span>
                </div>
                <div className="h-2 bg-gray-200 dark:bg-slate-700 rounded">
                  <div className="h-2 bg-gradient-to-r from-amber-600 to-orange-600 rounded" style={{ width: `${s.level}%` }}></div>
                </div>
              </div>
            ))}
          </div>
          <div className="p-4 rounded-lg bg-white dark:bg-slate-800 border border-gray-100 dark:border-gray-700">
            <h5 className="font-bold mb-3 text-gray-900 dark:text-white">Tools, Testing & Leadership</h5>
            {[
              { name: 'Linux', level: 75 },
              { name: 'Jira', level: 90 },
              { name: 'Confluence', level: 97 },
              { name: 'JUnit', level: 88 },
              { name: 'PyTest', level: 91 },
              { name: 'Code Reviews', level: 92 },
            ].map(s => (
              <div key={s.name} className="mb-3">
                <div className="flex justify-between text-xs text-gray-600 dark:text-gray-300">
                  <span>{s.name}</span><span>{s.level}%</span>
                </div>
                <div className="h-2 bg-gray-200 dark:bg-slate-700 rounded">
                  <div className="h-2 bg-gradient-to-r from-amber-600 to-orange-600 rounded" style={{ width: `${s.level}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  };

  // Animation variants with performance optimizations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 15, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 80 }
    }
  };

  return (
    <section id="about" ref={sectionRef} className="py-12 md:py-24 bg-gradient-to-b from-white to-gray-50 dark:from-slate-900 dark:to-slate-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4 }}
          className="text-center mb-8 md:mb-16 px-2 sm:px-0"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              About Me
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-2 sm:px-0">
            Software Developer crafting exceptional digital experiences with modern technologies
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-12 items-start px-2 sm:px-0"
        >
          {/* Profile Column */}
          <motion.div
            variants={itemVariants}
            style={{ y }}
            className="col-span-1 relative w-full max-w-xs mx-auto sm:max-w-none"
          >
            <div className="relative">
              {/* Background Geometric Elements - Simplified for better performance */}
              <div className="absolute -top-4 -left-4 w-48 h-48 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-4 -right-4 w-48 h-48 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-full blur-2xl"></div>

              {/* Profile Card */}
              <div className="relative bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-xl border border-gray-100 dark:border-gray-700 z-10">
                {/* Header Banner */}
                <div className="h-24 bg-gradient-to-r from-blue-600 to-purple-600"></div>

                {/* Profile Image */}
                <div className="relative mx-auto -mt-12 w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-lg">
                  <Image
                    src="/profile1.png"
                    alt="Dane Tomas"
                    fill
                    sizes="(max-width: 768px) 96px, 112px"
                    className="object-cover"
                    onLoad={() => console.log('Image loaded')}
                    priority
                  />
                </div>

                {/* Profile Info */}
                <div className="p-4 md:p-6 text-center">
                  <h3 className="font-bold text-xl md:text-2xl text-gray-900 dark:text-white mb-1">Dane Tomas</h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-3 md:mb-4">Senior Software Developer</p>

                  <div className="flex flex-wrap justify-center gap-1 md:gap-2 mb-4 md:mb-6">
                    <span className="px-2 md:px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs md:text-sm">
                      Next.js
                    </span>
                    <span className="px-2 md:px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs md:text-sm">
                      React
                    </span>
                    <span className="px-2 md:px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs md:text-sm">
                      Tailwind
                    </span>
                    <span className="px-2 md:px-3 py-1 bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-xs md:text-sm">
                      OpenAI SDK
                    </span>
                    <span className="px-2 md:px-3 py-1 bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-xs md:text-sm">
                      Python
                    </span>
                    <span className="px-2 md:px-3 py-1 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-full text-xs md:text-sm">
                      n8n
                    </span>
                  </div>

                  {/* Stats Row */}
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 border-t border-gray-100 dark:border-gray-700 pt-4 md:pt-6 mb-4 md:mb-6">
                    <div>
                      <p className="font-bold text-xl md:text-2xl text-gray-900 dark:text-white">7+</p>
                      <p className="text-gray-500 dark:text-gray-400 text-xs md:text-sm">E-commerce Sites</p>
                    </div>
                    <div>
                      <p className="font-bold text-xl md:text-2xl text-gray-900 dark:text-white">150+</p>
                      <p className="text-gray-500 dark:text-gray-400 text-xs md:text-sm">Projects Delivered</p>
                    </div>
                    <div>
                      <p className="font-bold text-xl md:text-2xl text-gray-900 dark:text-white">550+</p>
                      <p className="text-gray-500 dark:text-gray-400 text-xs md:text-sm">AI Agents</p>
                    </div>
                    {/* <div>
                      <p className="font-bold text-xl md:text-2xl text-gray-900 dark:text-white">5+</p>
                      <p className="text-gray-500 dark:text-gray-400 text-xs md:text-sm">Years Exp.</p>
                    </div> */}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row justify-center gap-2 md:gap-4 mb-4 md:mb-6">
                    <a
                      href="#contact"
                      className="w-full sm:w-auto flex items-center justify-center gap-2 px-3 py-2 md:px-4 md:py-2 text-sm bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition shadow-md hover:shadow-blue-300/30 dark:hover:shadow-blue-500/20"
                    >
                      <FiMail size={16} />
                      <span>Contact</span>
                    </a>
                    <a
                      href="/resume.pdf"
                      target="_blank"
                      className="w-full sm:w-auto flex items-center justify-center gap-2 px-3 py-2 md:px-4 md:py-2 text-sm bg-white hover:bg-gray-50 text-gray-800 rounded-lg border border-gray-200 transition shadow-md hover:shadow-gray-300/30 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white dark:border-gray-600 dark:hover:shadow-gray-700/20"
                    >
                      <FiDownload size={16} />
                      <span>Resume</span>
                    </a>
                  </div>

                  {/* Social Icons */}
                  <div className="flex justify-center gap-3 md:gap-4">
                    <a
                      href="https://www.https://www.linkedin.com/in/dane-tomas-6933373a1/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 md:p-3 bg-gray-50 hover:bg-gray-100 text-gray-700 rounded-full border border-gray-200 transition shadow hover:shadow-lg dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-300 dark:border-gray-600"
                      aria-label="LinkedIn Profile"
                    >
                      <FiLinkedin size={18} />
                    </a>
                    <a
                      href="https://github.com/dane-tomas"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 md:p-3 bg-gray-50 hover:bg-gray-100 text-gray-700 rounded-full border border-gray-200 transition shadow hover:shadow-lg dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-300 dark:border-gray-600"
                      aria-label="GitHub Profile"
                    >
                      <FiGithub size={18} />
                    </a>
                    <a
                      href="#portfolio"
                      className="p-2 md:p-3 bg-gray-50 hover:bg-gray-100 text-gray-700 rounded-full border border-gray-200 transition shadow hover:shadow-lg dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-300 dark:border-gray-600"
                      aria-label="Portfolio"
                    >
                      <FiExternalLink size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Tab Content Column */}
          <motion.div
            variants={itemVariants}
            className="col-span-1 md:col-span-2 lg:col-span-3"
          >
            <div className="bg-white dark:bg-slate-800 rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden min-w-0">
              {/* Tab Navigation */}
              <div className="flex overflow-x-auto scrollbar-hide border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 px-2 sm:px-0">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-1 md:gap-2 py-2 sm:py-3 md:py-4 px-3 sm:px-4 md:px-6 text-sm sm:text-base font-medium transition-all relative whitespace-nowrap ${activeTab === tab.id
                      ? 'text-blue-600 dark:text-blue-400'
                      : 'text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200'
                      }`}
                  >
                    {tab.icon}
                    {tab.label}
                    {activeTab === tab.id && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 dark:bg-blue-400"
                      />
                    )}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="p-3 sm:p-4 md:p-6 max-h-[65vh] sm:max-h-[70vh] md:max-h-[unset] overflow-y-auto custom-scrollbar">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                >
                  {tabContent[activeTab as keyof typeof tabContent]}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Improved responsive scrollbar styles */}
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 3px;
        }
        
        @media (min-width: 640px) {
          .custom-scrollbar::-webkit-scrollbar {
            width: 4px;
          }
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(241, 241, 241, 0.2);
          border-radius: 10px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(136, 136, 136, 0.4);
          border-radius: 10px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(85, 85, 85, 0.6);
        }
        
        .dark .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(45, 55, 72, 0.2);
        }
        
        .dark .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(74, 85, 104, 0.4);
        }
        
        .dark .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(113, 128, 150, 0.6);
        }

        /* Hide scrollbar in tab navigation but keep functionality */
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
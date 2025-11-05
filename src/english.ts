import { ResumeData } from "./types/index";

const getCurrentDate = () => {
  const date = new Date();
  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "Europe/Berlin",
  };
  return date.toLocaleDateString("en-US", options);
};

export const englishData: ResumeData = {
  name: "Felix Heinrich",
  title: "Student & Full Stack Software Developer",
  summary:
    "Motivated Computer Science student (graduation summer 2026) with over 2 years of practical experience as a Full Stack Developer at ImmoScout24 and Deutsche Telekom. Specialized in modern web technologies (React, TypeScript, Java) and cloud solutions (AWS, Docker, CI/CD).",
  contact: {
    email: {
      label: "heinrichfelix03@gmail.com",
    },
    phone: {
      label: "+49 1729723090",
    },
    location: {
      label: "Bernau by Berlin, Germany",
    },
    linkedin: {
      label: "felix-heinrich-b2b66b26b",
    },
    github: {
      label: "fheinrich03",
    },
  },
  languages: [
    {
      name: "German",
      level: "Native",
    },
    {
      name: "English",
      level: "C1 – Fluent",
    },
  ],
  skillLevels: [
    {
      level: "1",
      label: "Professional",
      description: "Established project experience",
    },
    {
      level: "2",
      label: "Practical Experience",
      description: "In-depth knowledge",
    },
    {
      level: "3",
      label: "Basic Knowledge",
      description: "Occasional use",
    },
  ],
  timeline: [
    {
      type: "experience",
      title: "Dual Studies at Deutsche Telekom AG",
      institution: "Deutsche Telekom AG",
      period: "October 2021 – September 2023",
      details: [
        {
          label: "Location",
          content: ["IT and T-Labs"],
        },
        {
          label: "Projects",
          content: [
            "Kahoot Clone, Quantum Secure Communication (Open VPN)",
            "Kubernetes, Docker, CI/CD",
          ],
        },
        {
          label: "Responsibilities",
          content: ["Frontend and Backend Development, Python Scripts"],
        },
        {
          label: "Work Style",
          content: ["Project Planning and Agile Team Work"],
        },
        {
          label: "Experience",
          content: ["Angular, Spring Boot, Python, Kotlin, Android Studio"],
        },
      ],
    },
    {
      type: "experience",
      title: "Working Student Software Developer (Web Development, Full Stack)",
      institution: "ImmoScout24",
      period: "November 2023 – Present",
      details: [
        {
          label: "Responsibilities",
          content: [
            "Frontend and Backend Development in multiple projects",
            "Working in Scrum team with regular sprints",
            "Independent feature implementation",
            "Self-managed from implementation to release",
          ],
        },
        {
          label: "Work Style",
          content: [
            "Implementation",
            "Testing and Quality Assurance",
            "UAT (User Acceptance Testing)",
            "Release Management",
          ],
        },
        {
          label: "Experience",
          content: ["React, Java, Amazon EC2, S3, IAM, PostgreSQL, MySQL"],
        },
      ],
    },
    {
      type: "education",
      title: "High School Diploma",
      institution: "Gymnasium",
      period: "2019 – 2021",
      details: [
        {
          label: "Grade Average",
          content: ["1.7"],
        },
        {
          label: "Advanced Courses",
          content: ["Mathematics and Computer Science"],
        },
      ],
    },
    {
      type: "education",
      title:
        "B.Sc. Information and Communication Technology (Transferred after 4th Semester)",
      institution: "HTWK Leipzig",
      period: "October 2021 – September 2023",
      details: [
        {
          label: "Relevant Modules",
          content: [
            "Project 1",
            "Programming 1 & 2 (Java, C)",
            "Technical Computer Science",
            "Information and Coding Theory",
          ],
        },
      ],
    },
    {
      type: "education",
      title:
        "B.Sc. Applied Computer Science (Expected Graduation: Summer Semester 2026)",
      institution: "HTW Berlin",
      period: "October 2023 – Present",
      details: [
        {
          label: "Relevant Modules",
          content: [
            "Software Engineering (Python)",
            "Programming (Java)",
            "Databases",
            "Web Application Development (HTML, CSS, JavaScript)",
            "Algorithms and Data Structures (Go)",
          ],
        },
      ],
    },
  ],
  hardSkills: [
    {
      category: "Programming Languages",
      items: [
        { name: "Python", level: "2" },
        { name: "Kotlin", level: "3" },
        { name: "TypeScript", level: "1" },
        { name: "Java", level: "1" },
        { name: "HTML", level: "1" },
        { name: "CSS", level: "1" },
        { name: "Scala", level: "3" },
        { name: "Go", level: "3" },
      ],
    },
    {
      category: "Frameworks & Libraries",
      items: [
        { name: "React", level: "1" },
        { name: "Tailwind CSS", level: "2" },
        { name: "Next.js", level: "2" },
        { name: "Spring Framework", level: "2" },
        { name: "AWS Amplify", level: "3" },
        { name: "Angular", level: "3" },
      ],
    },
    {
      category: "DevOps & Infrastructure",
      items: [
        { name: "Docker", level: "2" },
        { name: "CI/CD", level: "2" },
        { name: "Amazon EC2", level: "3" },
        { name: "Amazon S3", level: "3" },
        { name: "Amazon IAM", level: "3" },
        { name: "Amazon Systems Manager", level: "3" },
      ],
    },
    {
      category: "Databases",
      items: [
        { name: "PostgreSQL", level: "2" },
        { name: "MySQL", level: "3" },
      ],
    },
    {
      category: "Tools & Version Control",
      items: [
        { name: "Git", level: "1" },
        { name: "GitHub", level: "1" },
        { name: "AI Tools", level: "1" },
      ],
    },
    {
      category: "Testing",
      items: [
        { name: "Jest", level: "1" },
        { name: "Cypress", level: "2" },
        { name: "JUnit, Mockito", level: "1" },
        { name: "Playwright", level: "2" },
      ],
    },
  ],
  coverLetter: {
    title: "Application Working Student Software Development",
    recipient: {
      name: "VT Netzwelt Recruiting Team",
      company: "VT Netzwelt",
      address: {
        street: "Zur Innung 19",
        city: "Berlin",
        postalCode: "10247",
      },
    },
    date: getCurrentDate(),
    greeting: "Dear SRP Team",
    mainText:
      "I am writing to express my strong interest in applying for the working student position at SRP GmbH. Through my fellow student Nikolaus Häger, I learned that you are looking for goal-oriented working students who can support your team. With my 3 years of professional experience and upcoming graduation, I am convinced that I can be a valuable addition to your team.\n\nAs a computer science student at HTW Berlin with experience at renowned companies such as ImmoScout24 and Deutsche Telekom AG, I bring solid practical knowledge. My expertise includes full-stack development with frontend frameworks like React and Next.js, as well as Spring and Java in the backend. I have experience with cloud services such as AWS, Datadog, and Optimizely, and can independently handle tasks in projects from implementation to release.\n\nMy goal is to systematically develop my existing technical skills and prepare myself for a career as a mid-level developer. As your working student, I can gain further practical experience, familiarize myself with new technologies and workflows, and thus lay the foundations for my professional career after graduation. I would like to work together with experienced team members to expand my competencies and contribute to the company's success.\n\nMy Bachelor's degree in Applied Computer Science is expected to be completed in the summer semester of 2026. I am enrolled as a student until September 30, 2026, and am flexible for a working student position. Thanks to my comprehensive practical experience, I can independently familiarize myself with new technologies and tasks, so that I can integrate productively into your workflows from the very beginning.\n\nI look forward to contributing my skills at SRP GmbH and developing innovative software solutions together. I would be happy to present my motivation and technical competencies in more detail in a personal interview.",
    closing: "Kind regards",
  },
};


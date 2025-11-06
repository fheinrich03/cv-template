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
    "Motivated Computer Science student (graduation winter 2026/27) with over 2 years of practical experience as a Full Stack Developer at ImmoScout24 and Deutsche Telekom. Specialized in modern web technologies (React, TypeScript, Java) and cloud solutions (AWS, Docker, CI/CD).",
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
  timelineCategories: [
    {
      type: "experience",
      label: "Work Experience",
    },
    {
      type: "education",
      label: "Education",
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
          label: "Tech Stack",
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
            "Frontend and Backend development in different projects",
            "Working in scrum team with regular sprints",
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
          label: "Tech Stach",
          content: ["React, Java, Amazon EC2, S3, IAM, PostgreSQL, MySQL"],
        },
      ],
    },
    {
      type: "experience",
      title: "Working Student - Software Developer",
      institution: "Systementwicklung für Raumbezogene Planung GmbH",
      period: "September 2025 – today",
      details: [
        {
          label: "Responsibilities",
          content: [
            "Create POC: CI/CD pipeline in Gitea with Github Actions",
            "Manual testing of software",
            "Fix bugs and implement new features",
          ],
        },
        {
          label: "Tech Stack",
          content: ["Angular, Spring Boot, Java, Gitea"],
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
        "B.Sc. Applied Computer Science (Expected Graduation: Winter Semester 2026/27)",
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
        { name: "Scala", level: "2" },
        { name: "Go", level: "3" },
      ],
    },
    {
      category: "Frameworks & Libraries",
      items: [
        { name: "React", level: "1" },
        { name: "Tailwind CSS", level: "1" },
        { name: "Next.js", level: "2" },
        { name: "Spring Boot", level: "2" },
        { name: "AWS Amplify", level: "3" },
        { name: "Angular", level: "2" },
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
      category: "Data Bases",
      items: [
        { name: "PostgreSQL", level: "2" },
        { name: "MySQL", level: "2" },
      ],
    },
    {
      category: "Tools & Version Control",
      items: [
        { name: "Git", level: "1" },
        { name: "AI Tools", level: "1" },
        { name: "Figma", level: "2" },
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
      name: "Recruiting Team",
      company: "Auralis Group",
      address: {
        street: "Nördliche Münchner Str. 27a",
        city: "Grüwald",
        postalCode: "82031",
      },
    },
    date: getCurrentDate(),
    greeting: "Dear Auralis Recruiting Team",
    mainText:
      "With great interest, I would like to apply for a Working Student position at Auralis Group. " +
      "I first came across your company on LinkedIn, where I noticed a recent working student job posting that had already expired. " +
      "Still, after reading through your About Us and Careers pages, I got really excited about the way you describe your values and approach to building digital products. " +
      "That’s why I’d love to introduce myself and express my motivation to join your team.\n\n" +
      "I’m currently studying Applied Computer Science in my 5th semester at HTW Berlin and have been working as a software developer in different working student positions since the end of 2021. " +
      "During this time, I’ve gained solid experience in full-stack web development.\n\n" +
      "In both of my previous roles, I was part of agile Scrum teams where I developed, tested, and released new features independently. " +
      "I enjoy being trusted with tasks that require me to explore new technologies or dig into complex codebases on my own. " +
      "That kind of responsibility and freedom is exactly what keeps me motivated to learn and improve every day as a developer.\n\n" +
      "At ImmoScout24, I especially appreciated the team spirit and open communication. " +
      "From day one, I felt welcomed and supported — being able to rely on my teammates, ask for help, and pair program together made me feel like part of a small family rather than just coworkers. " +
      "That experience shaped the way I think about good teamwork and a healthy engineering culture.\n\n" +
      "Since my two-year contract there ended, I’ve been looking for a new opportunity where I can keep learning, contribute my own ideas, and grow together with the team. " +
      "I’m particularly interested in joining a company that values curiosity, high-quality work, and thoughtful problem-solving — and from everything I’ve seen, Auralis seems to be exactly that kind of place.\n\n" +
      "I’m confident that my technical skills, curiosity, and motivation to grow fit well with your team. " +
      "I expect to complete my Bachelor’s degree in early 2027 and would love to continue being part of your company beyond my studies.\n\n" +
      "I’d be happy to share more about my motivation and experience in a personal conversation — " +
      "and hopefully work together soon on creating great software that makes a real difference.\n\n" +
      "Attached, you’ll find two example projects I’ve developed, along with a short description of each.",
    closing: "Kind regards",
  },
};

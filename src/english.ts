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
  title: "Student & Full Stack Software Engineer",
  summary:
    "Motivated Computer Science student (graduation winter 2026/27) with over 4 years of practical experience as a Full Stack Developer. Specialized in modern web technologies (React, Angular, Spring Boot) and cloud solutions (AWS, Docker, CI/CD).",
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
      title: "Dual Studies",
      institution: "Deutsche Telekom AG",
      period: "Oct 2021 – Sept 2023",
      details: [
        {
          label: "Projects",
          content: ["Kahoot Clone, Quantum Secure Communication (Open VPN)"],
        },
        {
          label: "Responsibilities",
          content: ["Frontend & Backend Development, Python Scripts, Project Planning, Agile Team Work"],
        },
        {
          label: "Tech Stack",
          content: ["Angular, Spring Boot, Python, Kotlin, Android Studio, Docker"],
        },
      ],
    },
    {
      type: "experience",
      title: "Working Student Software Developer",
      institution: "ImmoScout24",
      period: "Nov 2023 – Aug 2025",
      details: [
        {
          label: "Responsibilities",
          content: [
            "Full Stack development across multiple cross-functional projects",
            "Independent feature development & bug fixes, from implementation to release",
          ],
        },
        {
          label: "Work Style",
          content: [
            "Agile/Scrum with regular sprints",
            "Testing and Quality Assurance",
            "UAT (User Acceptance Testing)",
            "Release Management",
          ],
        },
        {
          label: "Tech Stach",
          content: ["React, Java, Amazon EC2, S3, IAM, PostgreSQL, Jenkins"],
        },
      ],
    },
    {
      type: "experience",
      title: "Working Student Software Developer",
      institution: "Systementwicklung für Raumbezogene Planung GmbH",
      period: "Sept 2025 – Dec 2025",
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
      type: "experience",
      title: "Working Student Software Developer",
      institution: "ITONICS",
      period: "Feb 2026 – Present",
      details: [
        {
          label: "Responsibilities",
          content: [
            "Design System development: maintenance & expansion",
            "Bug fixes & feature implementation",
            "Settings Migration project (global settings modal)",
          ],
        },
        {
          label: "Architecture",
          content: ["Monorepo with Angular Nx, Headless UI, Storybook & Figma"],
        },
        {
          label: "Tech Stack",
          content: ["Angular, TypeScript, Nx, Storybook"],
        },
      ],
    },
    {
      type: "education",
      title:
        "B.Sc. Information and Communication Technology (Transferred after 4th Semester)",
      institution: "HTWK Leipzig",
      period: "Oct 2021 – Sept 2023",
      details: [
        {
          label: "Relevant Modules",
          content: ["Project 1, Programming 1 & 2 (Java, C), Technical Computer Science, Information and Coding Theory"],
        },
      ],
    },
    {
      type: "education",
      title:
        "B.Sc. Applied Computer Science (Expected Graduation: Winter 2026/27)",
      institution: "HTW Berlin",
      period: "Oct 2023 – Present",
      details: [
        {
          label: "Relevant Modules",
          content: ["Web Application Development, Frontend Development, Distributed Systems, Cloud Computing, Software Engineering 1 & 2, Databases, Algorithms & Data Structures"],
        },
      ],
    },
  ],
  hardSkills: [
    {
      category: "Programming Languages",
      items: [
        { name: "Python", level: "2" },
        { name: "Kotlin", level: "2" },
        { name: "TypeScript", level: "1" },
        { name: "Java", level: "1" },
        { name: "HTML", level: "1" },
        { name: "CSS", level: "2" },
        { name: "Scala", level: "2" },
        { name: "Go", level: "3" },
      ],
    },
    {
      category: "Frameworks & Libraries",
      items: [
        { name: "React", level: "1" },
        { name: "Tailwind CSS", level: "1" },
        { name: "Next.js", level: "1" },
        { name: "Spring Boot", level: "2" },
        { name: "AWS Amplify", level: "3" },
        { name: "Angular", level: "1" },
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
      items: [{ name: "PostgreSQL", level: "2" }],
    },
    {
      category: "Tools & Version Control",
      items: [
        { name: "Git", level: "1" },
        { name: "AI Tools", level: "1" },
        { name: "NPM", level: "2" },
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

import { ResumeData } from "./types/index";

const getCurrentDate = () => {
  const date = new Date();
  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    timeZone: "Europe/Berlin",
  };
  return date.toLocaleDateString("en-US", options);
};

export const englishData: ResumeData = {
  name: "Yazan Bouadakji",
  title: "Student & Web Developer",
  summary:
    "Dedicated Media Informatics student at BHT with practical experience in web development at Deutsche Telekom AG. Specialized in frontend technologies (HTML, CSS, TypeScript, Java).",
  contact: {
    email: {
      label: "yazanbawa262@gmail.com",
    },
    phone: {
      label: "+49 17624774200",
    },
    location: {
      label: "Strausberg, Germany",
    },
    // linkedin: {
    //   label: "",
    // },
    github: {
      label: "yazan262",
    },
  },
  languages: [
    {
      name: "Arabic",
      level: "Native",
    },
    {
      name: "German",
      level: "C1",
    },
    {
      name: "English",
      level: "C1",
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
      title: "Private Project: CRM for Law Firm",
      institution: "Self-developed (in production)",
      period: "Sep 2023 – present (approx. 1 year 6 months)",
      details: [
        {
          label: "Project",
          content: ["CRM system for a law firm – real project in use"],
        },
        {
          label: "Status",
          content: ["In production – actively used by the law firm"],
        },
        {
          label: "Responsibilities",
          content: [
            "Design and development of a custom CRM",
            "Deployed in practice by the law firm",
          ],
        },
      ],
    },
    {
      type: "experience",
      title: "Dual Study Program at Deutsche Telekom AG",
      institution: "Deutsche Telekom AG",
      period: "2021 – 2023",
      details: [
        {
          label: "Department",
          content: ["Chapter Development and Implementation"],
        },
        {
          label: "Projects",
          content: [
            "Web onboarding feature for internal website",
            "Excel automation for business development",
          ],
        },
        {
          label: "Responsibilities",
          content: [
            "Development of complex VBA formulas and process automation",
            "Frontend development for internal website",
            "Programming of web onboarding features",
            "Creation of user-friendly interfaces",
            "VBA programming",
          ],
        },
        {
          label: "Work Methods",
          content: [
            "Agile work in Scrum team",
            "Project planning and agile teamwork",
          ],
        },
        {
          label: "Technologies",
          content: ["HTML, CSS, JavaScript, TypeScript, VBA, Excel"],
        },
      ],
    },

    {
      type: "education",
      title: "High School Diploma (Abitur)",
      institution: "Einstein-Gymnasium Neuenhagen",
      period: "2017 – 2021",
      details: [
        {
          label: "GPA",
          content: ["3.0"],
        },
        {
          label: "Computer Science Course",
          content: ["2.3"],
        },
        {
          label: "Advanced Courses",
          content: ["Mathematics and Physics"],
        },
      ],
    },
    {
      type: "education",
      title: "B.Sc. Information and Communication Technology (Dual Study)",
      institution: "HTWK Leipzig",
      period: "October 2021 – September 2023",
      details: [
        {
          label: "Relevant Modules",
          content: [
            "Programming 1 (C)",
            "Numerical Simulation, Signals and Systems",
            "Information and Coding Theory",
          ],
        },
      ],
    },
    {
      type: "education",
      title: "B.Sc. Media Informatics",
      institution: "BHT Berlin",
      period: "April 2024 – Present",
      details: [
        {
          label: "Relevant Modules",
          content: [
            "Programming I & II (Java)",
            "Web Development I & II",
            "Software Engineering I & II",
            "Media Design (Figma, App Design)",
            "Distributed Systems, Database Systems, Algorithms and Data Structures",
            "Human Computer Interaction, Interaction and Interface Design",
            "Frontend Design Web: Advanced Techniques",
            "Data Science Programming with Python",
          ],
        },
      ],
    },
  ],
  hardSkills: [
    {
      category: "Programming Languages",
      items: [
        { name: "Java", level: "2" },
        { name: "Python", level: "2" },
        { name: "TypeScript", level: "2" },
        { name: "JavaScript", level: "1" },
        { name: "HTML5", level: "1" },
        { name: "CSS", level: "1" },
        { name: "VBA", level: "1" },
        { name: "SQL", level: "3" },
      ],
    },
    {
      category: "Frameworks & Libraries",
      items: [
        { name: "React", level: "1" },
        { name: "Next.js", level: "1" },
        { name: "Angular", level: "3" },
        { name: "Tailwind CSS", level: "2" },
        { name: "Material-UI", level: "2" },
        { name: "Sass/SCSS", level: "2" },
      ],
    },
    {
      category: "DevOps & Infrastructure",
      items: [
        { name: "Docker", level: "1" },
        { name: "REST APIs", level: "1" },
      ],
    },
    {
      category: "Databases",
      items: [
        { name: "PostgreSQL", level: "1" },
        { name: "MongoDB", level: "1" },
      ],
    },
    {
      category: "Tools & Version Control",
      items: [
        { name: "Git", level: "2" },
        { name: "GitHub/GitLab", level: "1" },
        { name: "IntelliJ IDEA", level: "2" },
        { name: "VS Code", level: "1" },
        { name: "Figma", level: "1" },
        { name: "Excel", level: "1" },
      ],
    },
    {
      category: "Testing & Development",
      items: [
        { name: "JUnit 5", level: "3" },
        { name: "Postman", level: "2" },
        { name: "Responsive Design", level: "1" },
        { name: "Accessible Interfaces", level: "1" },
      ],
    },
  ],
  coverLetter: {
    title: "Application for Working Student Software Developer",
    recipient: {
      name: "HR Department",
      company: "ImmoScout24",
      address: {
        street: "Berliner Straße 112a",
        city: "Berlin",
        postalCode: "13189",
      },
    },
    date: getCurrentDate(),
    greeting: "Dear HR Team",
    mainText:
      "I am writing to express my strong interest in the Working Student position at ImmoScout24. My friend Felix Heinrich worked as a working student in the Honey-Badgers team until August 31, 2025. Through him, I learned that a position in this team is expected to become available starting September 1, 2025. As a Media Informatics student at BHT with practical experience in web development, I am confident that I would be a valuable addition to your team.\n\nDuring my time at Deutsche Telekom AG, I gained extensive experience in frontend web development. I worked with HTML, CSS, JavaScript, and TypeScript and played a key role in developing a web onboarding feature. Additionally, I automated Excel sheets using VBA and created user-friendly interfaces.\n\nThrough my studies at BHT, I have acquired solid knowledge in Java programming, database systems, distributed systems, and algorithms. A significant portion of my modules focuses on web development, which has allowed me to deepen my knowledge in this area – and my interest has grown even stronger.\n\nMy goal is to optimally develop my extensive theoretical knowledge and practical experience in a professional environment. I am particularly motivated by exchanging ideas with experienced colleagues, working in agile teams, and learning new technologies. As a working student, I not only want to learn but also take responsibility and actively contribute to the team's success with my dedication.\n\nI would welcome the opportunity to discuss my motivation and qualifications in person and learn how I can best support your team.",
    closing: "Sincerely",
  },
};

import { ResumeData } from "./types/index";

const getCurrentDate = () => {
  const date = new Date();
  const options: Intl.DateTimeFormatOptions = { 
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    timeZone: 'Europe/Berlin'
  };
  return date.toLocaleDateString('de-DE', options);
};

export const germanData: ResumeData = {
  name: "Felix Heinrich",
  title: "Student & Fullstack-Softwareentwickler",
  summary: "Motivierter Informatikstudent (Abschluss Sommer 2025) mit über 2 Jahren praktischer Erfahrung als Fullstack-Entwickler bei ImmoScout24 und der Deutschen Telekom. Spezialisiert auf moderne Webtechnologien (React, TypeScript, Java) und Cloud-Lösungen (AWS, Docker, CI/CD).",
  contact: {
    email: {
      label: "heinrichfelix03@gmail.com"
    },
    phone: {
      label: "+49 1729723090"
    },
    location: {
      label: "Bernau bei Berlin, Deutschland"
    },
    linkedin: {
      label: "felix-heinrich-b2b66b26b"
    },
    github: {
      label: "fheinrich03"
    }
  },
  languages: [
    {
      name: "Deutsch",
      level: "Muttersprache"
    },
    {
      name: "Englisch",
      level: "C1 – fließend"
    }
  ],
  skillLevels: [
    {
      level: "1",
      label: "Professionell",
      description: "Etablierte Projekterfahrung"
    },
    {
      level: "2",
      label: "Praktische Erfahrung",
      description: "Tiefgreifende Kenntnisse"
    },
    {
      level: "3",
      label: "Grundkenntnisse",
      description: "Unregelmäßige Anwendung"
    }
  ],
  timeline: [
    {
      type: "experience",
      title: "Duales Studium bei der Deutschen Telekom AG",
      institution: "Deutsche Telekom AG",
      period: "Oktober 2021 – September 2023",
      details: [
        {
          label: "Einsatzort",
          content: ["IT und T-Labs"],
        },
        {
          label: "Projekte",
          content: [
            "Kahoot-Klon, Quantum Secure Communication (Open VPN)",
            "Kubernetes, Docker, CI/CD",
          ],
        },
        {
          label: "Tätigkeiten",
          content: ["Frontend- und Backend-Entwicklung, Python-Scripts"],
        },
        {
          label: "Arbeitsweise",
          content: ["Projektplanung und agiles Arbeiten im Team"],
        },
        {
          label: "Erfahrungen",
          content: [
            "Angular, Spring Boot, Python, Kotlin, Android Studio",
          ],
        },
      ],
    },
    {
      type: "experience",
      title: "Werkstudent Softwareentwickler (Webentwicklung, Full Stack)",
      institution: "ImmoScout24",
      period: "November 2023 – heute",
      details: [
        {
          label: "Tätigkeiten",
          content: [
            "Frontend- und Backend-Entwicklung in mehreren Projekten",
            "Arbeit im Scrum-Team mit regelmäßigen Sprints",
            "Eigenständige Verwirklichung von Features",
            "Selbstständig von Implementierung bis Release",
          ],
        },
        {
          label: "Arbeitsweise",
          content: [
            "Implementierung",
            "Testen und Qualitätssicherung",
            "UAT (User Acceptance Testing)",
            "Release-Management",
          ],
        },
        {
          label: "Erfahrungen",
          content: [
            "React, Java, Amazon EC2, S3, IAM, PostgreSQL, MySQL",
          ],
        },
      ],
    },
    {
      type: "education",
      title: "Abitur, Allgemeine Hochschulreife",
      institution: "Gymnasium",
      period: "2019 – 2021",
      details: [
        {
          label: "Notendurchschnitt",
          content: ["1,7"],
        },
        {
          label: "Leistungskurse",
          content: ["Mathematik und Informatik"],
        },
      ],
    },
    {
      type: "education",
      title: "B.Sc. Informations- und Kommunikationstechnik (Wechsel nach 4. Semester)",
      institution: "HTWK Leipzig",
      period: "Oktober 2021 – September 2023",
      details: [
        {
          label: "Relevante Module",
          content: [
            "Projekt 1",
            "Programmierung 1 & 2 (Java, C)",
            "Technische Informatik",
            "Informations- und Codierungstheorie",
          ],
        },
      ],
    },
    {
      type: "education",
      title: "B.Sc. Angewandte Informatik (voraussichtlicher Abschluss: Sommersemester 2025)",
      institution: "HTW Berlin",
      period: "Oktober 2023 – Heute",
      details: [
        {
          label: "Relevante Module",
          content: [
            "Software Engineering (Python)",
            "Programmierung (Java)",
            "Datenbanken",
            "Web Application Development (HTML, CSS, JavaScript)",
            "Algorithmen und Datenstrukturen (Go)",
          ],
        },
      ],
    },
  ],
  hardSkills: [
    {
      category: "Programmiersprachen",
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
      category: "DevOps & Infrastruktur",
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
      category: "Datenbanken",
      items: [
        { name: "PostgreSQL", level: "2" },
        { name: "MySQL", level: "3" },
      ],
    },
    {
      category: "Tools & Versionskontrolle",
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
    title: "Bewerbung als Werkstudent Softwareentwickler",
    recipient: {
      name: "SRP Team",
      position: "",
      company: "SRP - Systementwicklung für Raumbezogene \nPlanung GmbH",
      address: {
        street: "Berliner Straße 112a",
        city: "Berlin",
        postalCode: "13189"
      }
    },
    date: getCurrentDate(),
    greeting: "Sehr geehrtes SRP Team",
    mainText: "Mit großem Interesse möchte ich mich als Werkstudent bei der SRP GmbH bewerben. Durch meinen Kommilitonen Nikolaus Häger bin ich darauf aufmerksam geworden, dass Sie zielstrebige Werkstudenten suchen, die ihr Team unterstützen können. Mit meiner 3-jährigen Berufserfahrung und bevorstehenden Studienabschluss bin ich überzeugt, eine wertvolle Ergänzung für Ihr Team zu sein.\n\nAls Informatikstudent der HTW Berlin mit Erfahrung bei renommierten Unternehmen wie ImmoScout24 und der Deutschen Telekom AG bringe ich fundierte praktische Kenntnisse mit. Meine Expertise umfasst Full-Stack-Entwicklung mit Frontend Frameworks wie React und Next.js sowie Spring und Java im Backend. Ich habe Erfahrung mit Cloud Services wie AWS, Datadog und Optimizely und kann selbstständig Aufgaben in Projekten von der Implementierung bis zum Release bearbeiten.\n\nMein Ziel ist es, meine bereits vorhandenen technischen Fähigkeiten gezielt weiterzuentwickeln und mich systematisch auf eine Karriere als Mid-Level-Entwickler vorzubereiten. Als Ihr Werkstudent kann ich weitere praxisnahe Erfahrungen sammeln, mich in neue Technologien und Arbeitsabläufe einarbeiten und so die Grundlagen für meinen beruflichen Werdegang nach dem Studium legen. Ich möchte gerne zusammen mit erfahrenen Teammitgliedern meine Kompetenzen erweitern und zum Unternehmenserfolg beitragen.\n\nMein Bachelorabschluss in Angewandter Informatik wird voraussichtlich im Sommersemester 2025 erfolgen. Bis zum 30.09.2025 bin ich als Student immatrikuliert und flexibel für eine Werkstudenten-Tätigkeit verfügbar. Dank meiner umfassenden Praxiserfahrung kann ich mich selbstständig in neue Technologien und Aufgabenstellungen einarbeiten, sodass ich mich von Beginn an produktiv in Ihre Arbeitsabläufe einbringen kann.\n\nIch freue mich darauf, meine Fähigkeiten bei SRP GmbH einzubringen und gemeinsam innovative Softwarelösungen zu entwickeln. Gerne stelle ich Ihnen in einem persönlichen Gespräch meine Motivation und fachlichen Kompetenzen detaillierter vor.",
    closing: "Mit freundlichen Grüßen"
  },
};

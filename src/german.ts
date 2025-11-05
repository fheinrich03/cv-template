import { ResumeData } from "./types/index";

const getCurrentDate = () => {
  const date = new Date();
  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    timeZone: "Europe/Berlin",
  };
  return date.toLocaleDateString("de-DE", options);
};

export const germanData: ResumeData = {
  name: "Felix Heinrich",
  title: "Student & Fullstack-Softwareentwickler",
  summary:
    "Motivierter Informatikstudent (Abschluss Wintersemester 2026/27) mit über 4 Jahren praktischer Erfahrung als Fullstack-Entwickler bei ImmoScout24 und der Deutschen Telekom. Spezialisiert auf moderne Webtechnologien (React, TypeScript, Java) und Cloud-Lösungen (AWS, Docker, CI/CD).",
  contact: {
    email: {
      label: "heinrichfelix03@gmail.com",
    },
    phone: {
      label: "+49 1729723090",
    },
    location: {
      label: "Bernau bei Berlin, Deutschland",
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
      name: "Deutsch",
      level: "Muttersprache",
    },
    {
      name: "Englisch",
      level: "C1 – fließend",
    },
  ],
  skillLevels: [
    {
      level: "1",
      label: "Professionell",
      description: "Etablierte Projekterfahrung",
    },
    {
      level: "2",
      label: "Praktische Erfahrung",
      description: "Tiefgreifende Kenntnisse",
    },
    {
      level: "3",
      label: "Grundkenntnisse",
      description: "Unregelmäßige Anwendung",
    },
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
          content: ["Angular, Spring Boot, Python, Kotlin, Android Studio"],
        },
      ],
    },
    {
      type: "experience",
      title: "Werkstudent Softwareentwickler (Webentwicklung, Full Stack)",
      institution: "ImmoScout24",
      period: "November 2023 – August 2025",
      details: [
        {
          label: "Tätigkeiten",
          content: [
            "Frontend- und Backend-Entwicklung in mehreren Projekten",
            "Arbeit im Scrum-Team mit regelmäßigen Sprints",
            "Selbständige Entwicklung von Features von Implementierung bis Release",
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
          content: ["React, Java, Amazon EC2, S3, IAM, PostgreSQL, MySQL"],
        },
      ],
    },
    {
      type: "experience",
      title: "Werkstudent Softwarenentwickler bei SRP",
      institution: "Systementwicklung für Raumbezogene Planung GmbH",
      period: "September 2025 – heute",
      details: [
        {
          label: "Tätigkeiten",
          content: [
            "Issues bearbeiten (Bugfixes, kleine Features)",
            "Erstellen eiens POC: CI/CD Pipeline in Gitea mit Github Actions",
            "Manuelles & exploratives Testen und Issues erstellen",
          ],
        },
        {
          label: "Technologien",
          content: ["Angular, Spring Boot (Java), Gitea"],
        },
      ],
    },
    {
      type: "education",
      title:
        "B.Sc. Informations- und Kommunikationstechnik (Wechsel nach 4. Semester)",
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
      title:
        "B.Sc. Angewandte Informatik (voraussichtlicher Abschluss: Wintersemester 2026/27)",
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
        { name: "Spring Framework", level: "2" },
        { name: "AWS Amplify", level: "3" },
        { name: "Angular", level: "2" },
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
        { name: "MySQL", level: "2" },
      ],
    },
    {
      category: "Tools & Versionskontrolle",
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
    title: "Bewerbung Werkstudent Software Development",
    recipient: {
      name: "Recruiting Team",
      company: "VT Netzwelt",
      address: {
        street: "Zur Innung 19",
        city: "Berlin",
        postalCode: "10247",
      },
    },
    date: getCurrentDate(),
    greeting: "Liebes VT Netzwelt Recruiting-Team",
    mainText:
      "Mit großem Interesse möchte ich mich als Werkstudent bei VT Netzwelt bewerben. Auf LinkedIn bin ich auf eure Stellenausschreibung aufmerksam geworden und hatte beim Lesen sofort das Gefühl, dass diese Position perfekt zu mir passt. Besonders die Beschreibung der Aufgaben und Arbeitsweise hat mich überzeugt – technisch anspruchsvoll, neugierig und mit Fokus auf Qualität – entspricht genau dem, was mich antreibt.\n\n" +
      "Ich bin Informatikstudent an der HTW Berlin im 5. Semester und bringe mehrere Jahre Praxiserfahrung als Werkstudent mit – unter anderem bei ImmoScout24 und der Deutschen Telekom AG. In beiden Unternehmen war ich Teil agiler Teams und konnte eigenverantwortlich Features von der Anforderung über die Implementierung bis zum Release umsetzen. Besonders geschätzt habe ich dort die offene Kommunikation auf Augenhöhe, das Vertrauen in eigene Ideen und die Möglichkeit, Verantwortung zu übernehmen.\n\n" +
      "Der Schwerpunkt meiner technischen Kenntnisse liegt im Frontend mit React und Next.js, ergänzt durch solide Kenntnisse in Java und Spring Boot. Ich arbeite also routiniert als Full-Stack-Entwickler und sehe darin einen großen Vorteil, um mich schnell auch in die Mobile App Entwicklung einzuarbeiten. Bisher habe ich noch kein Projekt mit React Native oder Flutter umgesetzt, sehe darin aber eine spannende Gelegenheit, meine bisherigen Erfahrungen gezielt zu erweitern und Neues zu lernen.\n\n" +
      "Gerade um mich weiterzuentwickeln, möchte ich nicht einfach nur neben dem Studium arbeiten, sondern wirklich etwas bewirken – eigene Ideen einbringen, Verantwortung übernehmen und dabei kontinuierlich dazulernen. Ich bin überzeugt, dass meine Neugier, Lernbereitschaft und praktischen Erfahrungen gut zu VT Netzwelt passen.\n\n" +
      "Ich werde meinen Bachelorabschluss voraussichtlich im Wintersemester 2026/27 erreichen. Bis dahin bin ich als Student immatrikuliert und flexibel einsetzbar. Sowohl die Position als auch die Arbeitsweise sprechen mich sehr an – und ich kann mir gut vorstellen, nach dem Studium weiterhin Teil eures Teams zu bleiben.\n\n" +
      "Ich würde mich sehr freuen, meine Motivation und technischen Fähigkeiten in einem persönlichen Gespräch mit euch zu teilen – und vielleicht schon bald gemeinsam an spannenden digitalen Projekten zu arbeiten.",
    closing: "Mit herzlichen Grüßen",
  },
};

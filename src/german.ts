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
  timelineCategories: [
    {
      type: "experience",
      label: "Berufserfahrung",
    },
    {
      type: "education",
      label: "Bildungsweg",
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
          content: ["React, Java, AWS EC2, S3, IAM, PostgreSQL, Jenkins"],
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
            "Erstellen eines POC: CI/CD Pipeline in Gitea mit Github Actions",
            "Manuelles & exploratives Testen von Software",
            "Bugfixes und Implementierung neuer Features",
          ],
        },
        {
          label: "Technologien",
          content: ["Angular, Spring Boot, Java, Gitea"],
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
        { name: "Spring Boot", level: "2" },
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
      company: "Auralis Group",
      address: {
        street: "Nördliche Münchner Str. 27a",
        city: "Grüwald",
        postalCode: "82031",
      },
    },
    date: getCurrentDate(),
    greeting: "Liebes Auralis Recruiting-Team",
    mainText:
      "mit großem Interesse möchte ich mich als Werkstudent bei der Auralis Group bewerben. " +
      "Auf LinkedIn bin ich auf euer Unternehmen aufmerksam geworden und habe gesehen, dass eine Stellenausschreibung für eine Werkstudentenposition bereits abgelaufen ist. " +
      "Dennoch hat mich eure About Us- und Careers-Seite sofort begeistert – besonders, wie ihr eure Werte und euren Ansatz zur Entwicklung digitaler Produkte beschreibt. " +
      "Deshalb möchte ich mich euch kurz vorstellen und meine Motivation teilen, Teil eures Teams zu werden.\n\n" +
      "Ich studiere derzeit Angewandte Informatik im 5. Semester an der HTW Berlin und arbeite seit Ende 2021 als Werkstudent in der Softwareentwicklung. " +
      "In dieser Zeit konnte ich umfangreiche Erfahrungen in der Full-Stack-Webentwicklung sammeln.\n\n" +
      "In meinen bisherigen Positionen war ich Teil agiler Scrum-Teams, in denen ich eigenverantwortlich neue Features entwickelt, getestet und bis zum Release begleitet habe. " +
      "Ich schätze es sehr, wenn mir Aufgaben anvertraut werden, bei denen ich Neues lernen oder mich selbstständig in komplexe Codebasen einarbeiten kann. " +
      "Dieses Vertrauen und die damit verbundene Verantwortung motivieren mich, mich als Entwickler stetig weiterzuentwickeln.\n\n" +
      "Bei ImmoScout24 habe ich besonders den starken Teamzusammenhalt und die offene Kommunikation geschätzt. " +
      "Von Beginn an fühlte ich mich willkommen – auf meine Kolleg:innen zählen zu können, Fragen zu stellen und gemeinsam im Pair Programming zu arbeiten, " +
      "hat die Arbeit für mich besonders angenehm und inspirierend gemacht.\n\n" +
      "Da mein Zweijahresvertrag dort abgelaufen ist, suche ich nun nach einer neuen Herausforderung, bei der ich weiter lernen, eigene Ideen einbringen und gemeinsam mit einem engagierten Team wachsen kann. " +
      "Besonders wichtig ist mir ein Umfeld, das Neugier, Qualität und durchdachtes Problemlösen fördert – und genau diesen Eindruck habe ich von Auralis gewonnen.\n\n" +
      "Ich bin überzeugt, dass meine technischen Fähigkeiten, meine Lernbereitschaft und meine Motivation gut zu euch passen. " +
      "Meinen Bachelorabschluss werde ich voraussichtlich Anfang 2027 abschließen und ich kann mir sehr gut vorstellen, auch darüber hinaus Teil eures Unternehmens zu bleiben.\n\n" +
      "Ich würde mich sehr freuen, meine Motivation und bisherigen Erfahrungen in einem persönlichen Gespräch mit euch zu teilen – " +
      "und vielleicht schon bald gemeinsam an spannenden Softwareprojekten zu arbeiten.\n\n" +
      "Im Anhang findet ihr außerdem zwei Beispielprojekte, die ich entwickelt habe, jeweils mit einer kurzen Beschreibung.",
    closing: "Mit freundlichen Grüßen",
  },
};

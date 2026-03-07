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
  name: "Yazan Bouadakji",
  title: "Student & Webentwickler",
  summary:
    "Engagierter Medieninformatik-Student an der BHT mit praktischer Erfahrung in der Webentwicklung bei der Deutschen Telekom AG. Spezialisiert auf moderne Frontend-Technologien (React, Next.js, Typescript, Tailwind CSS).",
  contact: {
    email: {
      label: "yazanbawa262@gmail.com",
    },
    phone: {
      label: "+49 17624774200",
    },
    location: {
      label: "Strausberg, Deutschland",
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
      name: "Arabisch",
      level: "Muttersprache",
    },
    {
      name: "Deutsch",
      level: "C1",
    },
    {
      name: "Englisch",
      level: "C1",
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
      title: "Privates Projekt: CRM-System für Anwaltskanzlei",
      institution: "Eigene Projekte",
      period: "Sep 2023 – heute (ca. 1 Jahr 6 Monate)",
      details: [
        {
          label: "Projekt",
          content: [
            "CRM-System für eine Anwaltskanzlei – echtes Projekt im Einsatz",
          ],
        },
        {
          label: "Status",
          content: ["In Produktion – wird von der Kanzlei aktiv genutzt"],
        },
        {
          label: "Tätigkeiten",
          content: [
            "Einrichtung von Netzwerk und Server vor Ort",
            "NAS Einrichtung & automatisierte und verschlüsselte Daten Backups",
            "Migration von Prozessen: Manuell & analog zu automatisiert & digital",
            "Konzeption und Entwicklung eines maßgeschneiderten CRM-Systems",
            "Projektmanagement und Planung im Team",
            "Support & Bereitstellung von Lösungen bei akuten Anforderungen in der Anwaltskanzlei",
          ],
        },
        {
          label: "Erfahrungen",
          content: [
            "Unterstützte Entwicklung mit KI",
            "Next.js, TypeScript, Tailwind CSS",
            "Ticket-System (Linear), CI/CD, Self Hosting, DB Management",
          ],
        },
      ],
    },
    {
      type: "experience",
      title: "Duales Studium bei der Deutschen Telekom AG",
      institution: "Deutsche Telekom AG",
      period: "2021 – 2023",
      details: [
        {
          label: "Einsatzort",
          content: ["Chapter Development and Implementation"],
        },
        {
          label: "Projekte",
          content: [
            "Frontend-Entwicklung für interne Webseite",
            "Excel-Automatisierung für Geschäftsentwicklung",
          ],
        },
        {
          label: "Tätigkeiten",
          content: [
            "Entwicklung komplexer VBA-Skripte und Prozessautomatisierung",
            "Entwicklung eines Onboarding-Features (Frontend)",
            "Erstellung nutzerfreundlicher Oberflächen",
            "VBA-Programmierung",
          ],
        },
        {
          label: "Arbeitsweise",
          content: [
            "Agiles Arbeiten im Scrum Team",
            "Projektplanung und agiles Teamwork",
          ],
        },
        {
          label: "Erfahrungen",
          content: ["HTML, CSS, JavaScript, TypeScript, VBA, Excel"],
        },
      ],
    },
    {
      type: "education",
      title: "B.Sc. Informations- und Kommunikationstechnik (Duales Studium)",
      institution: "HTWK Leipzig",
      period: "Oktober 2021 – September 2023",
      details: [
        {
          label: "Relevante Module",
          content: [
            "Programmierung 1 (C)",
            "Numerische Simulation , Signale und Systeme",
            "Informations- und Codierungstheorie",
          ],
        },
      ],
    },
    {
      type: "education",
      title: "B.Sc. Medieninformatik",
      institution: "BHT Berlin",
      period: "April 2024 – Heute",
      details: [
        {
          label: "Relevante Module",
          content: [
            "Programmierung I & II (Java)",
            "Webentwicklung I & II",
            "Software Engineering I & II",
            "Medien Design (Figma, App-Design)",
            "Verteilte Systeme, Datenbanksysteme, Algorithmen und Datenstrukturen",
            "Human Computer Interaction, Interaktions- und Interface-Design",
            "Frontend–Design Web: Fortgeschrittene Techniken",
            "Data Science Programmierung mit Python",
          ],
        },
      ],
    },
  ],
  hardSkills: [
    {
      category: "Programmiersprachen",
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
        { name: "shadcn-ui", level: "1" },
        { name: "Sass/SCSS", level: "2" },
      ],
    },
    {
      category: "DevOps & Infrastruktur",
      items: [
        { name: "Docker", level: "1" },
        { name: "Dokploy (Self Hosted)", level: "2" },
        { name: "REST APIs", level: "1" },
        { name: "Linear", level: "2" },
      ],
    },
    {
      category: "Datenbanken",
      items: [
        { name: "PostgreSQL", level: "1" },
        { name: "MongoDB", level: "1" },
      ],
    },
    {
      category: "Tools & Versionskontrolle",
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
      category: "Testing & Entwicklung",
      items: [
        { name: "JUnit 5", level: "3" },
        { name: "Postman", level: "2" },
        { name: "Responsive Design", level: "1" },
        { name: "Barrierefreie Interfaces", level: "1" },
      ],
    },
  ],
  coverLetter: {
    title: "Bewerbung als Werkstudent Softwareentwicklung",
    recipient: {
      name: "HR / Recruiting Team",
      company: "itestra GmbH",
      address: {
        street: "Greifswalder Straße 226",
        city: "Berlin",
        postalCode: "10405",
      },
    },
    date: getCurrentDate(),
    greeting: "Liebes itestra Recruiting Team",
    mainText:
      "Ich bin zufällig auf Ihr Unternehmen aufmerksam geworden, als ich jemanden mit einem Ihrer Firmen-Shirts gesehen habe, auf dem ein treffender Spruch über Code stand. Bei meiner anschließenden Recherche hat mich sofort begeistert, dass Sie sich auf Individualsoftware spezialisieren, denn das ist genau meine Leidenschaft.\n\nMich reizt an der Softwareentwicklung am meisten, echte und greifbare Probleme zu lösen. Das habe ich entdeckt, als ich bei einem Freund und Anwalt in der Kanzlei war. Dort fiel mir auf, dass fast 90 % der Aufgaben manuell und sehr unstrukturiert abgewickelt wurden. Ich wusste, dass ich mit individuellen Lösungen immense Erleichterungen für die Mitarbeiter bewirken kann. Deshalb habe ich mit einem Partner zusammen ein maßgeschneidertes CRM-System als Webanwendung mit Next.js und PostgreSQL entwickelt. Das System ist aktuell fest im Kanzleialltag integriert, übernimmt die vorher manuellen Prozesse und wird in unserer Freizeit stetig weiterentwickelt.\n\nNeben der Erfahrung mit einem eigenen Projekt bringe ich auch mehrjährige Berufserfahrung durch mein duales Studium bei der Deutschen Telekom AG mit. Dort habe ich im agilen Team Onboarding-Features für eine Webanwendung entwickelt und mit VBA Prozesse automatisiert.\n\nIch studiere derzeit im 5. Semester Medieninformatik an der BHT. Für die letzten zwei Semester meines Studiums möchte ich die freie Zeit nutzen, um meine bereits starken Fähigkeiten weiter in einem beruflichen Umfeld auszubauen. Dafür suche ich aktuell nach einer Position als Werkstudent Softwareentwickler / Webentwicklung.\n\n Ich bin überzeugt, dass meine technischen Fähigkeiten, meine Lernbereitschaft und meine Motivation gut zu Ihnen passen. Meinen Bachelorabschluss werde ich voraussichtlich Anfang 2027 abschließen. Bis dahin bin ich als Werkstudent flexibel einsetzbar und kann mir gut vorstellen, auch darüber hinaus Teil Ihres Unternehmens zu bleiben.\n\nIch bin ab sofort einsatzbereit und würde mich freuen, bei itestra an echten Problemlösungen mitzuarbeiten. Auf ein persönliches Kennenlernen freue ich mich sehr.",
    closing: "Mit freundlichen Grüßen",
  },
};

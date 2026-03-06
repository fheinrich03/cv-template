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
    "Engagierter Medieninformatik-Student an der BHT mit praktischer Erfahrung in der Webentwicklung bei der Deutschen Telekom AG. Spezialisiert auf Frontend-Technologien (HTML, CSS, TypeScript, Java).",
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
      title: "Privates Projekt: CRM für Anwaltskanzlei",
      institution: "Eigenentwicklung (in Produktion)",
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
          content: ["In Production – wird von der Kanzlei aktiv genutzt"],
        },
        {
          label: "Tätigkeiten",
          content: [
            "Konzeption und Entwicklung eines maßgeschneiderten CRM",
            "Einsatz in der Praxis durch die Anwaltskanzlei",
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
            "Web-Onboarding-Feature für interne Webseite",
            "Excel-Automatisierung für Geschäftsentwicklung",
          ],
        },
        {
          label: "Tätigkeiten",
          content: [
            "Entwicklung komplexer VBA-Formeln und Prozessautomatisierung",
            "Frontend-Entwicklung für interne Webseite",
            "Programmierung eines Web-Onboarding-Features",
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
      title: "Abitur, Allgemeine Hochschulreife",
      institution: "Einstein-Gymnasium Neuenhagen",
      period: "2017 – 2021",
      details: [
        {
          label: "Notendurchschnitt",
          content: ["3,0"],
        },
        {
          label: "Informatik Grundkurs",
          content: ["2,3"],
        },
        {
          label: "Leistungskurse",
          content: ["Mathematik und Physik"],
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
        { name: "Sass/SCSS", level: "2" },
      ],
    },
    {
      category: "DevOps & Infrastruktur",
      items: [
        { name: "Docker", level: "1" },
        { name: "REST APIs", level: "1" },
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
      name: "HR Team / Recruiting",
      company: "itestra GmbH",
      address: {
        street: "Greifswalder Straße 226",
        city: "Berlin",
        postalCode: "10405",
      },
    },
    date: getCurrentDate(),
    greeting: "Sehr geehrte Damen und Herren",
    mainText:
      "Ich bin ehrlich gesagt durch einen Zufall auf itestra aufmerksam geworden: Ich habe jemanden mit einem Ihrer Firmen-Shirts gesehen, auf dem ein treffender Spruch über Code stand. Das hat mich neugierig gemacht. Bei meiner anschließenden Recherche hat mich sofort begeistert, dass Sie sich auf Individualsoftware spezialisieren – denn genau das ist mein Ding.\n\nMich reizt an der Softwareentwicklung am meisten, echte und greifbare Probleme zu lösen. Als ich vor einiger Zeit bei einem befreundeten Anwalt in der Kanzlei war, fiel mir auf, dass dort fast 90 % der Aufgaben manuell und ohne vernünftiges System abgewickelt wurden. Ich wusste, dass ich das effizienter gestalten kann und habe ein maßgeschneidertes CRM-System als Fullstack-App mit Next.js und PostgreSQL entwickelt. Das System ist mittlerweile fest im Kanzleialltag integriert, übernimmt die vorher manuellen Prozesse und wird von mir stetig weiterentwickelt.\n\nNeben dieser Hands-on-Erfahrung bringe ich auch Konzernpraxis mit. Während meines dualen Studiums bei der Deutschen Telekom AG habe ich im agilen Team Web-Onboarding-Features entwickelt und Prozesse automatisiert.\n\nWas meine Verfügbarkeit angeht, sieht es sehr gut aus: Im April starte ich in mein 5. Semester Medieninformatik an der BHT. Da ich in den vergangenen Semestern bereits vorgearbeitet habe, stehen jetzt nur noch drei Module (sowie ein Teamprojekt) an. Ich habe also das theoretische Fundament bereits gelegt, wenig Uni-Stress und mehr als genug Zeit und Fokus für die Arbeit bei Ihnen. Im 6. Semester folgt dann nur noch die Bachelorarbeit.\n\nIch bin ab sofort einsatzbereit und würde mich freuen, bei itestra an echten Problemlösungen mitzuarbeiten. Auf ein persönliches Kennenlernen freue ich mich sehr.",
    closing: "Mit freundlichen Grüßen",
  },
};

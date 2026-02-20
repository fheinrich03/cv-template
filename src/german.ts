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
  name: "Mohammad Yasin Ahmadzada",
  title: "Informatikabsolvent – Ausbildung Fachinformatiker Anwendungsentwicklung",
  summary:
    "Motivierter Informatikabsolvent mit analytischem Denkvermögen und großer Begeisterung für Softwareentwicklung. "
    + "Während meiner Integration in Deutschland habe ich gezielt Sprachkenntnisse aufgebaut und vielseitige praktische Erfahrungen gesammelt. "
    + "Nun strebe ich eine Ausbildung zum Fachinformatiker für Anwendungsentwicklung an, um meine technischen Fähigkeiten praxisnah weiterzuentwickeln.",
  contact: {
    email: {
      label: "yasinkhanbehroz786@gmail.com",
    },
    phone: {
      label: "017663470038",
    },
    location: {
      label: "Merkurstraße 19, 16321 Bernau",
    },
  },
  languages: [
    {
      name: "Dari",
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
      title: "IT Officer",
      institution: "Milad Farhat Logistic Services",
      period: "2020 – 2021",
      details: [
        {
          label: "Tätigkeiten",
          content: [
            "Verwaltung und Wartung der IT-Systeme",
            "Installation und Konfiguration von Hard- und Software",
            "Netzwerk- und VPN-Konfiguration",
            "Sicherstellung der Datensicherheit und Systemstabilität",
            "Optimierung der Systemleistung",
          ],
        },
      ],
    },
    {
      type: "experience",
      title: "Logistikmitarbeiter",
      institution: "Outlet Home24, Berlin",
      period: "11.06.2024 – 01.12.2024",
      details: [
        {
          label: "Tätigkeiten",
          content: [
            "Warenannahme und Qualitätskontrolle",
            "Lagerorganisation und Bestandsprüfung",
            "Unterstützung effizienter Teamabläufe",
          ],
        },
      ],
    },
    {
      type: "experience",
      title: "Logistikmitarbeiter",
      institution: "Versand/Logistik",
      period: "06.03.2025 – 14.02.2026",
      details: [
        {
          label: "Tätigkeiten",
          content: [
            "Scannen und Sortieren von Sendungen",
            "Sicherstellung korrekter Versandprozesse",
            "Präzises Arbeiten unter Zeitdruck",
          ],
        },
      ],
    },
    {
      type: "education",
      title: "B.Sc. Informationswissenschaft und Ingenieurwesen",
      institution: "Kabul University",
      period: "2017 – 2021",
      details: [],
    },
    {
      type: "education",
      title: "Sekundarschulabschluss",
      institution: "Ustad-Sharifi-Gymnasium, Afghanistan",
      period: "2015",
      details: [],
    },
  ],
  hardSkills: [
    {
      category: "Programmiersprachen",
      items: [
        { name: "C++", level: "2" },
        { name: "Java", level: "2" },
        { name: "JavaScript", level: "2" },
        { name: "C#", level: "2" },
        { name: "HTML", level: "2" },
        { name: "CSS", level: "2" },
        { name: "PHP", level: "2" },
      ],
    },
    {
      category: "Webentwicklung",
      items: [
        { name: "Entwicklung dynamischer Webseiten", level: "3" },
      ],
    },
    {
      category: "Systeme & Datenbanken",
      items: [
        { name: "Linux", level: "2" },
        { name: "SQL Server", level: "2" },
        { name: "MySQL", level: "2" },
      ],
    },
    {
      category: "Netzwerk & IT-Systeme",
      items: [
        { name: "Installation und Konfiguration von IT-Systemen", level: "2" },
        { name: "Netzwerk- und VPN-Einrichtung", level: "2" },
      ],
    },
  ],
  coverLetter: {
    title: "Bewerbung – Ausbildung Fachinformatiker Anwendungsentwicklung",
    recipient: {
      name: "Personalabteilung",
      company: "Firmenname GmbH",
      address: {
        street: "Musterstraße 1",
        city: "Berlin",
        postalCode: "10115",
      },
    },
    date: getCurrentDate(),
    greeting: "Sehr geehrte Damen und Herren,",
    mainText:
      "mit großem Interesse bewerbe ich mich bei Ihnen um eine Ausbildung zum Fachinformatiker für Anwendungsentwicklung.\n\n"
      + "Als motivierter Informatikabsolvent (B.Sc. Informationswissenschaft und Ingenieurwesen, Kabul University) bringe ich analytisches Denkvermögen und Begeisterung für Softwareentwicklung mit. "
      + "Während meiner Integration in Deutschland habe ich gezielt Sprachkenntnisse (Deutsch und Englisch C1) aufgebaut und vielseitige praktische Erfahrungen gesammelt.\n\n"
      + "Als IT Officer bei Milad Farhat Logistic Services habe ich IT-Systeme verwaltet und gewartet, Hard- und Software installiert und konfiguriert sowie Netzwerke und VPN eingerichtet. "
      + "Meine technischen Kenntnisse umfassen Programmiersprachen (C++, Java, JavaScript, C#, PHP), Webentwicklung, Linux, SQL Server und MySQL.\n\n"
      + "Ich strebe eine Ausbildung an, um meine Fähigkeiten praxisnah weiterzuentwickeln und freue mich auf die Gelegenheit, Sie in einem persönlichen Gespräch von meiner Motivation zu überzeugen.",
    closing: "Mit freundlichen Grüßen",
  },
};

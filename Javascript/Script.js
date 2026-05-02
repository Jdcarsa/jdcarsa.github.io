const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("menu");
const iconOpen = document.getElementById("open");
const iconClose = document.getElementById("close");
const themeToggle = document.getElementById("theme-toggle");
const themeLabel = document.getElementById("theme-label");
const langToggle = document.getElementById("lang-toggle");
const rootBody = document.body;
const copyright = document.getElementById("copyright");

const translations = {
  es: {
    nav_experience: "Experiencia",
    nav_home: "Inicio",
    nav_skills: "Habilidades",
    nav_contact: "Contacto",
    hero_title: "Hola, soy <span>Jesús David Cárdenas</span>",
    hero_desc:
      "Ingeniero de Sistemas y Desarrollador Full-Stack con experiencia real construyendo soluciones web con .NET, React y Spring Boot. He trabajado en automatización de procesos con Python, integración de APIs REST y despliegues en AWS, además de pruebas de despliegue con Docker.",
    btn_cv: "Descargar CV",
    skills_title: "Habilidades",
    work_title: "Experiencia Laboral",
    work_role: "Ingeniero de Software Junior — Finnovarisk",
    work_1:
      "Automaticé cálculos y procesos internos con Python, reduciendo tiempos operativos y errores manuales.",
    work_2:
      "Desarrollé una aplicación web para registro de pacientes y gestión de visitas médicas con React + Spring Boot.",
    work_3:
      "Diseñé y desarrollé una plataforma Fintech en .NET, integrando APIs externas, despliegue en AWS y pruebas de despliegue con Docker.",
    academic_title: "Experiencia Académica",
    studies_title: "Estudios",
    studies_degree: "Ingeniería de Sistemas",
    studies_desc:
      "Formación enfocada en desarrollo de software, estructuras de datos y diseño de soluciones tecnológicas.",
    academic_1_title: "Desarrollador Frontend — Pasantía Empresarial",
    academic_1_desc:
      "Desarrollé un módulo de evaluación en Next.js con visualización de documentos y pruebas, consumiendo APIs backend.",
    academic_2_title: "Plataforma educativa para programación infantil",
    academic_2_desc:
      "Implementé un subsistema para gestión de misiones y equipos, integrado con el módulo de tareas existente.",
    projects_title: "Proyectos",
    project_1_title: "Plataforma Fintech (.NET)",
    project_1_desc:
      "Plataforma financiera con integración de APIs externas y despliegue cloud.",
    project_2_title: "Gestión de visitas médicas (React + Spring Boot)",
    project_2_desc:
      "Registro de pacientes y trazabilidad clínica con API REST y base de datos relacional.",
    project_3_title: "Módulo de evaluación frontend (Next.js)",
    project_3_desc:
      "Visualización de documentos y pruebas conectadas a servicios backend.",
    project_4_title: "Plataforma educativa de programación infantil (React + Spring Boot)",
    project_4_desc:
      "Gestión de misiones y equipos para mejorar la coordinación de actividades.",
    contact_title: "Contacto",
    contact_subtitle: "Si quieres trabajar conmigo, escríbeme directamente:",
    contact_email: "Enviar correo",
    contact_whatsapp: "Contactar por WhatsApp",
    theme_light: "Modo claro",
    theme_dark: "Modo oscuro"
  },
  en: {
    nav_experience: "Experience",
    nav_home: "Home",
    nav_skills: "Skills",
    nav_contact: "Contact",
    hero_title: "Hi, I am <span>Jesús David Cárdenas</span>",
    hero_desc:
      "Systems Engineer and Full-Stack Developer with real experience building web solutions with .NET, React, and Spring Boot. I have worked on process automation with Python, REST API integrations, AWS deployments, and Docker deployment testing.",
    btn_cv: "Download CV",
    skills_title: "Skills",
    work_title: "Work Experience",
    work_role: "Junior Software Engineer — Finnovarisk",
    work_1:
      "I automated calculations and internal processes with Python, reducing operational time and manual errors.",
    work_2:
      "I built a web app for patient registration and medical visit management using React + Spring Boot.",
    work_3:
      "I designed and developed a Fintech platform in .NET, integrating external APIs, deploying it on AWS, and running Docker deployment tests.",
    academic_title: "Academic Experience",
    studies_title: "Studies",
    studies_degree: "Systems Engineering",
    studies_desc:
      "Academic background focused on software development, data structures, and technology solution design.",
    academic_1_title: "Frontend Developer — Business Internship",
    academic_1_desc:
      "I developed an evaluation module in Next.js with document viewer and assessments, consuming backend APIs.",
    academic_2_title: "Educational platform for kids programming",
    academic_2_desc:
      "I implemented a mission and team management subsystem integrated with an existing tasks module.",
    projects_title: "Projects",
    project_1_title: "Fintech Platform (.NET)",
    project_1_desc:
      "Financial platform integrating external APIs and cloud deployment.",
    project_2_title: "Medical visits management (React + Spring Boot)",
    project_2_desc:
      "Patient registry and clinical traceability with REST API and relational database.",
    project_3_title: "Frontend evaluation module (Next.js)",
    project_3_desc:
      "Document visualization and assessments connected to backend services.",
    project_4_title: "Kids programming educational platform (React + Spring Boot)",
    project_4_desc:
      "Mission and team management to improve activity coordination.",
    contact_title: "Contact",
    contact_subtitle: "If you want to work with me, contact me directly:",
    contact_email: "Send email",
    contact_whatsapp: "Chat on WhatsApp",
    theme_light: "Light mode",
    theme_dark: "Dark mode"
  }
};

const savedLang = localStorage.getItem("lang") || "es";
const savedTheme = localStorage.getItem("theme") || "dark";

function applyLanguage(lang) {
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });
  langToggle.textContent = lang === "es" ? "EN" : "ES";
  updateThemeLabel(rootBody.dataset.theme, lang);
  localStorage.setItem("lang", lang);
}

function updateThemeLabel(theme, lang) {
  const modeKey = theme === "dark" ? "theme_light" : "theme_dark";
  themeLabel.textContent = translations[lang][modeKey];
}

function applyTheme(theme) {
  rootBody.dataset.theme = theme;
  localStorage.setItem("theme", theme);
  updateThemeLabel(theme, localStorage.getItem("lang") || "es");
}

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("menu_visible");
  const visible = navMenu.classList.contains("menu_visible");
  iconOpen.style.display = visible ? "none" : "inline";
  iconClose.style.display = visible ? "inline" : "none";
});

themeToggle.addEventListener("click", () => {
  const nextTheme = rootBody.dataset.theme === "dark" ? "light" : "dark";
  applyTheme(nextTheme);
});

langToggle.addEventListener("click", () => {
  const nextLang = (localStorage.getItem("lang") || "es") === "es" ? "en" : "es";
  applyLanguage(nextLang);
});

copyright.textContent = `© ${new Date().getFullYear()} Jesús David Cárdenas`;
applyTheme(savedTheme);
applyLanguage(savedLang);

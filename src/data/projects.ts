export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Job Application Tracker',
    description: 'A full-stack Oracle APEX application for tracking job applications, managing interview stages, monitoring application history, and visualising applications through an interactive workflow pipeline. Built using Oracle APEX, PL/SQL packages, triggers, forms, cards, and interactive reports.',
    imageUrl: 'https://res.cloudinary.com/dexuebsgh/image/upload/v1779993683/APEX%20apps/pipeline_view_gzxcko.png',
    technologies: ['Oracle APEX', 'PL/SQL', 'Oracle SQL', 'Oracle Database', 'Interactive Reports', 'Cards Regions', 'Database Triggers'],
    liveUrl: 'https://gca2c3439af01cb-myappdb.adb.uk-london-1.oraclecloudapps.com/ords/r/myapp_ws/job-application-tracker/home',
    githubUrl: 'https://github.com/Oseij96/Job-Application-Tracker',
  },

  {
    id: '2',
    title: 'Employee Management System',
    description: 'An Oracle APEX employee management application designed to manage employee records, departments, and internal company data through responsive forms, reports, validations, and database-driven workflows.',
    imageUrl: 'https://res.cloudinary.com/dexuebsgh/image/upload/v1779993635/APEX%20apps/landing-page_e8v6yv.png',
    technologies: ['Oracle APEX', 'PL/SQL', 'Oracle SQL', 'Interactive Reports', 'Forms', 'Oracle Database'],
    liveUrl: 'https://gca2c3439af01cb-myappdb.adb.uk-london-1.oraclecloudapps.com/ords/r/myapp_ws/employee-management-app/home?session=112823407182981',
    githubUrl: 'https://github.com/Oseij96/Employee-Management-App',
  },

  {
    id: '3',
    title: 'YelpCamp Website',
    description: 'YelpCamp is a full-stack campground review platform where users can create, review, and manage campgrounds with authentication, image uploads, maps, and cloud storage integration.',
    imageUrl: 'https://res.cloudinary.com/dexuebsgh/image/upload/v1748772533/Portfolio/bdmd9ork1cfog40qdafl.png',
    technologies: ['Express.js', 'Node.js', 'MongoDB', 'Bootstrap', 'EJS', 'Cloudinary', 'Passport.js'],
    liveUrl: 'https://campconnect.onrender.com/',
    githubUrl: 'https://github.com/Oseij96/YelpCamp',
  },

  {
    id: '4',
    title: 'Recipe Explorer App',
    description: 'A modern React and TypeScript recipe search application that allows users to search meals by ingredient or name using TheMealDB API with smooth animations and responsive UI.',
    imageUrl: 'https://res.cloudinary.com/dexuebsgh/image/upload/v1748769091/Portfolio/ufmh2faf1wlu6q8mtcub.png',
    technologies: ['React', 'TypeScript', 'TheMealDB API', 'Framer Motion'],
    liveUrl: 'https://recipeexplorerapp.netlify.app/',
    githubUrl: 'https://github.com/Oseij96/Recipe-Explorer-App',
  },

  {
    id: '5',
    title: 'Quiz App',
    description: 'A Flask-based quiz application featuring dynamic question handling, score tracking, and responsive frontend design.',
    imageUrl: 'https://res.cloudinary.com/dexuebsgh/image/upload/v1748184086/Portfolio/hiroqeuavdmm4obt9ias.png',
    technologies: ['Python', 'Flask', 'HTML', 'CSS', 'JavaScript', 'Jinja2'],
    liveUrl: 'https://quiz-5y4e.onrender.com/',
    githubUrl: 'https://github.com/Oseij96/quiz',
  },

  {
    id: '6',
    title: 'To-Do List',
    description: 'A task management application built with React and Material UI featuring local persistence, responsive design, and intuitive task tracking.',
    imageUrl: 'https://res.cloudinary.com/dexuebsgh/image/upload/v1748182897/Portfolio/xpzqpdyhwljpxefqfepz.png',
    technologies: ['React.js', 'Material-UI', 'Vite', 'Dexie', 'SWR'],
    liveUrl: 'https://oseij96.github.io/Todo-List/',
    githubUrl: 'https://github.com/Oseij96/Todo-List',
  },

  {
    id: '7',
    title: 'CakingWithKayLdn',
    description: "A custom website built for my niece's cake business showcasing cakes, brownies, and cupcakes through a responsive and visually engaging frontend design.",
    imageUrl: 'https://res.cloudinary.com/dexuebsgh/image/upload/v1748772606/Portfolio/viwjywsx7dnaiylalynz.png',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    liveUrl: 'https://cakingwithkayldn.netlify.app/',
    githubUrl: 'https://github.com/Oseij96/CakingWithKayLdn',
  },

  {
    id: '8',
    title: 'Join Us',
    description: 'An archived Node.js and Express project that collected email signups and stored them in a MySQL database using EJS templating.',
    imageUrl: 'https://images.unsplash.com/photo-1499346030926-9a72daac6c63?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    technologies: ['Node.js', 'Express.js', 'MySQL', 'EJS', 'Bootstrap'],
    githubUrl: 'https://github.com/Oseij96/join_us',
  },
];

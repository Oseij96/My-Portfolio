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
    title: 'YelpCamp Website',
    description: 'YelpCamp is a web application that allows users to discover and share campgrounds from around the world. Users can sign up, log in, and create their own campgrounds, complete with descriptions and images.',
    imageUrl: 'https://res.cloudinary.com/dexuebsgh/image/upload/v1748772533/Portfolio/bdmd9ork1cfog40qdafl.png',
    technologies: ['Express.js', 'Node.js', 'MongoDB', 'Bootstrap', 'EJS', 'CSS', 'JavaScript', 'mongoose', 'helmet', 'crypto', 'express-session', 'method_override', 'cloudinary', 'geocoder', 'connect-flash', 'passport', 'passport-local'],
    liveUrl: 'https://campconnect.onrender.com/',
    githubUrl: 'https://github.com/Oseij96/YelpCamp',
  },
  {
    id: '2',
    title: 'CakingWithKayLdn',
    description: "CakingWithKayLdn is a website I made for my 14 year old niece's cake business. It showcases a delightful collection of homemade cakes, brownies, and cupcakes. It aims to bring joy and sweetness to every occasion with its delectable treats that are made with love and passion for baking.",
    imageUrl: 'https://res.cloudinary.com/dexuebsgh/image/upload/v1748772606/Portfolio/viwjywsx7dnaiylalynz.png',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    liveUrl: 'https://cakingwithkayldn.netlify.app/',
    githubUrl: 'https://github.com/Oseij96/CakingWithKayLdn',
  },
  {
    id: '3',
    title: 'To-Do List',
    description: 'The Todo List App is a simple and intuitive task management application built with React and Material-UI. It allows users to organize their tasks, track progress, and stay on top of their to-do lists with ease.',
    imageUrl: 'https://res.cloudinary.com/dexuebsgh/image/upload/v1748182897/Portfolio/xpzqpdyhwljpxefqfepz.png',
    technologies: ['React.js', 'Material-UI', 'Vite', 'dexie', 'SWR', '@fontsource/roboto', '@mui/icons-material', '@emotion/react'],
    liveUrl: 'https://oseij96.github.io/Todo-List/',
    githubUrl: 'https://github.com/Oseij96/Todo-List',
  },
  {
    id: '4',
    title: 'Quiz App',
    description: 'A simple web-based quiz game built with Flask and deployed on Render.',
    imageUrl: 'https://res.cloudinary.com/dexuebsgh/image/upload/v1748184086/Portfolio/hiroqeuavdmm4obt9ias.png',
    technologies: ['Python', 'Flask', 'HTML', 'CSS', 'JavaScript', 'Jinja2'],
    liveUrl: 'https://quiz-5y4e.onrender.com/',
    githubUrl: 'https://github.com/Oseij96/quiz',
  },
  {
    id: '5',
    title: 'Join Us',
    description: 'A simple Node.js + Express web app that collects email signups and displays the total number of users stored in a MySQL database.',
    imageUrl: 'https://res.cloudinary.com/dexuebsgh/image/upload/v1748625688/Portfolio/e42dmg0j4o9zyk71xtoj.png',
    technologies: ['HTML', 'JavaScript', 'CSS', 'MySql', 'Express.js', 'Node.js', 'Bootstrap', 'Cloudinary', 'EJS'],
    liveUrl: 'https://join-us-nm6s.onrender.com/',
    githubUrl: 'https://github.com/Oseij96/join_us',
  },
  {
    id: '6',
    title: 'Recipe Explorer App',
    description: 'Recipe Explorer is a sleek and responsive web application that allows users to search for recipes by name or ingredient. Leveraging a public recipe API, it fetches and displays detailed information, including ingredients, cooking instructions, and images',
    imageUrl: 'https://res.cloudinary.com/dexuebsgh/image/upload/v1748769091/Portfolio/ufmh2faf1wlu6q8mtcub.png',
    technologies: ['React', 'TypeScript', 'TheMealDB API', 'Motion Framer'],
    liveUrl: 'https://recipeexplorerapp.netlify.app/',
    githubUrl: 'https://github.com/Oseij96/Recipe-Explorer-App',
  },
];
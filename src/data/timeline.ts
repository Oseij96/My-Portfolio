export interface TimelineEvent {
  id: string;
  title: string;
  date: string;
  description: string;
}

export const timelineEvents: TimelineEvent[] = [
  {
    id: '1',
    title: 'First Line of Code',
    date: 'September 2022',
    description: "I started my web development journey through Colt Steele's Web Development Bootcamp. This transformative experience came at a crucial point in my life, as I had just completed university and was uncertain about my career path. The bootcamp introduced me to the world of HTML, and it was like discovering a new language that allowed me to bring ideas to life on the web. I quickly realized that web development aligned perfectly with my creative and problem-solving skills, providing a fresh perspective and a clear direction for my future.",
  },
  {
    id: '2',
    title: 'CSS & Bootstrap',
    date: 'October 2022',
    description: "As I progressed through Colt Steele's Web Development Bootcamp, I delved into the world of CSS, learning how to style HTML elements and create visually appealing layouts. I began to understand the importance of responsive design, implementing media queries to ensure seamless experiences across different screen sizes. Additionally, I explored the power of Bootstrap, using its pre-built components and utilities to streamline development and create professional-looking websites efficiently. During this period, I took on a personal project and built a stunning website for my cousin's van business, incorporating custom CSS and Bootstrap elements to showcase his services attractively.Through Colt Steele's Web Development Bootcamp, I learnt how to use CSS how to link your stylesheets to your HTML markup, how to implement classes and ID's in your HTML markup that you can then use in your stylesheets to change the appearance or behaviours of specified elements and how to make changes for different screen sizes. I also learnt how to use bootstrap have similar effects to your stylesheets and how to implement them both in your work. I use this knowledge to build a website in my spare time for my cousins van business.",
  },
  {
    id: '3',
    title: 'JavaScript',
    date: 'November 2022',
    description: 'JavaScript became pivotal in my web development journey, it helped me to add interactivity and dynamic functionality to web projects. I immersed myself in learning the core concepts of JavaScript, including variables, data types, functions, and control flow, enabling me to manipulate data and create logic-driven applications. Working with the Document Object Model (DOM) allowed me to change HTML elements dynamically, which in turn helped in the creation of interactive and responsive user interfaces. I honed my skills in handling events, asynchronously fetching data with APIs, and implementing client-side validation, further enriching the user experience.',
  },
  {
    id: '4',
    title: 'Backend Development',
    date: 'April 2023',
    description: 'For the backend development of YelpCamp, I learnt about creating server- side applications, handling HTTP requests, and building APIs to interact with databases, I honed my skills in various technologies and libraries, implementing them to create a powerful and secure application.During the development process, I gained expertise in the following key backend technologies: Express.js, MongoDB, Mongoose, Passport.js, Express - session, Connect - mongo, EJS, Mapbox SDK, Cloudinary, Joi, Helmet, Multer, Sanitize - html.Through implementing these technologies and libraries in YelpCamp, I successfully built a feature - rich and user - friendly website that allows users to explore and interact with various campgrounds, create accounts, and share their camping experiences with others.',
  },
  {
    id: '5',
    title: 'YelpCamp, The First Project',
    date: 'June 2023',
    description: 'YelpCamp is a web application that allows users to discover and share campgrounds from around the world. Users can sign up, log in, and create their own campgrounds, complete with descriptions and images. The app provides basic functionalities for managing campgrounds, comments, and user accounts, ensuring a seamless and enjoyable user experience.',
  },
  {
    id: '6',
    title: 'The Second Project, CakingWithKayLdn',
    date: 'July 2023',
    description: "CakingWithKayLdn is a website I made for my 14 year old niece's cake business. It showcases a delightful collection of homemade cakes, brownies, and cupcakes. It aims to bring joy and sweetness to every occasion with its delectable treats that are made with love and passion for baking.",
  },
  {
    id: '7',
    title: 'Started Learning TypeScript',
    date: 'May 2023',
    description: 'Began incorporating TypeScript into my projects to enhance code quality and developer experience. The static typing system helped catch errors early and improved the maintainability of my codebases. This was a significant step up in my development practices.',
  },
  {
    id: '8',
    title: 'Learned React Framework',
    date: 'August 2023',
    description: 'Dived deep into React.js, learning about components, state management, hooks, and the virtual DOM. Created multiple single-page applications and began to understand the power of component-based architecture. This opened up new possibilities for building interactive UIs.',
  },
  {
    id: '9',
    title: 'Incorporating React.js For To-Do List Web App',
    date: 'December 2023',
    description: 'The Todo List App is a simple and intuitive task management application built with React and Material-UI. It allows users to organize their tasks, track progress, and stay on top of their to-do lists with ease.',
  },
  {
    id: '10',
    title: 'Started Learning MySQL',
    date: 'March 2025',
    description: 'I continued my learning process and wanted to learn how to use a popular database. I explored MySQL to understand relational data structures, practiced writing queries, joins, and CRUD operations, and integrated it with backend applications to build full-stack functionality.',
  },
  {
    id: '11',
    title: 'Began Learning Python',
    date: 'May 2025',
    description: 'After gaining confidence in web development and databases, I began learning Python to strengthen my programming fundamentals. I explored its syntax, built small applications, and started using it for backend logic, automation, and data manipulation. Python’s simplicity and versatility have made it an exciting addition to my developer toolkit.',
  },
  {
    id: '12',
    title: 'Present Day',
    date: 'Today',
    description: 'Continuing to expand my knowledge and skills in web development while working on personal and client projects. Focused on staying current with emerging technologies and best practices. Excited about future opportunities and challenges in this ever-evolving field.',
  },
];
export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];



export const myProjects = [
  
  {
    title: 'OmniTutorAI - AI-Powered Tutoring Web application',
    desc: 'OmnitutorAI is a web platform where users create and interact with AI voice-based learning companions customized by subject, voice, and style, enabling real-time educational conversations, session tracking, and a personalized learning experience.Users can build companions by choosing a name, subject, voice, style, and session length, then engage in live voice chats where the AI teaches specific topics, while browsing, filtering, bookmarking, and revisiting past sessions for a tailored learning journey',
    subdesc:
      'Built with Nexjs tailwindcss Ts and Clerk',
    href: 'https://omnitutorai.aliarthur.com',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/image1.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
    ],
  },
  {
    title: 'Ronald E. McNair Post‑Baccalaureate Achievement Program',
    desc: 'Designed and developed a responsive webpage for the Ronald E. McNair Post-Baccalaureate Achievement Program at Gannon University, improving user engagement and access to program resources through modern UI/UX design, clear content architecture, and mobile optimization.',
    subdesc:
      'Built with Next.js 14, tailwindcss and threejs  ',
    href: 'https://mcnair.aliarthur.com/',
    texture: '/textures/project/project5.mp4',
    logo: '/assets/project-logo5.png',
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
    ],
  },
  {
    title: 'FilmFinder – Movie Discovery Platform',
    desc: 'FilmFinder is a React-based web app that helps users discover movies by searching for titles, browsing genres, and viewing detailed film information pulled from The Movie Database (TMDb) API',
    subdesc:
      'Users can explore trending films, filter movies by genre, search for specific titles, and view posters, ratings, synopses, and release dates in a responsive interface designed for a smooth movie-browsing experience',
    href: 'https://github.com/Savant35/filmfinder',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/image4.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'Python',
        path: '/assets/python.svg',
      },
     
    ],
  },
  {
    title: 'Portfolio – Personal Developer Showcase',
    desc: 'A personal portfolio website showcasing projects, research,skills, and experiences. Built with a focus on clean design and responsive layouts to provide an engaging and professional online presence.',
    subdesc:
      'The site features smooth scrolling navigation, sections for an introduction, about info, project galleries with live previews and links, and a contact form, all styled with custom CSS for a clean and modern look.',
    href: 'https://github.com/Savant35/portfolio',
    texture: '/textures/project/project4.mp4',
    logo: '/assets/image2.png',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      {
        id: 1,
        name: 'Javascript',
        path: '/assets/html.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/js.gif',
      },
      
    ],
  },
 
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 2.65 : isMobile ? 4.06 : 6.065,
    deskPosition: isMobile ? [0.5, -1.5, 0] : [2.25, -3.5, 2],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [2, 5, 2] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-4, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-14, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Mcnair',
    pos: 'Internship Web Developer',
    duration: '2024 - present',
    title: "Designed and implemented the McNair Program webpage, utilizing HTML, CSS, and JavaScript for rapid prototyping and front-end development. Developed and integrated full-stack functionality using Next.js and Supabase for efficient web performance and data management.",
    icon: '/assets/project-logo2.png',
    animation: 'victory',
  },
  {
    id: 3,
    name: 'McNair',
    pos: 'Research Intern',
    duration: '2024 - 2025',
    title: "Researched and developed an AI tutoring system integrating a real-time facial emotion detection model using TensorFlow and MediaPipe with a conversational AI capable of adjusting dialogue based on user emotions. Aimed to enhance human-computer interaction by enabling emotionally adaptive conversations, supporting more engaging and personalized educational experiences.",
    icon: '/assets/project-logo2.png',
    animation: 'salute',
  },
  {
    id: 2,
    name: 'Student Support Services',
    pos: 'Web Developer',
    duration: '2023 - 2024',
    title: "Tutored students in computer science concepts, specializing in Java programming, and developed a homepage prototype leveraging HTML, CSS, and JavaScript to enhance user experience and interface design.",
    icon: '/assets/tutor.png',
    animation: 'clapping',
  },
  
];
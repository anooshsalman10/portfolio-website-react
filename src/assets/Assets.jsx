import { FaLightbulb, FaPaintBrush, FaCode, FaServer, FaMobileAlt, FaTools, FaDatabase, FaCloud, FaPalette, FaReact, FaNodeJs, FaStripe } from "react-icons/fa";

import logo1 from '../assets/logo1.png';
import HotelBooking from '../assets/HotelBooking.png';
import TravelWebsite from '../assets/TravelWebsite.png';
import WeatherAppReact from '../assets/WeatherAppReact.png';
import NotesAppReact from '../assets/NotesAppReact.png';
import TodoAppReact from '../assets/TodoAppReact.png';
import ContactApp from '../assets/ContactApp.png';
import TheBeautySpot from '../assets/TheBeautySpot.png';
import TheBlazeGym from '../assets/TheBlazeGym.png';
import SweetCrumbs from '../assets/SweetCrumbs.png';
import Profile from '../assets/Profile.jpg';
import HomeImg from '../assets/HomeImg.png';


export const Assets = {
    logo1,
    HotelBooking,
    TravelWebsite,
    WeatherAppReact,
    NotesAppReact,
    TodoAppReact,
    ContactApp,
    TheBeautySpot,
    TheBlazeGym,
    SweetCrumbs,
    Profile,
    HomeImg,
}

export const aboutInfo = [
    {
        icon: FaLightbulb,
        title: 'Innovative',
        description: 'Driven by curiosity and creativity to build innovative solutions that solve real-world problems.',
        color: 'text-purple',
    },

    {
        icon: FaPaintBrush,
        title: 'Design Oriented',
        description: 'Focused on creating engaging user experiences through clean, modern, and intuitive design.',
        color: 'text-pink',
    },

    {
        icon: FaCode,
        title: 'Clean Code',
        description: 'Writing reliable, maintainable, and high-quality code with an emphasis on performance and scalability.',
        color: 'text-purple',
    },
];



export const skills = [
    {
        title: 'Frontend Development',
        icon: FaReact,
        description: 'Crafting responsive, dynamic, and user-friendly web interfaces with modern frontend technologies.',
        tags: ['React', 'React Router', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind'],
    },

    {
        title: 'React Ecosystem',
        icon: FaCode,
        description: 'Building dynamic, stateful applications using core React patterns and hooks.',
        tags: ['useState', 'useEffect', 'useContext', 'Context API', 'Component Architecture'],
    },

    {
        title: 'Database & Backend',
        icon: FaDatabase,
        description: 'Integrating authentication and real-time data storage into frontend applications.',
        tags: ['Firebase Auth', 'Firestore', 'REST APIs'],
    },

    {
        title: 'Tools & Platforms',
        icon: FaTools,
        description: 'Using industry-standard tools to manage version control, collaboration, and deployment workflows.',
        tags: ['Git', 'GitHub', 'VS Code', 'Vercel', 'Netlify'],
    },

    {
        title: 'UI/UX & Design',
        icon: FaPalette,
        description: 'Creating visually engaging and intuitive digital experiences with a focus on usability and accessibility.',
        tags: ['Figma', 'Canva', 'Responsive Design'],
    },

    {
        title: 'Other',
        icon: FaTools,
        description: 'Additional technical foundations from academic and project work.',
        tags: ['Python', 'Machine Learning (academic)'],
    },
];

export const projects = [
    {
        id: 0,
        title: 'E-commerce Website',
        description: 'Threadify is a responsive React e-commerce app built with Tailwind CSS, Firebase, and Firestore. Features include user authentication (email/password and Google Sign-In), protected routes, real-time cart persistence, order placement with order history, and advanced product filtering and sorting. Deployed on Vercel.',
        image: HomeImg,
        tech: ['React', 'JavaScript', 'Tailwind', 'Firebase auth', 'React-Router', 'Firestore'],
        github: "https://github.com/anooshsalman10/Threadify-Ecommerce-React-Website",
        webapp: "https://threadify-ecommerce-react-website.vercel.app",
    },

    {
        id: 1,
        title: 'Hotel-Booking-App-React',
        description: 'WanderNest is a modern hotel booking web application built with React that allows users to browse hotels, view room details, and make reservations with a smooth and responsive UI. Features dynamic routing, state management, authentication and real-time data handling to deliver a seamless booking experience.',
        image: HotelBooking,
        tech: ['React', 'JavaScript', 'Tailwind', 'Firebase', 'React-Router', 'Firestore'],
        github: "https://github.com/anooshsalman10/hotel-booking-app-react",
        webapp: "https://hotel-booking-app-react.vercel.app/",
    },

    {
        id: 2,
        title: 'Travel-Website-React',
        description: 'GoNomad modern travel destination website built with React and Tailwind CSS featuring a responsive design, interactive components, and a clean UI. The project showcases popular destinations with an image gallery and smooth user experience across devices. Deployed on Vercel.',
        image: TravelWebsite,
        tech: ['React', 'JavaScript', 'Tailwind', 'LightGallery', 'React-Router', 'React-Icons'],
        github: "https://github.com/anooshsalman10/travel-website-react",
        webapp: "https://travel-website-react1.vercel.app/",
    },

    {
        id: 3,
        title: 'Weather-app-react',
        description: 'Developed a responsive weather application using React.js with live API integration, enabling real-time weather data retrieval based on city search. Implemented dynamic weather icons, conditional rendering, and a fully responsive UI to ensure a seamless user experience across devices',
        image: WeatherAppReact,
        tech: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Weather API', 'Vite'],
        github: "https://github.com/anooshsalman10/weather-app-react",
        webapp: "https://weather-app-react8400.netlify.app/",
    },

    {
        id: 4,
        title: 'Notes-App-React',
        description: 'Developed Notes App using React.js with full CRUD functionality, allowing users to create, edit, and delete notes. Implemented persistent client-side storage using LocalStorage to ensure data retention across sessions. Leveraged React Hooks for state management, demonstrating strong understanding of component-based architecture and interactive frontend development.',
        image: NotesAppReact,
        tech: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Vite'],
        github: "https://github.com/anooshsalman10/notes-app-react",
        webapp: "https://notes-managing-app-react.netlify.app/",
    },

    {
        id: 5,
        title: 'Todo-App-React',
        description: 'A responsive and interactive Todo List Application built with React.js, designed to demonstrate core frontend development concepts including state management, event handling, conditional rendering, and dynamic list manipulation. The app allows users to efficiently add, complete, and delete tasks with a smooth and intuitive user experience.',
        image: TodoAppReact,
        tech: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Vite'],
        github: "https://github.com/anooshsalman10/todo-app-react",
        webapp: "https://todo-app-react-taskmanager.netlify.app/",
    },

    {
        id: 6,
        title: 'Contact-App',
        description: 'A responsive Contact Management Application built with JavaScript and localStorage, allowing users to add, edit, and delete contacts with real-time updates. The app ensures persistent data storage directly in the browser without a backend, making it a practical demonstration of DOM manipulation, event handling, and state management in vanilla JavaScript.',
        image: ContactApp,
        tech: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Vite'],
        github: "https://github.com/anooshsalman10/Contact_app",
        webapp: "https://contact-app-123.netlify.app/",
    },

    {
        id: 7,
        title: 'The Beauty Spot',
        description: 'The Beauty Spot is a fully responsive Beauty Parlor website using HTML5 and Bootstrap as a foundational frontend project. Focused on modern, elegant UI design and responsive layout principles to enhance user experience across devices. This project was built to strengthen core frontend development skills, including layout structuring, component styling, and responsive design implementation.',
        image: TheBeautySpot,
        tech: ['HTML5', 'Bootstrap', 'CSS3', 'Responsive Design'],
        github: "https://github.com/anooshsalman10/TheBeautySpot",
        webapp: "https://thebeautyspotwebsite.netlify.app/",
    },

    {
        id: 8,
        title: 'The Blaze Gym',
        description: 'Customized and enhanced the Blaze Gym website as part of early frontend development training. Leveraged Bootstrap to redesign the user interface, improve layout structure, and create a responsive experience across different screen sizes. This project helped strengthen my understanding of HTML, CSS, Bootstrap components, and responsive web design principles.',
        image: TheBlazeGym,
        tech: ['HTML5', 'CSS3', 'Bootstrap 5', 'Responsive Design'],
        github: "https://github.com/anooshsalman10/BlazeGym",
        webapp: "https://blazegymwebsite.netlify.app/",
    },

    {
        id: 9,
        title: 'SweetCrumbs Bakery',
        description: 'Customized and enhanced the Sweet Crumbs bakery website template as one of my first frontend development projects. Used HTML5, CSS3, and Bootstrap to modify the layout, refine the visual design, and improve responsiveness across different devices. This project helped build a strong foundation in frontend development, responsive web design, and Bootstrap-based UI customization.',
        image: SweetCrumbs,
        tech: ['HTML5', 'CSS3', 'Bootstrap 5', 'Responsive Design'],
        github: "https://github.com/anooshsalman10/SweetCrumbsBakeryWebsite",
        webapp: "https://sweetcrumbsbakerywebsite.netlify.app/",
    },


];

export const workData = [
    {
        role: 'Frontend Developer (Self-Directed)',
        company: 'Independent Projects',
        duration: 'Mar 2025 - Present',
        description: 'Transitioned into frontend development, building production-style React applications including Threadify (a full e-commerce platform with Context API cart management) and a hotel booking app with Firebase Authentication and Firestore integration. Currently seeking a frontend React internship or junior role.',
        color: 'purple',
    },

    {
        role: 'HR Intern (Remote)',
        company: 'HiTechMain, Jakarta',
        duration: 'Feb 2025 - Feb 2026',
        description: 'Assisted in managing and updating the company\u2019s recruitment portal, gaining practical exposure to web-based tools and digital workflows in a remote, international setting. Collaborated with cross-functional teams via Google Meet and Zoom.',
        color: 'purple',
    },

    {
        role: 'Computer Science Teacher',
        company: 'Lahore Grammar School',
        duration: 'Aug 2022 - Dec 2024',
        description: 'Taught Python, HTML, CSS, and JavaScript (ES6+) to 300+ students through hands-on, project-based lessons. Built strong technical communication and systematic debugging skills by helping students troubleshoot code \u2014 directly applicable to professional development workflows.',
        color: 'purple',
    },

    {
        role: 'Master of Science in Software Engineering',
        company: 'University of Lahore',
        duration: 'Sept 2020 - May 2023',
        description: 'Thesis: "Identification of Kidney Disease using Machine Learning and Deep Learning" \u2014 applied Python and ML techniques to a real-world medical dataset.',
        color: 'purple',
    },

    {
        role: 'Bachelor of Science in Computer Science',
        company: 'Lahore College for Women University',
        duration: 'Oct 2015 - Oct 2019',
        description: 'Final Year Project focused on game development; completed core coursework in data structures, algorithms, object-oriented programming, and software engineering.',
        color: 'purple',
    },
];
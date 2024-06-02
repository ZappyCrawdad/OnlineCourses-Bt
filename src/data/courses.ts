interface Course {
  id: number;
  title: string;
  description: string;
  image: string;
  video: string; // Añadir la propiedad de video
}

const courses: Course[] = [
  {
    id: 1,
    title: "Curso de React",
    description: "Aprende los fundamentos de React y cómo construir aplicaciones web con esta poderosa biblioteca.",
    image: "https://img.youtube.com/vi/wGxDfSWC4Ww/hqdefault.jpg",
    video: "https://www.youtube.com/embed/wGxDfSWC4Ww" // URL del video de YouTube
  },
  {
    id: 2,
    title: "Curso de Node.js",
    description: "Domina el desarrollo del lado del servidor con Node.js y construye aplicaciones escalables.",
    image: "https://img.youtube.com/vi/yB4n_K7dZV8/hqdefault.jpg",
    video: "https://www.youtube.com/embed/yB4n_K7dZV8" // URL del video de YouTube
  },
  {
    id: 3,
    title: "Curso de Arte",
    description: "Ilustra nuevas creaciones con la libertad de tus ideas con tu forma de expresar.",
    image: "https://img.youtube.com/vi/lLWEXRAnQd0/hqdefault.jpg",
    //image: "https://via.placeholder.com/250x150",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ" // URL del video de YouTube
  },
  // Agrega más cursos según sea necesario
];

export default courses;

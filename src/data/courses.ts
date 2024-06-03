interface Course {
  id: number;
  title: string;
  description: string;
  image: string;
  video: string; // Añadir la propiedad de video
  additionalInfo: string; // Añadir propiedad de información adicional
}

const courses: Course[] = [
  {
    id: 1,
    title: "Curso de React",
    description: "Aprende los fundamentos de React y cómo construir aplicaciones web con esta poderosa biblioteca.",
    image: "https://img.youtube.com/vi/wGxDfSWC4Ww/hqdefault.jpg",
    video: "https://www.youtube.com/embed/wGxDfSWC4Ww", // URL del video de YouTube
    additionalInfo: "Este curso te enseñará los conceptos básicos y avanzados de React. Aprenderás a desarrollar aplicaciones web de manera eficiente y profesional. Duración del curso: 16 minutos. Requisitos previos: Ninguno, aquí cnoceras todos lo basico."
  },

  {
    id: 2,
    title: "Curso de Node.js",
    description: "Domina el desarrollo del lado del servidor con Node.js y construye aplicaciones escalables.",
    image: "https://img.youtube.com/vi/yB4n_K7dZV8/hqdefault.jpg",
    video: "https://www.youtube.com/embed/yB4n_K7dZV8", // URL del video de YouTube
    additionalInfo: "Este curso te enseñará los conceptos básicos y avanzados de NodeJS. conocerás realmente lo que es, cómo funciona, haremos ejercicios interactivos, veremos su sistema de módulos desde cero y muchas cosas más. Duración del curso: 2 horas. Requisitos previos: Ninguno, aquí cnoceras todos lo basico."
  },

  {
    id: 3,
    title: "Curso de Arte",
    description: "Ilustra nuevas creaciones con la libertad de tus ideas con tu forma de expresar.",
    image: "https://img.youtube.com/vi/lLWEXRAnQd0/hqdefault.jpg",
    //image: "https://via.placeholder.com/250x150",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ", // URL del video de YouTube
    additionalInfo: "Este curso te enseñará los conceptos básicos de composición. Aprenderás a ilustrar y planificar tus ideas. Duración del curso: 15 minutos. Requisitos previos: Conocimientos básicos de programación."
  },

  // Agrega más cursos según sea necesario
];

export default courses;

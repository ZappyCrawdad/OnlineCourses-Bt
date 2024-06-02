interface Course {
  id: number;
  title: string;
  description: string;
  image: string;
}

const courses: Course[] = [
  {
    id: 1,
    title: "Curso de React",
    description: "Aprende los fundamentos de React y cómo construir aplicaciones web con esta poderosa biblioteca.",
    image: "https://via.placeholder.com/100x250"
  },
  {
    id: 2,
    title: "Curso de Node.js",
    description: "Domina el desarrollo del lado del servidor con Node.js y construye aplicaciones escalables.",
    image: "https://via.placeholder.com/100x250"
  },
  {
    id: 3,
    title: "Curso de Arte",
    description: "Ilustra nuevas creaciones con la libertad de tus ideas con tu forma de expresar.",
    image: "https://via.placeholder.com/100x250"
  },
  // Agrega más cursos según sea necesario
];

export default courses;

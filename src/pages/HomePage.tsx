import React from 'react';
import CourseList from '../components/CourseList';
import courses from '../data/courses';
import image from '/img/Peralta-cursos-bot1.png'; // Ajusta la ruta según la ubicación real de tu imagen

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <h1>Lista de Cursos</h1>
      <img src={image} alt="Imagen decorativa" className="decorative-image" />
      <CourseList courses={courses} emptyHeading="No hay cursos disponibles" />
    </div>
  );
};

export default HomePage;

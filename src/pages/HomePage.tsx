import React from 'react';
import CourseList from '../components/CourseList';
import courses from '../data/courses';

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <h1>Lista de Cursos</h1>
      <CourseList courses={courses} emptyHeading="No hay cursos disponibles" />
    </div>
  );
};

export default HomePage;

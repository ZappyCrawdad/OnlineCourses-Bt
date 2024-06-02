import React from 'react';
import CourseCard from './CourseCard';

interface CourseListProps {
  courses: Array<{
    id: number;
    title: string;
    description: string;
    image: string;
  }>;
  emptyHeading: string;
}

const CourseList: React.FC<CourseListProps> = ({ courses, emptyHeading }) => {
  const count = courses.length;
  let heading = emptyHeading;
  if (count > 0) {
    const noun = count > 1 ? 'Cursos' : 'Curso';
    heading = `${count} ${noun}`;
  }

  return (
    <section className="course-list">
      <h2>{heading}</h2>
      {courses.map(course => (
        <CourseCard key={course.id} course={course} />
      ))}
    </section>
  );
};

export default CourseList;

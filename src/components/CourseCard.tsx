import React from 'react';

interface CourseCardProps {
  course: {
    id: number;
    title: string;
    description: string;
    image: string;
  };
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <div className="course-card">
      <img src={course.image} alt={course.title} className="course-image" />
      <div className="course-info">
        <h3>{course.title}</h3>
        <p>{course.description}</p>
      </div>
    </div>
  );
};

export default CourseCard;

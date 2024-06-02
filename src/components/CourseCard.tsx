import React from 'react';
import { Link } from 'react-router-dom';

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
    <Link to={`/course/${course.id}`} className="course-card-link">
      <div className="course-card">
        <img src={course.image} alt={course.title} className="course-image" />
        <div className="course-info">
          <h3>{course.title}</h3>
          <p>{course.description}</p>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;

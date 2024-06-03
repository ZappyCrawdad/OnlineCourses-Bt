import React from 'react';
import { useParams } from 'react-router-dom';
import courses from '../data/courses';

const CourseDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const courseId = Number(id);
  const course = courses.find(course => course.id === courseId);

  if (!course) {
    return <div>Curso no encontrado</div>;
  }

  return (
    <div className="course-detail-container">
      <div className="main-content">
        <div className="video-container">
          <iframe
            width="650"
            height="400"
            src={course.video}
            title={course.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="course-text">
          <h2>{course.title}</h2>
          <p>{course.description}</p>
        </div>
      </div>
      <div className="course-additional-text">
        <p>{course.additionalInfo}</p>
      </div>
    </div>
  );
};

export default CourseDetailPage;

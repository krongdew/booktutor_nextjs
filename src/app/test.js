// src/app/tutor-profile/[tutorId].js
import React from 'react';
import { useRouter } from 'next/router';
import BookingCalendar from '../../components/BookingCalendar';

// Dummy data for teachers
const teachers = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Smith' },
];

const TutorProfile = () => {
  const router = useRouter();
  const { tutorId } = router.query;
  const teacherId = parseInt(tutorId);
  const teacher = teachers.find((t) => t.id === teacherId);

  if (!teacher) {
    return <div>Teacher not found</div>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Teacher Profile: {teacher.name}</h1>
      <BookingCalendar teachers={[teacher]} />
    </div>
  );
};

export default TutorProfile;

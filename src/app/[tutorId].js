// // src/app/tutor-profile/[tutorId].js
// import React from 'react';
// import { useRouter } from 'next/router';
// import BookingCalendar from '../../components/BookingCalendar';

// // Dummy data for teachers
// const teachers = [
//   { id: 1, name: 'John Doe' },
//   { id: 2, name: 'Jane Smith' },
// ];

// const TutorProfile = () => {
//   const router = useRouter();
//   const { tutorId } = router.query; // Ensure tutorId is in the query object
//   if (!tutorId) return null; // Return null or a loading indicator if tutorId is not available yet
  
//   const teacherId = parseInt(tutorId);
//   const teacher = teachers.find((t) => t.id === teacherId);

//   if (!teacher) {
//     return <div>Teacher not found</div>;
//   }

//   return (
//     <div>
//       <p>Tutor ID: {tutorId}</p> {/* แสดงค่า tutorId ที่ถูกส่งมาจาก URL */}
//       <h1 className="text-2xl font-bold mb-4">Teacher Profile: {teacher.name}</h1>
      
//       <BookingCalendar teachers={[teacher]} />
//     </div>
//   );
// };

// export default TutorProfile;

import React from 'react';
import { useRouter } from 'next/router';

export default function  tutorId () {
  const router = useRouter();
  const { tutorId } = router.query;

  // ตรวจสอบว่ามีค่าของ tutorId หรือไม่
  if (!tutorId) {
    return <div>No tutorId provided</div>;
  }

  return (
    <div>
      <h1>Tutor Profile Page</h1>
      <p>Tutor ID: {tutorId}</p>
    </div>
  );
};



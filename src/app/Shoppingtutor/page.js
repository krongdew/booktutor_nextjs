// // pages/ShoppingTutor.js
import React from 'react';
import Link from 'next/link';

// Dummy data for teachers
const teachers = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Smith' },
];

const ShoppingTutor = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Choose Your Tutor</h1>
      <div className="grid grid-cols-2 gap-4">
        {teachers.map((teacher) => (
          <div key={teacher.id} className="border p-4">
            <h2 className="text-xl font-bold">{teacher.name}</h2>
            <Link href={`/TutorProfile/${teacher.id}`} passHref>
              <div className="text-blue-600 hover:underline">View Profile</div>
            </Link>
             
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShoppingTutor;

// import React from 'react';
// import Link from 'next/link';

// const ShoppingTutor = () => {
//   return (
//     <div>
//       <h1>Shopping Tutor Page</h1>
//       <Link href="/TutorProfile/1">
//         {/* Link จะไปที่ tutorProfiles/1 */}
//         View Tutor Profile 1
//       </Link>
//       <Link href="/TutorProfile/2">
//         {/* Link จะไปที่ tutorProfiles/2 */}
//         View Tutor Profile 2
//       </Link>
//     </div>
//   );
// };

// export default ShoppingTutor;


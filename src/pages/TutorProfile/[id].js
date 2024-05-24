// src/pages/TutorProfile/[id].js

import { useRouter } from 'next/router';
import teachers from '../../data/teachers'; // เปลี่ยน path ให้ถูกต้อง
import BookingCalendar from '@/components/BookingCalendar';
import 'react-calendar/dist/Calendar.css';
import Navbar from '@/components/Navbar';
import "../../app/globals.css";

export default function TutorProfile({ teacher }) {
  const router = useRouter();
  const { id } = router.query;

  if (!teacher) {
    return <div>Teacher not found</div>;
  }

  return (
    <>
     <Navbar/>
    <div className="flex flex-col items-center justify-center min-h-screen">
     
    <br></br>
    <h1 className="text-4xl font-bold mb-4">Booking Page</h1>
    <h1 className="text-2xl font-bold mb-4">Teacher Profile: {teacher.name}</h1>
    <BookingCalendar teachers={[teacher]} />
  </div>
  </>
  );
}

export async function getStaticPaths() {
  const paths = teachers.map((teacher) => ({
    params: { id: `${teacher.id}` },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const teacher = teachers.find((t) => t.id === parseInt(params.id));
  return { props: { teacher } };
}

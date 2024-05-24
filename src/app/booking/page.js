'use client'
import React, {useState} from 'react';
import MyFullCalendar from '../../components/MyFullCalendar';

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'
import TimeSlots from '../../components/TimeSlots';


const events = [
  {
    id: '1',
    title: 'Event 1',
    start: new Date('2024-05-23T10:00:00'), // ใช้ new Date() หรือ ISO string ก็ได้
    end: new Date('2024-05-23T12:00:00'),
  },
  {
    id: '2',
    title: 'Event 2',
    start: new Date('2024-05-25T14:00:00'),
    end: new Date('2024-05-25T16:00:00'),
  },
];

// Dummy data for teachers
const teachers = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Smith' },
];

// Dummy data for teacher schedules
const teacherSchedules = {
  1: {
    '2024-05-01': ['09:00-10:00', '11:00-13:00', '14:00-15:00'],
    '2024-05-02': ['10:00-11:00', '13:00-14:00', '15:00-17:00'],
    '2024-05-03': ['09:00-10:00', '14:00-15:00'],
  },
  2: {
    '2024-05-01': ['10:00-12:00', '13:00-15:00', '16:00-18:00'],
    '2024-05-02': ['09:00-11:00', '13:00-15:00', '16:00-18:00'],
    '2024-05-03': ['11:00-13:00', '14:00-16:00'],
  },
};

// Dummy data for booked slots
const bookedSlots = {
  '2024-05-01': [
    { teacher: 1, slot: '09:00' },
    { teacher: 2, slot: '10:00' },
  ],
  '2024-05-02': [
    { teacher: 1, slot: '10:00' },
    { teacher: 2, slot: '14:00' },
  ],
};

export default function Booking() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTeacher, setSelectedTeacher] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleTeacherChange = (teacherId) => {
    setSelectedTeacher(teacherId);
  };
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <br></br>
      <h1 className="text-4xl font-bold mb-4">Booking Page</h1>
      {/* <MyFullCalendar events={events} /> */}
      <h1>My Booking App</h1>
  
      
      <h1>Book a Lesson</h1>
      <Calendar onChange={handleDateChange} 
      value={selectedDate} 
      className="border rounded-lg shadow-md" // ปรับสไตล์ปฏิทินด้วย Tailwind CSS
      tileClassName="hover:bg-blue-100 cursor-pointer" // ปรับสไตล์วันที่
      />
      <select onChange={(e) => handleTeacherChange(parseInt(e.target.value))}
       className="mt-4 px-4 py-2 border rounded-md shadow-sm">
        <option value="">Select a teacher</option>
        {teachers.map((teacher) => (
          <option key={teacher.id} value={teacher.id}>
            {teacher.name}
          </option>
        ))}
      </select>
      {selectedDate && selectedTeacher && (
        <TimeSlots
          date={selectedDate}
          teacher={selectedTeacher}
          schedule={teacherSchedules[selectedTeacher][selectedDate.toISOString().slice(0, 10)]}
          bookedSlots={bookedSlots[selectedDate.toISOString().slice(0, 10)] || []}
        />
      )}
      
      <br></br>
    </div>
  );
}

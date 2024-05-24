'use client'
// components/BookingCalendar.jsx
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import TimeSlots from './TimeSlots';



const BookingCalendar = ({ teachers }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTeacher] = useState(teachers[0].id); // เลือกครูคนแรกจากข้อมูลที่ส่งมา

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="flex">
      <div className="w-full max-w-md">
        <Calendar
          onChange={handleDateChange}
          value={selectedDate}
          className="border rounded-lg shadow-md"
          tileClassName="hover:bg-blue-100 cursor-pointer"
        />
      </div>
      <div className="ml-4">
        {selectedDate && (
          <div className="mt-4">
            <TimeSlots date={selectedDate} teacher={selectedTeacher} />
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingCalendar;
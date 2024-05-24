'use client'

import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const MyFullCalendar = ({ events }) => {
  const [view, setView] = useState('week'); // สร้าง state เพื่อเก็บค่ามุมมองปัจจุบัน

  const handleViewChange = (view) => {
    setView(view); // เมื่อปุ่มเปลี่ยนมุมมองถูกคลิก อัปเดต state ด้วยค่ามุมมองใหม่
  };

  return (
    <div>
      <h1>React Big Calendar</h1>
      <div>
        <button onClick={() => handleViewChange('month')}>Month</button>
        <button onClick={() => handleViewChange('week')}>Week</button>
        <button onClick={() => handleViewChange('day')}>Day</button>
        <button onClick={() => handleViewChange('agenda')}>Agenda</button>
      </div>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        views={['month', 'week', 'day', 'agenda']}
        defaultView="week" // เริ่มต้นด้วยมุมมอง Week
        style={{ height: 500 }}
        view={view} // ใช้ state เพื่อกำหนดมุมมอง
      />
    </div>
  );
};

export default MyFullCalendar;

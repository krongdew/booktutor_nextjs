// booking.js
'use client'

import React, { useEffect, useRef } from 'react';

const Booked = () => {
  const dayscheduleRef = useRef(null);

  useEffect(() => {
    if (!window.dayschedule) {
      // โหลดวิดเจ็ตเมื่อ DOM โหลดเสร็จ
      const script = document.createElement('script');
      script.src = 'https://cdn.dayschedule.dev/widget.js';
      script.async = true;
      script.onload = initializeWidget;
      document.body.appendChild(script);
    } else {
      // ถ้าวิดเจ็ตได้โหลดมาแล้ว เริ่มการสร้างวิดเจ็ตทันที
      initializeWidget();
    }
  }, []);

  const initializeWidget = () => {
    window.dayschedule.init({
      container: dayscheduleRef.current,
      // ตั้งค่าอื่นๆ ตามความต้องการ
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-4">Booking Page</h1>
      <div ref={dayscheduleRef} style={{ width: '100%', height: '500px' }}></div>
    </div>
  );
};

export default Booked;

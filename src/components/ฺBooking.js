// Booking.js
'use client'
import React, { useRef, useEffect } from 'react';
import Head from 'next/head';

const Booking = () => {
  const dayscheduleRef = useRef(null);

  useEffect(() => {
    if (window.dayschedule) {
      window.dayschedule.init({
        container: dayscheduleRef.current,
        // ตัวเลือกอื่นๆ ตามต้องการ
      });
    }
  }, []);

  return (
    <>
     <Head>
     <script src="/dist/dayschedule-widget.js" defer></script>
      </Head>
    <div ref={dayscheduleRef} style={{ width: '100%', height: '500px' }}>
        
    </div>
    </>
  );
};

export default Booking;

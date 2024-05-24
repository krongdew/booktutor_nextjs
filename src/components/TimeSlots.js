// components/TimeSlots.jsx
'use client'

import React, { useState } from 'react';

const TimeSlots = ({ date, teacher, schedule, bookedSlots }) => {
  const [bookedSlotsState, setBookedSlotsState] = useState(bookedSlots);
  const [showModal, setShowModal] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedTeacher, setSelectedTeacher] = useState(null);

  const handleBooking = (slot, course, teacherId) => {
    if (!bookedSlotsState.some((booked) => booked.slot === slot)) {
      setSelectedSlot(slot);
      setSelectedCourse(course);
      setSelectedTeacher(teacherId);
      setShowModal(true);
    }
  };

  const handleConfirmBooking = () => {
    setBookedSlotsState([...bookedSlotsState, { teacher: selectedTeacher, slot: selectedSlot }]);
    setShowModal(false);
  };

  // Dummy data for courses
  const courses = [
    { id: 1, name: 'Mathematics' },
    { id: 2, name: 'English' },
    { id: 3, name: 'Science' },
  ];

  // Dummy data for teachers
  const teachers = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
  ];

  return (
    <div>
      <h3>Available Time Slots</h3>
      {schedule && schedule.length > 0 ? (
        schedule.map((slot) => {
          const [startTime, endTime] = slot.split('-');
          const course = courses.find((c) => c.id === teacher);
          const teacherName = teachers.find((t) => t.id === teacher)?.name;
          return (
            <button
              key={slot}
              onClick={() => handleBooking(slot, course, teacher)}
              disabled={bookedSlotsState.some((booked) => booked.slot === slot)}
              style={{
                borderRadius:10,
                backgroundColor: bookedSlotsState.some((booked) => booked.slot === slot) ? 'gray' : 'Darkblue',
                color: 'white',
                padding: '8px 16px',
                margin: '4px',
                cursor: bookedSlotsState.some((booked) => booked.slot === slot) ? 'not-allowed' : 'pointer',
              }}
            >
              {`[${course?.name}] ${startTime} - ${endTime}`}
            </button>
          );
        })
      ) : (
        <p>No time slots available for the selected date and teacher.</p>
      )}

      {showModal && (
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4">
            <div className="bg-white rounded-lg px-4 pt-5 pb-4 overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Book a Lesson</h3>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">Please enter your name to book the lesson.</p>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="mt-2 border rounded-md p-2 w-full"
                    />
                    <div className="mt-4">
                      <p>
                        <span className="font-semibold">Course:</span> {selectedCourse?.name}
                      </p>
                      <p>
                        <span className="font-semibold">Teacher:</span> {selectedTeacher && teachers.find((t) => t.id === selectedTeacher)?.name}
                      </p>
                      <p>
                        <span className="font-semibold">Time:</span> {selectedSlot}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={handleConfirmBooking}
                >
                  Confirm
                </button>
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TimeSlots;
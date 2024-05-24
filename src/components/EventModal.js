import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const EventModal = ({ event, onClose }) => {
  const [title, setTitle] = useState(event.title);
  const [start, setStart] = useState(new Date(event.start));
  const [end, setEnd] = useState(new Date(event.end));

  const handleSave = () => {
    const updatedEvent = {
      ...event,
      title: title,
      start: start,
      end: end
    };
    console.log(updatedEvent)
    onClose(updatedEvent);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Edit Event</h2>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <DatePicker
          selected={start}
          onChange={(date) => setStart(date)}
          showTimeSelect
          dateFormat="yyyy-MM-dd HH:mm"
        />
        <DatePicker
          selected={end}
          onChange={(date) => setEnd(date)}
          showTimeSelect
          dateFormat="yyyy-MM-dd HH:mm"
        />
        <button onClick={handleSave}>Save</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default EventModal;

import React, { useState, useEffect} from 'react';
import axios from 'axios';
import '../UserDash/EventTable.css';


const EventTable = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8081/api/bookings").then((r) => {
      setEvents(r.data);
      console.log(r.data)
    });
 
  }, []);

  const [searchTerm, setSearchTerm] = useState('');

  const handleCancel = (eventId) => {
    // Update the status to 'Cancelled' or remove the event from the list
    const updatedEvents = events.map(event => (event.id === eventId ? { ...event, status: 'Cancelled' } : event));
    setEvents(updatedEvents);
  };

  const filteredEvents = events.filter(event =>
    event.eventName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
   
    <div className="dis">
      <input
        type="text"
        placeholder="Search by event name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <table>
        <thead>
          <tr>
            {/* Remove the 'Name' column */}
            <th>Event Name</th>
            <th>Applicant Name</th>
            <th>Event Date</th>
            <th>Event Time</th>
            <th>Head Count</th>
            <th>Phone Number</th>
            {/* <th>Cancel</th> */}
          </tr>
        </thead>
        <tbody>
          {filteredEvents.map(event => (
            <tr key={event.id}>
              {/* Remove the 'Name' column */}
              <td>{event.eventName}</td>
              <td>{event.applicantName}</td>
              <td>{event.eventDate}</td>
              <td>{event.eventTime}</td>
              <td>{event.peopleCount}</td>
              <td>{event.phoneNumber}</td>
              {/* <td>
                {event.status === 'Booked' && (
                  <button className="bte" onClick={() => handleCancel(event.id)}>Cancel</button>
                )}
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
};

export default EventTable;
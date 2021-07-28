import React, {useState} from "react";
import {AppointmentForm} from "../../components/appointmentForm/AppointmentForm";
import {TileList} from "../../components/tileList/TileList";

export const AppointmentsPage = (props) => {
  const [title, setTitle] = useState('');
  const [contact, setContact] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newAppointment = {
        [title]: title,
        [contact]: contact,
        [date]: date,
        [time]: time
    };
    props.addAppointment(newAppointment);
    setTitle('');
    setContact('');
    setDate('');
    setTime('');
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
          <AppointmentForm  contacts={props.contacts}
                            title={title}
                            setTitle={setTitle}
                            contact={contact}
                            setContact={setContact}
                            date={date}
                            setDate={setDate}
                            time={time}
                            setTime={setTime}
                            handleSubmit={handleSubmit}
          />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList toRender={props.appointments} />
      </section>
    </div>
  );
};

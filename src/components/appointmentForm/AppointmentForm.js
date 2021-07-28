import React from "react";
import {ContactPicker} from "../contactPicker/ContactPicker";

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  return (
      <form onSubmit={handleSubmit}>
        <input type="text"
               required
               name="title"
               id="title"
               placeholder="Appointment Title"
               value={title}
               onChange={(event) => setTitle(event.target.value)}
        />
        <ContactPicker contacts={contacts} handleChange={(event) => setContact(event.target.value)} />
        <input type="date"
               required
               pattern="[0-9]{10}"
               name="date"
               id="date"
               min={getTodayString()}
               value={date}
               onChange={(event) => setDate(event.target.value)}
        />
        <input type="time"
               required
               name="time"
               id="time"
               value={time}
               onChange={(event) => setTime(event.target.value)}
        />
        <input type="submit"
               value="Add Appointment"
        />
      </form>
  );
};

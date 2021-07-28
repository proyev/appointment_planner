import React from "react";

export const ContactPicker = (props) => {
  const names = [];
  for (const contact of props.contacts) {
      names.push(contact.name);
  }


  return (
    <select onChange={props.handleChange}>
      <option value>No Contact Selected</option>
        {names.map(name => <option>{name}</option>)}
    </select>
  );
};

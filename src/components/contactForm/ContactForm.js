import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <input type="text"
             required
             name="name"
             id="name"
             placeholder="Contact name"
             value={name}
             onChange={(event) => setName(event.target.value)}
      />
      <input type="tel"
             required
             pattern="[0-9]{10}"
             name="phone"
             id="phone"
             placeholder="Contact phone (10 numbers)"
             value={phone}
             onChange={(event) => setPhone(event.target.value)}
      />
      <input type="email"
             required
             name="email"
             id="email"
             placeholder="Contact email"
             value={email}
             onChange={(event) => setEmail(event.target.value)}
      />
      <input type="submit"
             value="Add Contact"
      />
    </form>
  );
};
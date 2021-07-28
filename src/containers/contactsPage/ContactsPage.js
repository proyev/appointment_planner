import React, {useEffect, useState} from "react";
import {ContactForm} from "../../components/contactForm/ContactForm";
import {TileList} from "../../components/tileList/TileList";

export const ContactsPage = props => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (checkName(name)){
        const newContact = {
            name: name,
            phone: phone,
            email: email
        }
        props.addContact(newContact);
        setName('');
        setPhone('');
        setEmail('');
    }
  };

  useEffect(() => {
      checkName(name);
  }, [name]);

  const checkName = nameToCheck => {
      for (const contact of props.contacts) {
          if (contact.name === nameToCheck){
              return false;
          }
      }
      return true;
  }

  return (
    <div>
      <section>
        <h2>Add Contact{!checkName(name) && <span> - Such Contact Already Exists</span>}</h2>
        <ContactForm name={name}
                     setName={setName}
                     phone={phone}
                     setPhone={setPhone}
                     email={email}
                     setEmail={setEmail}
                     handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList toRender={props.contacts}
        />
      </section>
    </div>
  );
};

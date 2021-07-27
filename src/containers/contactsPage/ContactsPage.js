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
      console.log("let's check")
      for (const contact of props.contacts) {
          if (contact.name === nameToCheck){
              console.log("There is someone with this name already");
              return false;
          }
      }
      return true;
  }

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
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

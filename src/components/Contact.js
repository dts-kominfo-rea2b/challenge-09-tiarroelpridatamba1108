// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from "react";

const Contact = ({ contact }) => {
  return (
    <div className="wrapper">
      <div className="contacts">
        <img src={contact.photo} alt="gambar" width="150px" />
        <div key={contact.email} className="data-items">
          <p className="name">{contact.name}</p>
          <p>{contact.phone}</p>
          <p>{contact.email}</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;

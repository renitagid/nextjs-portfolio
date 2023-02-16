import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export const MessageForm = () => {

  const [formSubmitted, setFormSubmitted] = useState({ title: '', paragraph: '' });

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_37032nc', 'template_2n9petq', form.current, 'OoQVw_OuXULdyT-VU')
    .then(({ status }) => {
        if (status === 200) {
          setFormSubmitted({ title: 'Message has been sent', paragraph: 'Renita will be in contact with you soon.' });
        } else {
          setFormSubmitted({ title: 'Unexpected status code returned from EmailJS, try again later', paragraph: 'Please contact Renita by email.' });
        }
      }, (err) => {
        // eslint-disable-next-line no-console
        console.log(err);
        setFormSubmitted({ title: 'Error sending message, try again later', paragraph: 'Please contact Mike either by phone or email.' });
      });
  };

  return (
    <>
    <div>
        <h3>{formSubmitted.title}</h3>
        <p>{formSubmitted.paragraph}</p>
    </div>
    <form className="border-2 border-black" ref={form} onSubmit={sendEmail}>
      <label className="border-2 border-black">Name</label>
      <input className="border-2 border-black" type="text" name="user_name" />
      <label className="border-2 border-black">Email</label>
      <input className="border-2 border-black" type="email" name="user_email" />
      <label className="border-2 border-black">Message</label>
      <textarea className="border-2 border-black" name="message" />
      <input className="border-2 border-black" type="submit" value="Send" />
    </form>
    </>
  );
};
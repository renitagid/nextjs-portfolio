import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const MessageForm = () => {
  const [formSubmitted, setFormSubmitted] = useState({
    title: "",
    paragraph: "",
  });
  const [formContent, setFormContent] = useState({
    name: "",
    email: "",
    message: "",
  });
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_37032nc",
        "template_2n9petq",
        form.current,
        "OoQVw_OuXULdyT-VU"
      )
      .then(
        ({ status }) => {
          if (status === 200) {
            e.target.reset();
            setFormSubmitted({
              title: "Message has been sent!",
              paragraph: "Renita will be in contact with you soon.",
            });
          } else {
            setFormSubmitted({
              title:
                "Unexpected status code returned from EmailJS, try again later",
              paragraph: "Please contact Renita by email.",
            });
          }
        },
        (err) => {
          // eslint-disable-next-line no-console
          console.log(err);
          setFormSubmitted({
            title: "Error sending message, try again later",
            paragraph: "Please contact Renita by email.",
          });
        }
      );
  };

  return (
    <div className="grid absolute left-0 right-0 top-24 justify-center">

      <p className="text-center font-header">...or send me a message!</p>
      <div className="m-2 h-[350px] w-[300px] rounded-xl bg-gradient-to-br from-orange-400 via-rose-300 to-amber-400">
        <form
          className="m-0.5 h-[346px] rounded-xl bg-white dark:bg-neutral-600 p-2"
          ref={form}
          onSubmit={sendEmail}
        >
          <div>
            <label className="">Name</label>
          </div>
          <div>
            <input
              className="w-full bg-gray-200 mb-1 pl-0.5 dark:text-black"
              type="text"
              name="user_name"
            />
          </div>
          <div>
            <label className="">Your Email</label>
          </div>
          <div>
            <input
              className="w-full border-2 bg-gray-200 mb-1 pl-0.5 dark:text-black"
              type="email"
              name="user_email"
            />
          </div>
          <div>
            <label className="">Message</label>
          </div>
          <div>
            <textarea
              className="h-24 w-full border-2 bg-gray-200 mb-1 pl-0.5 dark:text-black"
              name="message"
            />
          </div>
          <div className="text-center">
        <h3>{formSubmitted.title}</h3>
        <p>{formSubmitted.paragraph}</p>
      </div>
          <div className="flex justify-center">
            <input
              className="rounded-full bg-gradient-to-br px-2"
              type="submit"
              value="Send"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import { useForm } from "react-hook-form";

export const MessageForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
  });
  const [formSubmitted, setFormSubmitted] = useState({
    title: "",
    paragraph: "",
  });
  
  const form = useRef();

  const sendEmail = (formData) => {
    emailjs
      .send(
        "service_37032nc",
        "template_2n9petq",
        formData,
        "OoQVw_OuXULdyT-VU"
      )
      .then(
        ({ status }) => {
          if (status === 200) {
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
    <div className="justify-center md:text-sm">

      <p className="text-center font-header">...or send me a message!</p>
      <div className="m-2 h-[350px] w-[300px] rounded-lg bg-gradient-to-br from-orange-400 via-rose-300 to-amber-400">
        <form
          className="relative top-0.5 m-0.5 h-[346px] rounded-md bg-white dark:bg-neutral-600 p-2"
          ref={form}
          onSubmit={handleSubmit(sendEmail)}
        >
          <div>
            <label className="">Name</label>
          </div>
          <div>
            <input
              className="w-full bg-gray-200 mb-1 pl-0.5 dark:text-black"
              id="user_name"
              type="text"
              name="user_name"
              {...register("user_name", { required: true })}
            />
            {errors.user_name && (
              <div
                style={{ color: "red" }}
                className="invalid-feedback d-block"
              >
                Please fill out this field.
              </div>
            )}
          </div>
          <div>
            <label className="">Your Email</label>
          </div>
          <div>
            <input
              className="w-full border-2 bg-gray-200 mb-1 pl-0.5 dark:text-black"
              id="user_email"
              type="email"
              name="user_email"
              {...register("user_email", { required: true })}
              />
              {errors.user_email && (
              <div
                style={{ color: "red" }}
                className="invalid-feedback d-block"
              >
                Please fill out this field.
              </div>
            )}
          </div>
          <div>
            <label className="">Message</label>
          </div>
          <div>
            <textarea
              className="h-24 w-full border-2 bg-gray-200 mb-1 pl-0.5 dark:text-black"
              id="message"
              name="message"
              {...register("message", { required: true })}
            />
            {errors.message && (
              <div
                style={{ color: "red" }}
                className="invalid-feedback d-block"
              >
                Please fill out this field.
              </div>
            )}
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

import { MessageForm } from "@/components/EmailForm";
import React from "react";

const Contact = () => {
  return (
    <main>
      <div>
        <div>LinkedIn</div>
        <div>GitHub</div>
        <div>Email</div>
      </div>
      <div className="">
       <MessageForm/>
      </div>
    </main>
  );
};

export default Contact;

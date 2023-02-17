import { MessageForm } from "@/components/EmailForm";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <main>
      <div className="flex flex-col items-center pt-3">
        <div className="font-header">Find me online:</div>
        <div className="flex w-[220px] justify-evenly p-2">
          <div>
            <a
              href="https://www.linkedin.com/in/renitagidlund/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} className="text-4xl" />
            </a>
          </div>
          <div>
            <a
              href="https://github.com/renitagid"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} className="text-4xl" />
            </a>
          </div>
          <div>
            <a
              href="mailto:renita.gidlund@gmail.com?subject=Your Portfolio&body=Hi Renita!"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faEnvelope} className="text-4xl" />
            </a>
          </div>
        </div>
        <MessageForm />
      </div>
      <div className="pt-10"></div>
    </main>
  );
};

export default Contact;

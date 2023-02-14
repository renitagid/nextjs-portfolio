import React from "react";

const Contact = () => {
  return (
    <main>
      <div>
        <div>LinkedIn</div>
        <div>GitHub</div>
        <div>Email</div>
      </div>
      <div className="absolute bottom-0">
        <form action="mailto:emailid@example.com" method="post">
          <div >
            <label for="name">Name</label>
            <input type="text" id="name" name="name" />
          </div>
          <div>
            <label for="email">Email</label>
            <input type="text" id="email" name="email" />
          </div>
          <div>
            <label for="body">Message</label>
            <input type="textarea" id="body" name="body" />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </main>
  );
};

export default Contact;

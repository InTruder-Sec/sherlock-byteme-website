import React from "react";
import Timeline from "./Timeline";
import Form from "./../feedback/Form";
import Registration from "./RegistrationByteme";

function Contact({ reffer }) {
  return (
    <div className="flex" ref={reffer}>
      <Timeline color="from-green-400" />
      <Registration />
    </div>
  );
}

export default Contact;

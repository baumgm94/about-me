import emailjs from "emailjs-com";
import * as React from "react";
import { TextInput } from "./components/inputLabel.js";
import { SubmitButton } from "./components/button.js";
import { TextArea } from "./components/textarea.js";

function Contact() {
  //const form = React.useRef();
  const [allValues, setAllValues] = React.useState({
    firstName: "",
    lastName: "",
    eMail: "",
    comment: "",
  });

  function changeHandler(e) {
    console.log(allValues);
    console.log(e);
    return setAllValues({ ...allValues, [e.target.name]: e.target.value });
  }

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "contact_service",
        "contact_form",
        e.target,
        "Cb1seSfNB3Lbp7kTW"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("SUCCESS!");
        },
        (error) => {
          console.log(error.text);
          alert("FAILED...!", error);
        }
      );
    e.target.reset();
  }

  return (
    <form onSubmit={sendEmail} className=" h-full bg-slate-300">
      <h2 className="text-7xl font-bold text-center mb-10 p-8 text-slate-700">
        Contact Form
      </h2>
      <TextInput
        lableName="Firstname"
        name="firstName"
        placeholder="Max"
        required
        onChange={changeHandler}
      />
      <TextInput
        lableName="Lastname"
        name="lastName"
        placeholder="Muster"
        required
        onChange={changeHandler}
      />
      <TextInput
        lableName="E-Mail"
        name="eMail"
        placeholder="default@gmail.com"
        required
        onChange={changeHandler}
      />
      <TextInput
        lableName="Mobile"
        name="mobile"
        placeholder="+41"
        onChange={changeHandler}
      />
      <TextInput
        lableName="Mobile"
        name="mobile"
        placeholder="+41"
        onChange={changeHandler}
      />
      <TextArea
        fieldName="Comment"
        name="comment"
        placeHolder="Leave a comment ..."
        onChange={changeHandler}
      />
      <SubmitButton buttonName="Submit" />
    </form>
  );
}

export default Contact;

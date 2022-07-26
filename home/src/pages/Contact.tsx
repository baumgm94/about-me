import emailjs from "emailjs-com";
import * as React from "react";
import { TextInput } from "../components/inputLabel";
import { SubmitButton } from "../components/button";
import { TextArea } from "../components/textarea";

function Contact() {
  //const form = React.useRef();
  const [allValues, setAllValues] = React.useState({
    firstName: "",
    lastName: "",
    eMail: "",
    comment: "",
  });

  function changeHandler(e: any) {
    return setAllValues({ ...allValues, [e.target.name]: e.target.value });
  }

  function sendEmail(e: any) {
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
        labelName="Firstname"
        name="firstName"
        placeholder="Max"
        required
        onChange={changeHandler}
      />
      <TextInput
        labelName="Lastname"
        name="lastName"
        placeholder="Muster"
        required
        onChange={changeHandler}
      />
      <TextInput
        labelName="E-Mail"
        name="eMail"
        placeholder="default@gmail.com"
        required
        onChange={changeHandler}
      />
      <TextInput
        labelName="Mobile"
        name="mobile"
        placeholder="+41"
        required={false}
        onChange={changeHandler}
      />
      <TextInput
        labelName="Mobile"
        name="mobile"
        placeholder="+41"
        required={false}
        onChange={changeHandler}
      />
      <TextArea
        labelName="Comment"
        name="comment"
        placeholder="Leave a comment ..."
        onChange={changeHandler}
      />
      <SubmitButton buttonName="Submit" />
    </form>
  );
}

export default Contact;

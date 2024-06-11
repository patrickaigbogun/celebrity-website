import React from "react";
import ContactForm from "../templates/emailjscontact";
// import InputbarContact from "../templates/inputbarcontact";


export default function ContactUs() {
  return (
    <section
      className="row pt-5 container-fluid justify-content-center px-3 my-5"
      id="contact">
      <div
        className="col-12 col-md-9 col-lg-8 border rounded-2 shadow p-4 bg-light"
        style={{ boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)" }}>
        <h1 className="display-7 text-center mb-4 fw-bold">
          Contact &amp; Booking
        </h1>
        <p className="text-center">
          Fill in your information down below and directly message the private telegram with payment proof when done for successful meet up booking
        </p>
        <div className="p-3">
          <form className="p-3 rounded">
            <ContactForm/>
            {/* <InputbarContact /> */}
            <div className="text-center">
              <button type="submit" className="btn btn-dark">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

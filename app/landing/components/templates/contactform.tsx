"use client";

import React, { useRef, useState } from "react";
import { handleSubmit } from "@/app/actions/sendMail";

const ContactForm: React.FC = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [submitting, setSubmitting] = useState<boolean>(false);

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setSubmitting(true);

    try {
      const res = await handleSubmit(new FormData(form.current));
      if (res && res.accepted.length > 0) {
        form.current.reset();
        alert("Message sent successfully");
      } else {
        alert("Message failed to send");
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert("An unexpected error occurred. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <div className="my-3">
        <label className="form-label fw-semibold">Name</label>
        <input
          name="name"
          type="text"
          required
          className="form-control"
          placeholder="John Doe"
        />
      </div>
      <div className="my-3">
        <label className="form-label fw-semibold">Email</label>
        <input
          name="email"
          type="email"
          required
          className="form-control"
          placeholder="johndoe@gmail.com"
        />
      </div>
      <div className="my-3">
        <label className="form-label fw-semibold">Message</label>
        <textarea
          required
          className="form-control"
          rows={3}
          name="message"
        />
      </div>
      <div className="text-center my-3">
        <button
          disabled={submitting}
          className="btn btn-dark"
          type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default ContactForm;

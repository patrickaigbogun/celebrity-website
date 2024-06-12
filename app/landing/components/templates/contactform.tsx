"use client";

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm: React.FC = () => {
	const form = useRef<HTMLFormElement | null>(null);

	const sendEmail = (e: React.FormEvent) => {
		e.preventDefault();

		if (form.current) {
			emailjs
				.sendForm(
					"contact_service",
					"contact_form",
					form.current,
					"-L5PPLlRxAd-XMGs8"
				)
				.then(
					() => {
						console.log("SUCCESS!");
						const inputFields = document.getElementsByClassName("form-control");
						for (let i = 0; i < inputFields.length; i++) {
							(inputFields[i] as HTMLInputElement).value = "";
						}
					},
					(error) => {
						console.log("FAILED...", error.text);
					}
				);
		}
	};

	return (
		<form ref={form} onSubmit={sendEmail}>
			<div className="my-3">
				<label className="form-label fw-semibold">Name</label>
				<input
					type="text"
					className="form-control"
					placeholder="John Doe"
				/>
			</div>
			<div className="my-3">
				<label className="form-label fw-semibold">Email</label>
				<input
					type="email"
					className="form-control"
					placeholder="johndoe@gmail.com"
				/>
			</div>
			<div className="my-3">
				<label className="form-label fw-semibold">Message</label>
				<textarea className="form-control" rows={3}></textarea>
			</div>
			<div className="text-center my-3">
				<button className="btn btn-dark" type="submit">
					SEND
				</button>
			</div>
		</form>
	);
};

export default ContactForm;

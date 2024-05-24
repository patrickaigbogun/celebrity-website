import React from "react";

export default function Contactus() {
	return (
		<section
			className="container mb-4 pt-5 my-5 d-flex justify-content-center"
			id="contact">
			<div className="w-100" style={{ maxWidth: "85%" }}>
				<h1 className="display-7 text-center mb-4 fw-bold">
					Contact & Booking
				</h1>
				<div className="row justify-content-center">
					<form className="col-12 col-md-9 col-lg-8">
						<div className="mb-3  ">
							<label htmlFor="firstName" className="form-label fw-bold">
								First Name
							</label>
							<input
								type="text"
								className="form-control"
								id="firstName"
								name="firstName"
								required
							/>
						</div>
						<div className="mb-3">
							<label htmlFor="lastName" className="form-label fw-bold">
								Last Name
							</label>
							<input
								type="text"
								className="form-control"
								id="lastName"
								name="lastName"
								required
							/>
						</div>
						<div className="mb-3">
							<label htmlFor="InputEmail1" className="form-label fw-bold">
								Email address
							</label>
							<input
								type="email"
								className="form-control"
								id="InputEmail1"
								name="email"
								aria-describedby="emailHelp"
								required
							/>
							<div id="emailHelp" className="form-text">
								We would never share your email with anyone
								else.
							</div>
						</div>
						<div className="mb-3">
							<label htmlFor="subject" className="form-label fw-bold">
								Subject
							</label>
							<input
								type="text"
								className="form-control"
								id="subject"
								name="subject"
								required
							/>
						</div>
						<div className="mb-3">
							<label htmlFor="message" className="form-label fw-bold">
								Message
							</label>
							<textarea
								className="form-control"
								id="message"
								name="message"
								required></textarea>
						</div>
						<div>
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

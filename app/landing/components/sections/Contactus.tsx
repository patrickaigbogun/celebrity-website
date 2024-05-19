export default function Contactus() {
	return (
		<section className="home container-md mb-4 pt-5 my-5" id="contact">
			<h1 className="display-7 text-center mb-4 fw-bold" >Contact & Booking</h1>
      <div>
        <div className="bd-example">
        <form>
          <div className="mb-3">
            <label htmlFor="InputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="InputEmail1" aria-describedby="emailHelp"></input>
            <div id="emailHelp" className="form-text">We  would never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">message</label>
            <textarea className="form-control" id="message"></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        </div>
      </div>

		</section>
	);
}

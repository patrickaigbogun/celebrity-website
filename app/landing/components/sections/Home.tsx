export default function Home() {
	return (
		<section className="home px-4 pt-5 my-5 text-center border-bottom" id="home">
			<h1 className="display-4 fw-bold">Home</h1>
			
    <div className="col-lg-6 mx-auto">
      <p className="lead mb-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
      Minima deserunt eaque dolorum laborum rerum quam facere tempore delectus dolorem qui rem quidem quis, 
      debitis doloremque ipsam culpa animi omnis laboriosam.</p>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
        <button type="button" className="btn btn-primary btn-lg px-4 me-sm-3">Primary button</button>
        <button type="button" className="btn btn-outline-secondary btn-lg px-4">Secondary</button>
      </div>
    </div>
    <div className="overflow-hidden imgdiv" >
      <div className="container px-5">
        <img src="home.png" className="img-fluid border rounded-3 shadow-lg mb-4" alt="Example image" width="700" height="500" loading="lazy"></img>
      </div>
    </div>
		</section>
	);
}

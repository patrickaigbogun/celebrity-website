import React from "react";
import Checkout from "./Checkout";

export default function Fanclub() {
	return (
		<section className="home container-md mb-4 pt-5 my-5" id="fanclub">
			<svg xmlns="http://www.w3.org/2000/svg" className="svg">
				<symbol id="check" viewBox="0 0 16 16">
					<title>Check</title>
					<path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
				</symbol>
			</svg>
			<h1 className="display-6 text-center mb-4 fw-bold">
				Membership Access
			</h1>{" "}
			<br />
			<br />
			<div className=" row py-0 mb-3 text-center ">
				<div className="col-md-6 h-100 py-0">
					<div className="card mb-4 rounded-3 shadow h-100 py-0">
						<div className="card-header py-3">
							<h4 className="fw-semibold">VIP PREMIUM
</h4>
						</div>
						<div className="card-body">
					
							<p className="d-block mx-auto" style={{width: "70%", maxHeight: "250px"}}>
							This costs $1,945. 
							In this category your meet and greet session will hold in a 
							private hotel room within 72hrs 
							(can be paid a maximum of 2 times)	
							</p>
							<button
								type="button"
								className="shadow w-50 btn btn-outline-dark"
								data-bs-toggle="modal"
								data-bs-target="#staticBackdropLive">
								Pay 1,945USD
							</button>
						</div>
					</div>
				</div>
				<div className="col-md-6">
					<div className="card mb-4 rounded-3 shadow ">
						<div className="card-header py-3 ">
							<h4 className=" fw-semibold">VVIP PREMIUM</h4>
						</div>
						<div className="card-body">
							<p className="d-block mx-auto text-center" style={{width: "70%", maxHeight: "250px"}}>
							This costs $2,557 to meet   Sara Gilbert . 
							In this category we would arrange a 1 month vacation in any location you choose 
							(can be paid a maximum of 3 times)
							</p>
							<button
								type="button"
								className="shadow w-50 btn btn-outline-dark"
								data-bs-toggle="modal"
								data-bs-target="#staticBackdropLive">
								Pay 2,557USD
							</button>
						</div>
					</div>
				</div>
			</div>
			<br />
			<br />
			<Checkout />
			<br />
			<br />
			<h2 className="display-6 text-center my-3 fw-semibold">
			Meetup Perks
			</h2>

			<div className="container text-center my-3 fs-4" >
			Your membership card is your gateway to exclusive meetups! 
			Gain access to special events and spend quality time with the person you&apos;re eager to meet. 
			Connect, engage, and enjoy unique experiences designed just for members. 
			Don&apos;t miss out—join us and make every moment count!
			</div>
			<div className="my-4 mx-4 p-4 shadow table-responsive">
				<table className=" mx-0 table text-center">
					<thead>
						<tr>
							<th className="th">Priviledge</th>
							<th className="th">Free Membership</th>
							<th className="th">Initiate</th>
							<th className="th">Inner Circle</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th scope="row" className="text-start">
								something
							</th>
							<td>
								<svg className="bi" width="24" height="24">
									<use xlinkHref="#check" />
								</svg>
							</td>
							<td>
								<svg className="bi" width="24" height="24">
									<use xlinkHref="#check" />
								</svg>
							</td>
							<td>
								<svg className="bi" width="24" height="24">
									<use xlinkHref="#check" />
								</svg>
							</td>
						</tr>
						<tr>
							<th scope="row" className="text-start">
								something
							</th>
							<td></td>
							<td>
								<svg className="bi" width="24" height="24">
									<use xlinkHref="#check" />
								</svg>
							</td>
							<td>
								<svg className="bi" width="24" height="24">
									<use xlinkHref="#check" />
								</svg>
							</td>
						</tr>
					</tbody>

					<tbody>
						<tr>
							<th scope="row" className="text-start">
								something
							</th>
							<td>
								<svg className="bi" width="24" height="24">
									<use xlinkHref="#check" />
								</svg>
							</td>
							<td>
								<svg className="bi" width="24" height="24">
									<use xlinkHref="#check" />
								</svg>
							</td>
							<td>
								<svg className="bi" width="24" height="24">
									<use xlinkHref="#check" />
								</svg>
							</td>
						</tr>
						<tr>
							<th scope="row" className="text-start">
								something
							</th>
							<td></td>
							<td>
								<svg className="bi" width="24" height="24">
									<use xlinkHref="#check" />
								</svg>
							</td>
							<td>
								<svg className="bi" width="24" height="24">
									<use xlinkHref="#check" />
								</svg>
							</td>
						</tr>
						<tr>
							<th scope="row" className="text-start">
								something
							</th>
							<td></td>
							<td>
								<svg className="bi" width="24" height="24">
									<use xlinkHref="#check" />
								</svg>
							</td>
							<td>
								<svg className="bi" width="24" height="24">
									<use xlinkHref="#check" />
								</svg>
							</td>
						</tr>
						<tr>
							<th scope="row" className="text-start">
								something
							</th>
							<td></td>
							<td></td>
							<td>
								<svg className="bi" width="24" height="24">
									<use xlinkHref="#check" />
								</svg>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</section>
	);
}

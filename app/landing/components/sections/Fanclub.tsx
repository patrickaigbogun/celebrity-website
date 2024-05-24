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
			<h1 className="display-6 text-center mb-4 fw-bold">Membership Access</h1> <br /><br />

			<div className=" row mb-3 text-center ">
				<div className="col-md-6">
					<div className="card mb-4 rounded-3 shadow-sm">
						<div className="card-header py-3">
							<h4 className="my-0 fw-semibold">Tier 1</h4>
						</div>
						<div className="card-body">
							<h1 className="card-title pricing-card-title">
								$15
							</h1>
							<ul className="list-unstyled mt-3 mb-4">
								<li>20 selfies </li>
								<li>even more perks</li>
								<li>Priority email support</li>
								<li>Help center access</li>
							</ul>
							<button type="button" className="w-50 btn btn-outline-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">
								Pay 15USD
							</button>
						</div>
					</div>
				</div>
				<div className="col-md-6">
					<div className="card mb-4 rounded-3 shadow-sm ">
						<div className="card-header py-3 ">
							<h4 className="my-0 fw-semibold">Tier 2</h4>
						</div>
						<div className="card-body">
							<h1 className="card-title pricing-card-title">
								$29
							</h1>
							<ul className="list-unstyled mt-3 mb-4">
								<li>30 feet videos</li>
								<li>15 GB folder</li>
								<li>Phone and email support</li>
								<li>all you can eat access</li>
							</ul>
							<button type="button" className="w-50 btn btn-outline-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">
								Pay 29USD
							</button>
						</div>
					</div>
				</div>
			</div>
			<br /><br />

			<Checkout/><br /><br />

			<h2 className="display-6 text-center mb-4 fw-semibold">Compare plans</h2>
			<br /><br /><br /><br />

			<div className="table-responsive">
				<table className="table text-center">
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

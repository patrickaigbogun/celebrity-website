export default function Fanclub() {
	return (
		<section className="home container-md mb-4 pt-5 my-5" id="fanclub">
			<svg xmlns="http://www.w3.org/2000/svg" className="svg">
				<symbol id="check" viewBox="0 0 16 16">
					<title>Check</title>
					<path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
				</symbol>
			</svg>
			<h1 className="display-6 text-center mb-4 fw-bold">Membership Access</h1> <br /><br /><br /><br />

			<div className="row mb-3 text-center ">
				<div className="col-md-4">
					<div className="card mb-4 rounded-3 shadow-sm">
						<div className="card-header py-3">
							<h4 className="my-0 fw-normal">Free Membership Access</h4>
						</div>
						<div className="card-body">
							<h1 className="card-title pricing-card-title">
								$0
							</h1>
							<ul className="list-unstyled mt-3 mb-4">
								<li>10 users included</li>
								<li>2 GB of storage</li>
								<li>Email support</li>
								<li>Help center access</li>
							</ul>
							<button
								type="button"
								className="w-100 btn btn-lg btn-primary">
								Sign up for free
							</button>
						</div>
					</div>
				</div>
				<div className="col-md-4">
					<div className="card mb-4 rounded-3 shadow-sm">
						<div className="card-header py-3">
							<h4 className="my-0 fw-normal">Initiate Membership Access</h4>
						</div>
						<div className="card-body">
							<h1 className="card-title pricing-card-title">
								$15
							</h1>
							<ul className="list-unstyled mt-3 mb-4">
								<li>20 users included</li>
								<li>10 GB of storage</li>
								<li>Priority email support</li>
								<li>Help center access</li>
							</ul>
							<button
								type="button"
								className="w-100 btn btn-lg btn-primary">
								Get started
							</button>
						</div>
					</div>
				</div>
				<div className="col-md-4">
					<div className="card mb-4 rounded-3 shadow-sm ">
						<div className="card-header py-3 ">
							<h4 className="my-0 fw-normal">Inner Circle Access</h4>
						</div>
						<div className="card-body">
							<h1 className="card-title pricing-card-title">
								$29
							</h1>
							<ul className="list-unstyled mt-3 mb-4">
								<li>30 users included</li>
								<li>15 GB of storage</li>
								<li>Phone and email support</li>
								<li>Help center access</li>
							</ul>
							<button
								type="button"
								className="w-100 btn btn-lg btn-primary">
								Contact us
							</button>
						</div>
					</div>
				</div>
			</div>

			<h2 className="display-6 text-center mb-4">Compare plans</h2>

			<div className="table-responsive">
				<table className="table text-center">
					<thead>
						<tr>
							<th className="th"></th>
							<th className="th">Free</th>
							<th className="th">Pro</th>
							<th className="th">Enterprise</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th scope="row" className="text-start">
								Public
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
								Private
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
								Permissions
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
								Sharing
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
								Unlimited members
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
								Extra security
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

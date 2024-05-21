import React from "react";

export default function Header() {
	return (
		<header className="d-flex flex-wrap justify-content-center py-3 mb-4 ">
			<nav className=" navbar navbar-expand-md navelement text-center fixed-top">
				<div className="container-fluid">
					<a className="navbar-brand text-decoration-none text-reset" href="#">
						Patrick
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarCollapse"
						aria-controls="navbarCollapse"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div
						className="collapse navbar-collapse"
						id="navbarCollapse">
						<ul className="navbar-nav navtxt me-auto mb-2 mb-md-0">
							<li className="nav-item">
								<a className="nav-link text-decoration-none text-reset" href="#home">
									Home
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link text-decoration-none text-reset" href="#about">
									About
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link text-decoration-none text-reset " href="#fanclub">
									Membership
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link text-decoration-none text-reset " href="#contact">
									Contact/Booking
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</header>
	);
}

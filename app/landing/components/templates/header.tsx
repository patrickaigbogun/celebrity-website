import React from "react";
import Image from "next/image";

export default function Header() {
	return (
		<header className="d-flex flex-wrap justify-content-center py-3 mb-4 ">
			<nav className=" navbar navbar-expand-md navelement fw-semibold text-center fixed-top shadow">
				<div className="container-fluid w-75">
					<a
						className="navbar-brand text-decoration-none text-reset"
						href="#">
						<Image
							className="d-block mx-auto mb-0"
							src="/logo-dark-wbg.svg"
							alt="Your logo"
							width={75}
							height={75}
						/>
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
								<a
									className="nav-link text-decoration-none text-reset"
									href="#home">
									Home
								</a>
							</li>
							<li className="nav-item">
								<a
									className="nav-link text-decoration-none text-reset"
									href="#about">
									About
								</a>
							</li>
							<li className="nav-item">
								<a
									className="nav-link text-decoration-none text-reset "
									href="#membership">
									Membership
								</a>
							</li>
							<li className="nav-item">
								<a
									className="nav-link text-decoration-none text-reset "
									href="#contact">
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

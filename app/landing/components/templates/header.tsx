import React from 'react'

export default function Header() {
	return (

    <header className="d-flex flex-wrap justify-content-center py-3 mb-4 ">
    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Patrick</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarCollapse">
      <ul className="navbar-nav me-auto mb-2 mb-md-0">
        <li className="nav-item">
          <a className="nav-link"  href="#home">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#about">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " href="#fanclub" >FanClub</a>
        </li>
		<li className="nav-item">
          <a className="nav-link " href="#contact" >Contact/Booking</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </header>
	)
}

import React from 'react'
import logo from '../Assets/logo.png'
const Navbar = () => {
    return (
    <nav className="navbar navbar-expand-lg navbar-light p-0" id="navbar">
            <div className="container-fluid">
                <a className="navbar-brand h6 mx-2 text-light my-1" href="/"><img className="mx-auto d-block" src={logo} alt="Brand"/><small>Space</small></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <a className="nav-link px-3 mx-2 py-1" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link px-3 mx-2 py-1" href="/">Nasa Missions</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link px-3 mx-2 py-1" href="/">Planets</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link px-3 mx-2 py-1" href="/">Gallary</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        
    )
}

export default Navbar

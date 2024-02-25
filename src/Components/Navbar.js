import React, {useState} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

export default function Navbar(props) {

  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <a className="navbar-brand" href="/">{props.title}</a>
      <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className={`nav-link text-${props.mode==='light'?'dark':'light'}`} aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link text-${props.mode==='light'?'dark':'light'}`} to="/About">About</Link>
          </li>
          <li className="nav-item dropdown">
            <a className={`nav-link dropdown-toggle text-${props.mode==='light'?'dark':'light'}`} href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="/">Action</a></li>
              <li><a className="dropdown-item" href="/">Another action</a></li>
              <li><hr className="dropdown-divider"/></li>
              <li><a className="dropdown-item" href="/">Something else here</a></li>
            </ul>
          </li>
        </ul>
          <div className="d-flex">
            <div className="bg-primary rounded mx-2" onClick={()=>props.toggleMode('primary')}
            style={{height: '30px', width: '30px', cursor: 'pointer'}}></div>
            <div className="bg-danger rounded mx-2" onClick={()=>props.toggleMode('danger')}
            style={{height: '30px', width: '30px', cursor: 'pointer'}}></div>
            <div className="bg-success rounded mx-2" onClick={()=>props.toggleMode('success')}
            style={{height: '30px', width: '30px', cursor: 'pointer'}}></div>
            <div className="bg-warning rounded mx-2" onClick={()=>props.toggleMode('warning')}
            style={{height: '30px', width: '30px', cursor: 'pointer'}}></div>
          </div>
        <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
          <input className="form-check-input" onClick={()=>props.toggleMode('null')} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Toggle Mode</label>
        </div>
    {/*     <div className="btn-group" role="group" aria-label="Basic mixed styles example">
      </div> */}
      </div>
    </div>
  </nav>
  )
}

Navbar.propTypes = {title: PropTypes.string,
                    aboutText: PropTypes.string}

Navbar.defaultProps = {title: 'This is Title',
                        aboutText: 'About Us Here'
  };
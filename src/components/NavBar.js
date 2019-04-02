import React from 'react';

export class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }; // this.state ends
  } // constructor extends
  render() {
    return (
      <React.Fragment>
      <nav id="jso_navBar" className="navbar navbar-expand-sm bg-dark text-light my-1">
      <ul className="navbar-nav m-1">
      <NavLink><li className="nav-item"><a className="nav-link" to="/home">Home</a></li></NavLink>
      <NavLink><li className="nav-item"><a className="nav-link" to="/resume">my Resume</a></li></NavLink>
      <NavLink><li className="nav-item"><a className="nav-link" to="/skills">my Skills</a></li></NavLink>
      <NavLink><li className="nav-item"><a className="nav-link" to="/goals">my Goals</a></li></NavLink>
      </ul>

      </nav>
      </React.Fragment>
    )
  }
}

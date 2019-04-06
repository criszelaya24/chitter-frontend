import React from 'react';
import {Link, withRouter} from 'react-router-dom';

function NavBar() {
  return (
  <nav className="navbar navbar-dark bg-primary fixed-top">
    <Link className="navbar-brand" to="/">
      Chitter App
    </Link>
      <div>
      <Link className="navbar-brand" to="/signup">
        <button className="btn btn-dark">Signup</button>
      </Link>
      </div>
  </nav>
);
}

export default withRouter(NavBar)

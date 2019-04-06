import React from 'react';
import {Link, withRouter} from 'react-router-dom';

function NavBar(props) {
  return (
  <nav className="navbar navbar-dark bg-primary fixed-top">
    <Link className="navbar-brand" to="/">
      Chitter App
    </Link>
      <div>
        <label className="mr-2 text-white"></label>
        <button className="btn btn-dark"></button>
      </div>
    }
  </nav>
);
}

export default withRouter(NavBar)

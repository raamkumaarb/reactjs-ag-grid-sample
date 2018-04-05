import React from 'react';
import { Link } from 'react-router';


class Nav extends React.Component {
   render() {
        return (
            <div>
                <div className="pos-f-t">
                    <div className="collapse" id="navbar-header">
                        <div className="container bg-inverse p-a-1">
                            <h3>Collapsed content</h3>
                            <p>Toggleable via the navbar brand.</p>
                        </div>
                    </div>
                    <nav className="navbar navbar-light navbar-static-top bg-faded">
                        <div className="container">
                            <button className="navbar-toggler hidden-sm-up" type="button" data-toggle="collapse" data-target="#exCollapsingNavbar2">&#9776;</button>
                            <div className="collapse navbar-toggleable-xs" id="exCollapsingNavbar2">
                                <Link className="navbar-brand" to="/">React ag-Grid Sample</Link>
                                <ul className="nav navbar-nav">
                                    <li className="nav-item"><Link to='/' className="nav-link">Home</Link></li>
                                    <li className="nav-item"><Link to='/grid' className="nav-link">Grid</Link></li>
                                    <li className="nav-item"><Link to='/about' className="nav-link">About</Link></li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
          );
       }
    }

export default Nav;
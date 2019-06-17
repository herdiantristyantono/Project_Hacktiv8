import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-dark">
                <h3 className="text-white mr-5">Data Movies Entertainment</h3>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active mr-3 mt-2">
                            <Link to='/' className="text-white">Home<span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item mt-2 mr-3">
                                <Link to='/allFilms' className="text-white">All Films</Link>
                            </li>
                            <li className="nav-item mt-2 mr-3">
                                <Link to='/allCharacters' className="text-white">All Actors</Link>                                
                            </li>
                        </ul>
                        {/* <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to='/login' className="nav-link text-white" tabIndex="-1" aria-disabled="true">Logout</Link>
                            </li>
                        </ul> */}
                    </div>
            </nav>

        );
    }
}

export default Navbar;
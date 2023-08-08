import React from 'react';
import './../Css/Header.css';
import { Link, Outlet } from 'react-router-dom';
function Header() {
    return (
        <div>
            <header>
                <nav>
                    <div class="container">
                        <div class="brand">
                            <a href="">
                                <h4>RMS</h4>
                            </a>
                        </div>
                        <div class="menue">
                            <ul>
                                <li>
                                    <Link to={'/'}>Home</Link>
                                </li>
                                <li>
                                    <Link to={'/results'}>Results</Link>
                                </li>
                                <li>
                                    <Link to={'/about'}>About</Link>
                                </li>
                                <li>
                                    <Link to={'/contact'}>Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <Outlet></Outlet>
            </header>
        </div>
    )
}
export default Header;
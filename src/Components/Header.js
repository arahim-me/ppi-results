import React from 'react';
import './../Css/Header.css';
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
                                <li><a href="">Home</a></li>
                                <li><a href="">Results</a></li>
                                <li><a href="">About</a></li>
                                <li><a href="">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}
export default Header;
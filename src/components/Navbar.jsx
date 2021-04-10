import React from 'react';
import {NavLink} from "react-router-dom";

const Navbar = () => (
    <>
        <nav className="navbar">
            <div className="container">
                <ul className="navbar__items">
                    <li className="navbar__item">
                        <NavLink className="navbar__link" exact to='/'>Все котики</NavLink>
                    </li>
                    <li className="navbar__item">
                        <NavLink className="navbar__link " to='/favorite'>Любимые котики</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    </>

)
export default Navbar;
import React from 'react';
import {NavLink} from "react-router-dom";

const Navbar = () => (
    <>
        <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
            <div className='navbar-brand'>Список дел</div>
            <ul className="navbar-nav nav">
                <li className="nav-item">
                    <NavLink className="nav-link" exact to='/page'>Заметки</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to='/about'>Информация</NavLink>
                </li>
            </ul>
        </nav>
    </>

)
export default Navbar;
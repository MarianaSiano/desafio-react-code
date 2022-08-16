//Importe CSS
import './Navbar.css';

//Importe React
import React from 'react';

//Importe Router
import { Link } from 'react-router-dom';

const Navbar = props => (
    <aside className='navbar'>
        <nav>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>

                <li>
                    <Link to='/sobre'>Sobre</Link>
                </li>
            </ul>
        </nav>
    </aside>
)

export default Navbar
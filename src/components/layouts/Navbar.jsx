//Importe CSS
import '../css/Navbar.css';

//Importe React
import React from 'react';

//Importe Router
import { Link } from 'react-router-dom';

const Navbar = props => (
    <aside className='Navbar'>
        <nav>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>

                <li>
                    <Link to='/sobre'>Sobre</Link>
                </li>

                <li>
                    <Link to='/contato'>Contato</Link>
                </li>

                <li>
                    <Link to='/login'>Login</Link>
                </li>
            </ul>
        </nav>
    </aside>
)

export default Navbar
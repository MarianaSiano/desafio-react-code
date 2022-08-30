//Importe CSS
import '../css/Navbar.css';

//Importe React
import React from 'react';

//Importe Router
import { Link } from 'react-router-dom';

export default function Navbar(props) {
    return (
        <aside className='Navbar'>
            <div className='Logo'>
                <Link to='/'>
                    <img className='img-logo' src='img/logisticajr.png' />
                </Link>
            </div>

            <nav className='links'>
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
                        <Link to='/membros'>Membros</Link>
                    </li>

                    <li>
                        <Link to='/login'>Login</Link>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}
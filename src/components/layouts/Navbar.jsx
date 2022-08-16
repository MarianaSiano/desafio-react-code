//Importe React
import React from 'react';

//Importe Router
import { Link } from 'react-router-dom';

const Menu = props => (
    <aside className='Menu'>
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

export default Menu
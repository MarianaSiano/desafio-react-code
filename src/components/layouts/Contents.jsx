//Import CSS
import '../css/Contents.css'

//Importe React
import React from 'react';

//Importe Route
import { Routes, Route } from 'react-router-dom'

//Importe view
import Home from '../../views/pages/Home';
import Sobre from '../../views/pages/Sobre';
import Contact from '../../views/pages/Contact';
import Login from '../../views/pages/Login';
import Membros from '../../views/pages/Membros';
import NotFound from '../../views/pages/NotFound';

const Content = props => (
    <main className='Contents'>
        <Routes>
            <Route exact path='/' element={<Home />} />

            <Route path='/sobre' element={<Sobre />} />

            <Route path='/contato' element={<Contact />} />

            <Route path='/membros' element={<Membros />} />

            <Route path='/login' element={<Login />} />

            <Route path='*' element={<NotFound />} />
        </Routes>
    </main>
)

export default Content
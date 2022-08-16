//Import CSS
import './Contents.css'

//Importe React
import React from 'react';

//Importe Route
import { Routes, Route } from 'react-router-dom'

//Importe view
import Home from '../../views/pages/Home';
import Sobre from '../../views/pages/Sobre';
import NotFound from '../../views/pages/NotFound';

const Content = props => (
    <main className='Contents'>
        <Routes>
            <Route exact path='/' element={<Home />} />

            <Route path='/sobre' element={<Sobre />} />

            <Route path='*' element={<NotFound />} />
        </Routes>
    </main>
)

export default Content
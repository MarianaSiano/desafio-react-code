//Importe css
import './css/Home.css'

//Importe React
import React from "react";

//Importe Router
import { Link } from 'react-router-dom';

const Home = props => {
    return (
        <div className="Home">
            <div className="logo">
                <Link to=''>
                    <img className='img-moverjr' src='img/moverjr.png' />
                </Link>
            </div>

            <div className="Apresentacao">
                <h1>O mundo não precisa ser do jeito que ele é</h1>
                <p>Buscamos soluções inovadoras em logística dentro da cidade e nas rodovias do Estado e do país.</p>
                <p>Também buscamos soluções inovadores para Gestão Empresarial da melhor forma possível.</p>
                <h2>Agende uma consultoria conosco!!</h2>
                <Link to='/contato'>
                    <button className="entrarContato" type="submit">Entre em contato conosco</button>
                </Link>
            </div>
        </div>
    )
}

export default Home
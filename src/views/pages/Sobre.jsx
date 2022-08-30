//Importe css
import './css/Sobre.css';

//Importe react
import React from "react";
import { Link } from 'react-router-dom';

const Sobre = props => {
    return (
        <div className="Sobre">
            <div className="quem-somos">
                <h3>Quem Somos</h3>
                <p>Nossa Empresa Júnior é uma empresa de consultoria na área de transportes, atuando desde 1992.</p>
                <p>Trabalhamos com consultoria em diversos transportes comerciais, como aviões bimotores, trens e caminhões.</p>
            </div>

            <div className="Empresarial">
                <div className="missao">
                    <Link to=''>
                        <img className='ejMissao' src='img/missao.png' height='200px' width='200px' />
                    </Link>
                </div>
                
                <div className="visao">
                    <Link to=''>
                        <img className='ejVisao' src='img/visao.png' height='200px' width='200px' />
                    </Link>
                </div>

                <div className="valores">
                    <Link to=''>
                        <img className='ejValores' src='img/valores.png' height='200px' width='200px' />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Sobre
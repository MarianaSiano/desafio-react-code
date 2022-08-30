//Importe css
import './css/Sobre.css';

//Importe react
import React from "react";
import { Link } from 'react-router-dom';

const Sobre = props => {
    return (
        <div className="Sobre">
            <div className="quem-somos">
                <h1>Quem Somos</h1>
                <p>Nossa Empresa Júnior é uma empresa de consultoria na área de transportes, atuando desde 1992.</p>
                <p>Trabalhamos com consultoria em diversos transportes comerciais, como aviões bimotores, trens e caminhões.</p>
            </div>

            <div className="Empresarial">
                <div className="missao">
                    <Link to=''>
                        <img className='ejMissao' src='img/missao.png' height='200px' width='200px' />
                    </Link>

                    <p>Organizar a Gestão Empresarial e consultar as melhores rotas logísticas dentro e fora da cidade e com o combustível que não tem 0% ou quase isso de malefeitos ao meio ambiente e a saúde da população.</p>
                </div>
                
                <div className="visao">
                    <Link to=''>
                        <img className='ejVisao' src='img/visao.png' height='200px' width='200px' />
                    </Link>

                    <p>Ser uma Empreja Júnior de refêrencia em Logística Rodoviária e Gestão Empresarial do Estado de Santa Catarina, do Brasil e do Mundo.</p>
                </div>

                <div className="valores">
                    <Link to=''>
                        <img className='ejValores' src='img/valores.png' height='200px' width='200px' />
                    </Link>

                    <p>Respeito com o Meio-Ambiente; Responsabilidade Social; Satisfação do Cliente; Valorização e respeito às pessoas.</p>
                </div>
            </div>
        </div>
    )
}

export default Sobre
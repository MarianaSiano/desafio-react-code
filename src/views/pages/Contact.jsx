//Importe css
import './css/Contact.css'

//Importe React
import React from "react";
import { Link } from 'react-router-dom';

const Contact = props => {
    return (
        <div className="Contact">
            <h2>Entre em contato conosco!!</h2>

            <form action="" className='formContato'>
                <div className='img-Contato'>
                    <Link to=''>
                        <img className='imgEj' src='img/moverjr.png' height='400px' width='430px' />
                    </Link>
                </div>

                <div className="nome">
                    <label htmlFor="nome" id='nome'><p>Nome</p></label>
                    <input type="text" className="nome" placeholder="Nome" />
                </div>

                <div className="email">
                    <label htmlFor="email" id='email'><p>E-mail</p></label>
                    <input type="text" className="email" placeholder="E-mail" />
                </div>

                <div className="telefone">
                    <label htmlFor="Telefone" id='Telefone'><p>Telefone</p></label>
                    <input type="text" className="telefone" placeholder="Telefone" />
                </div>

                <div id="assunto">
                    <label htmlFor="assunto" id='assunto'><p>Assunto</p></label>
                    <input type="text" className="assunto" placeholder="Assunto" />
                </div>

                <Link to='/contato'>
                    <button className="botaoContato" type="submit">Entrar em contato</button>
                </Link>
            </form>
        </div>
    )
}

export default Contact
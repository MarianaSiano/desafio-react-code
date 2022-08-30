//Importe css
import './css/Senha.css';

//Importe React
import React from "react";
import { Link } from 'react-router-dom';

const Senha = props => {
    return (
        <div className="Senha">
            <h2>Esqueceu a senha?</h2>

            <div className='img'>
                <Link to=''>
                    <img className='imgEj' src='img/moverjr.png' height='400px' width='430px' />
                </Link>
            </div>

            <form action="" className="fogoutPassword">
                <div className='novaSenha'>
                    <label htmlFor="password" id='password'><p>Digite a nova senha</p></label>
                    <input type="password" className="password" placeholder='Nova senha' />
                </div>

                <div className='reescreverSenha'>
                    <label htmlFor="password" id='password'><p>Redigite a senha</p></label>
                    <input type="password" className="novaSenha" placeholder='Nova senha' />
                </div>

                <Link to='/membros'>
                    <button className="botaoSenha" type="submit">Cadastrar</button>
                </Link>
            </form>
        </div>
    )
}

export default Senha;
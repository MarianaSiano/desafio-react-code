import './css/Login.css';

import React from "react";
import { Link } from 'react-router-dom';
import PageTitle from '../../components/layouts/PageTitle';

const Login = props => {
    return (
        <div className="Login">
            <PageTitle title="Login" subtitle="É membro? Faça seu login!" />

            <form method='' action='/login'>
                <div className='email'>
                <label htmlFor="password" id='password'><p><strong>Login (E-mail cadastrado)</strong></p></label>
                    <input type="text" className="input" placeholder="E-mail" />
                </div>

                <div className='senha'>
                    <label htmlFor="password" id='password'><p><strong>Senha</strong></p></label>
                    <input type="password" className="input" placeholder='Senha' />
                </div>

                <button className="btn" type="submit">Entrar</button>
                
                {/*<div id='rememberMe'>
                    <input type='checkbox' value='' />
                    <label htmlFor="rememberMe">Remember me</label>
                </div>*/}

                <div id='forgotPassword'>
                    <span><Link to='#'>Esqueceu a senha?</Link></span>
                </div>
            </form>

        </div>
    )
}

export default Login
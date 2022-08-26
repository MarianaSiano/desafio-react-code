import './css/Login.css';

import React from "react";
import PageTitle from '../../components/layouts/PageTitle';

const Login = props => {
    return (
        <div className="Login">
            <PageTitle title="Login" subtitle="É membro? Faça seu login!" />

            <form className='formLogin'>
                <div className='email'>
                <label htmlFor="password" id='password'><p><strong>Login (E-mail cadastrado)</strong></p></label>
                    <input type="text" className="input" placeholder="E-mail" />
                </div>

                <div className='senha'>
                    <label htmlFor="password" id='password'><p><strong>Senha</strong></p></label>
                    <input type="password" className="input" placeholder='Senha' />
                </div>

                <div>
                    <label htmlFor="rememberMe">Remember me</label>
                </div>

                <button className="btn" type="submit">Entrar</button>
            </form>

        </div>
    )
}

export default Login
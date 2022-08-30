//Importe css
import './css/Login.css';

//Importe React
import React from "react";
import { Link } from 'react-router-dom';

//Importe Components
import PageTitle from '../../components/layouts/PageTitle';

const Login = props => {
    return (
        <div className="Login">
            <PageTitle title="Login" subtitle="É membro? Faça seu login!" />

            <form method='' action='/login'>                
                <div className='email'>
                    <label htmlFor="login" id='login'><p>Login (E-mail cadastrado)</p></label>
                    <input type="text" className="login" placeholder="E-mail" />
                </div>

                <div className='senha'>
                    <label htmlFor="password" id='password'><p>Senha</p></label>
                    <input type="password" className="password" placeholder='Senha' />
                </div>

                <Link to='/'>
                    <button className="btn" type="submit">Entrar</button>
                </Link>
                
                {/*<div id='rememberMe'>
                    <input type='checkbox' value='' />
                    <label htmlFor="rememberMe">Remember me</label>
                </div>*/}

                
                <div id='ehMembro'>
                    <span>Já é membro? <Link to='/cadastro'>Cadastre-se</Link></span>
                </div>

                <div id='forgotPassword'>
                    <span><Link to='/senha'>Esqueceu a senha?</Link></span>
                </div>
            </form>

        </div>
    )
}

export default Login
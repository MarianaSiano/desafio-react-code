import './css/Login.css';

import React from "react";
import { useState } from 'react';
import PageTitle from '../../components/layouts/PageTitle';

const Login = props => {
    const [name, setName] = useState("");
    const [senha, setSenha] = useState("");

    function senhaCorreta(senha) {
        if(senha === this.senha) {
            //Entrar na dashboard
        }

        else {
            //Retornar senha incorreta
        }
    }

    return (
        <div className="Login">
            <PageTitle title="Login" subtitle="Faça seu login" />

            <form className='formLogin'>
                <div className='email'>
                    <input type="text" className="input" placeholder="e-mail" value={name} onChange={e => setName(e.target.value)} />
                </div>

                <div className='senha'>
                    <input type="password" className="input" placeholder='senha' value={senha} onChange={e => setSenha(e.target.value)} />
                </div>

                <button className="btn" type="submit">Entrar</button>
            </form>

        </div>
    )
}

export default Login
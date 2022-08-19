import './css/Login.css';

import React from "react";
import { useState } from 'react';
import PageTitle from '../../components/layouts/PageTitle';

const Login = props => {
    const [name, setName] = useState("")
    const [senha, setSenha] = useState("")

    return (
        <div className="Login">
            <PageTitle title="Login" subtitle="Faça seu login" />

            <div className='email'>
                <input type="text" className="input" placeholder="e-mail" value={name} onChange={e => setName(e.target.value)} />
            </div>

            <div className='senha'>
                <input type="password" className="input" placeholder='senha' value={senha} onChange={e => setSenha(e.target.value)} />
            </div>
        </div>
    )
}

export default Login
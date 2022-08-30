import React from "react";
import { Link } from 'react-router-dom';

const Cadastro = props => {
    return (
        <div className="Cadastro">
            <h2>Cadastro</h2>

            <form action="" className="formCadastro">
                <div className='email'>
                    <label htmlFor="email" id='email'><p>E-mail</p></label>
                    <input type="text" className="input" placeholder="E-mail" />
                </div>

                <div className='senha'>
                    <label htmlFor="password" id='password'><p>Senha</p></label>
                    <input type="password" className="input" placeholder='Senha' />
                </div>

                <div className='nome'>
                    <label htmlFor="nome" id='nome'><p>Nome</p></label>
                    <input type="text" className="input" placeholder='Nome' />
                </div>

                <div className='cargo'>
                    <label htmlFor="cargo" id='cargo'><p>Cargo</p></label>
                    <input type="text" className="input" placeholder='Cargo' />
                </div>

                <div className='Departamento'>
                    <label htmlFor="departamento" id='departamento'><p>Departamento</p></label>
                    <input type="text" className="input" placeholder='Departamento' />
                </div>

                <div className='aniversario'>
                    <label htmlFor="birthday" id='birthday'><p>Aniversário</p></label>
                    <input type="text" className="input" placeholder='Aniversário' />
                </div>

                <Link to='/membros'>
                    <button className="botao" type="submit">Cadastrar</button>
                </Link>
            </form>
        </div>
    )
}

export default Cadastro
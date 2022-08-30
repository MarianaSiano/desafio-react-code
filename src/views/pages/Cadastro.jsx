import React from "react";

const Cadastro = props => {
    return (
        <div className="Cadastro">
            <form action="" className="formCadastro">
                <div className='email'>
                    <label htmlFor="email" id='email'><p>E-mail</p></label>
                    <input type="text" className="input" placeholder="E-mail" />
                </div>
            </form>
        </div>
    )
}

export default Cadastro
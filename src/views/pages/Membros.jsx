//React
import React, { useState, useEffect } from "react";

//Card
import Card from '../../components/layouts/Card';

//CSS
import './css/Membros.css';

export default function Membros() {
    const [membros, setMembros] = useState([]);
    const getMembros = async (url) => {
        const resultado = await fetch(url);
        const data = await resultado.json();

        setMembros(data);
    }

    useEffect(() => {
        const membrosUrl = "http://localhost:5000/members";
        getMembros(membrosUrl);
    }, [])

    return (
        <div className="Membros">
            <h1>Membros da Empresa</h1>
            <div className="Juniores">
                <br />
                {    
                    membros.map((membro, index) => (
                        <Card key={index} 
                        id={membro.id}
                        name={membro.name}
                        email={membro.email}
                        office={membro.cargo}
                        departaments={membro.departamentos}
                        birthday={membro.aniversario}
                        />
                        
                        ))
                }
            </div>
        </div>
    )
}
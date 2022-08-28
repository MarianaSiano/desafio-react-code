//React
import React, { useState, useEffect } from "react";

//Card
import Card from '../../components/layouts/Card';

//CSS
import './css/Membros.css';

const Membros = props => {
    function Membros() {
        const [membros, setMembros] = useState([])
        const getMembros = async(url) => {
            const resposta = await fetch(url);
            const data = await resposta.json();

            setMembros(data);
        }
    }

    useEffect(() => {
        const membrosUrl = "http://localhost:9000/membros";
    }, [])

    return (
        <div className="Membros"></div>
    )
}

export default Membros
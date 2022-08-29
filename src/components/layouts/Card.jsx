import '../css/Card.css'
import React from "react";

export default function Card(props) {
    return (
        <div className="Card">
            <div className="Empresa">
                <h2>{props.name}</h2>
                <h3>{props.email}</h3>
                <h3>{props.office}</h3>
                <h3>{props.departaments.map(index => index + '; ')}</h3>
                <h3>{props.birthday}</h3>
            </div>
        </div>
    )
}
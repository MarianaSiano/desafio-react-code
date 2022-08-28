import '../css/Card.css'
import React from "react";

export default function Card(props) {
    return (
        <div className="Card">
            <div className="Empresa">
                <h1>{props.name}</h1>
                <h2>{props.email}</h2>
                <h2>{props.office}</h2>
                <h2>{props.departaments}</h2>
                <h2>{props.birthday}</h2>
            </div>
        </div>
    )
}
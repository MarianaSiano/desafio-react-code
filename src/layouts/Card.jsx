//Importes "Externos"
//css
import './Card.css'

//Importe de React
import React from "react";

export default props => {

    const cardStyle = {
        backgroundColor: props.color || '#F00',
        borderColor: props.color || '#F00'
    }

    return (
        <div className='Card' style={cardStyle}>
            <div className='Tittle'>{props.titulo}</div>
            <div className='Content'>
                {props.children}
            </div>
        </div>
    )
}
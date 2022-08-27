import '../css/Card.css'
import React from "react";

export default props => {
    const cardStyle = {
        backgroudColor: '#FFB1A5',
        borderColor: '#FFBBA5'
    }
    return (
        <div className="Card">
            <div className="Members">
                {props.children}
            </div>
        </div>
    )
}
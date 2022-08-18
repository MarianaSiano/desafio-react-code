import '../css/PageTitle.css'
import React from 'react'

const PageTitle = props => (
    <div className={`PageTitle ${props.error ? "error" : ""}`}>
        <h2>{props.title}</h2>
        <p>{props.subtitle}</p>
    </div>
)

export default PageTitle
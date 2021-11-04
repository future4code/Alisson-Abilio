import React from "react";
import './CardPequeno.css'


function CardPequeno (props){

    return(
        <div >
            <p className="card-pequeno">{props.email}</p>
            <p className="card-pequeno">{props.endereco}</p>
        </div>

    )

} export default CardPequeno;

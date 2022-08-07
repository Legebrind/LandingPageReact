import React from "react";
import Card from "./card.jsx";

const CardHolder = (numero)=>{
    
    return(
        <div className="d-flex">
            <Card /><Card /><Card /><Card />
        </div>
        
    )
}

export default CardHolder;
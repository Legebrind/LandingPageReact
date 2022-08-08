import React from "react";
import Card from "./card.jsx";

const CardHolder = (numero)=>{
    
    return(
        <div className="d-flex mx-4 mt-5">
            <Card /><Card /><Card /><Card />
        </div>
        
    )
}

export default CardHolder;
import React from "react";
export const Card = props => {
    return <div>
        <p style={{fontFamily:"monospace",fontWeight:"550",fontSize:"1.2rem"}} key={props.id} >{`${props.card.firstName} ${props.card.lastName}`}</p>
    </div>
}

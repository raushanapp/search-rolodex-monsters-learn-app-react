import React from "react";
import "./card-list.styles.css"
import { Card } from "../card/card-components";
export const CardList = props => {
    return <div className="card-list">
        {props?.monsters.map((users)=>(<Card key={users.id} card={users} />))}
    </div>
}
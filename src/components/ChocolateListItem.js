import React from "react";
import { Link } from "react-router-dom";

export default function ChocolateListItem({  id,image,name, handleChocolate }) {
    return <div className="box column is-one-third" style={{margin:'auto',padding:'50px'}}>
            <Link to = { `/chocolates/${id}` } onClick={handleChocolate}>
                <div>
                    <div><b>{name}</b>
                    </div><br /><br /><img src={image} alt=""/> 
                </div>
            </Link>
        </div>  
}
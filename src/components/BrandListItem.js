import React from "react";
import { Link } from "react-router-dom";

export function BrandListItem({ name, id, logo, handleBrandDetails }) {
  return (
    <div className="box column is-one-third" style={{margin:'auto',padding:'50px'}}>
      <div >
        <Link to={`/brands/${id}`}>
          <div>
            <b>{name}</b>
          </div>
          <img src={logo} alt={name}/>
        </Link>
      </div>
    </div>
  );
}

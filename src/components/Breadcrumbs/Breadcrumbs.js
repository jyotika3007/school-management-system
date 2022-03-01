import React from "react";

function Breadcrumbs({title}){
    return(
        <div className="breadcrumbs-area">
                    <h3>{title}</h3>
                    <ul>
                        <li>
                            <a href="index.html">{title}</a>
                        </li>
                    </ul>
                </div>
    )
}


export default Breadcrumbs;
import React from "react";
import './index.css'

export default function (props) {
    return (
        <div className="mainBox">
            {props.children}
        </div>
    )
}

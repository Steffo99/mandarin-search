import React from "react";
import Entity from "./Entity";
import ActionButton from "./ActionButton";


export default function Layer({data, className}) {
    return (
        <Entity
            className={className}
            title={data["name"]}
            button={<ActionButton/>}
        >
            {data["description"] ? data["description"] : <i className={"halfparent"}>Nessuna descrizione.</i>}
        </Entity>
    )
}

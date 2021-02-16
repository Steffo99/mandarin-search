import React from "react";
import Style from "./Song.module.css";
import classNames from "classnames";
import Entity from "./Entity";
import ActionButton from "./ActionButton";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDownload} from "@fortawesome/free-solid-svg-icons";


export default function Song({data, className}) {
    return (
        <Entity
            className={classNames(Style.Song, className)}
            title={data["title"]}
            button={<ActionButton><FontAwesomeIcon icon={faDownload}/></ActionButton>}
        >
            {data["description"] ? data["description"] : <i className={"halfparent"}>Nessuna descrizione.</i>}
        </Entity>
    )
}

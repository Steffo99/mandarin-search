import React, {useState, useContext} from "react";
import Entity from "./Entity";
import ActionButton from "./ActionButton";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye, faDownload, faPlay, faPause, faSpinner} from "@fortawesome/free-solid-svg-icons";
import {useAuth0} from "@auth0/auth0-react";
import ContextInstance from "../contexts/ContextInstance";


export default function Song({data, className}) {
    const {getAccessTokenSilently} = useAuth0();
    const instance = useContext(ContextInstance);
    const [playState, setPlayState] = useState("unloaded");

    let button;

    async function loadSong() {
        console.debug("Getting access token...")
        const accessToken = await getAccessTokenSilently();

        const layerId = data["layers"][0]["id"]
        console.debug("Layer id is: ", layerId)

        console.debug("Downloading layer...")
        const url = new URL(`${instance}/layers/${layerId}/download`);
        console.debug("Querying the API...")
        const layerResponse = await fetch(url.toString(), {
            headers: {
                "Authorization": `Bearer ${accessToken}`
            }
        });
        // TODO
    }

    if(data["layers"].length === 0) {
        button = null;
    }
    else if(data["layers"].length > 1) {
        button = (
            <ActionButton><FontAwesomeIcon icon={faEye}/></ActionButton>
        )
    }
    else {
        if (playState === "unloaded") {
            button = (
                <ActionButton><FontAwesomeIcon icon={faDownload}/></ActionButton>
            )
        } else if (playState === "paused") {
            button = (
                <ActionButton><FontAwesomeIcon icon={faPlay}/></ActionButton>
            )
        } else if (playState === "loading") {
            button = (
                <ActionButton><FontAwesomeIcon icon={faSpinner} pulse={true}/></ActionButton>
            )
        } else {
            button = (
                <ActionButton><FontAwesomeIcon icon={faPause}/></ActionButton>
            )
        }
    }

    return (
        <Entity
            className={className}
            title={data["title"]}
            button={button}
        >
            {data["description"] ? data["description"] : <i className={"halfparent"}>Nessuna descrizione.</i>}
        </Entity>
    )
}

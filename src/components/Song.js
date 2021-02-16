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
    const [isDownloading, setDownloading] = useState(false);
    const [player, setPlayer] = useState(null);
    const [isPlaying, setPlaying] = useState(false);

    let button;

    async function loadSong() {
        setDownloading(true);

        console.debug("Getting access token...")
        const accessToken = await getAccessTokenSilently();

        const layerId = data["layers"][0]["id"]
        console.debug("Layer id is: ", layerId)

        console.debug("Downloading layer...")
        const url = new URL(`${instance}/layers/${layerId}/download`);
        console.debug("Querying the API...")
        const songResponse = await fetch(url.toString(), {
            headers: {
                "Authorization": `Bearer ${accessToken}`
            }
        });
        const songBlob = await songResponse.blob();

        console.debug("Download succesful, creating blob url...")
        const songObjectUrl = URL.createObjectURL(songBlob);

        console.debug("Creating player...")
        const songPlayer = new Audio(songObjectUrl);

        console.debug("Player: ", songPlayer)
        setPlayer(songPlayer);
        setDownloading(false);
    }

    function playSong() {
        player.play();
        setPlaying(true);
    }

    function pauseSong() {
        player.pause();
        setPlaying(false);
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
        if (isDownloading) {
            button = (
                <ActionButton><FontAwesomeIcon icon={faSpinner} pulse={true}/></ActionButton>
            )
        } else if (player === null) {
            button = (
                <ActionButton onClick={loadSong}><FontAwesomeIcon icon={faDownload}/></ActionButton>
            )
        } else if (!isPlaying) {
            button = (
                <ActionButton onClick={playSong}><FontAwesomeIcon icon={faPlay}/></ActionButton>
            )
        } else {
            button = (
                <ActionButton onClick={pauseSong}><FontAwesomeIcon icon={faPause}/></ActionButton>
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

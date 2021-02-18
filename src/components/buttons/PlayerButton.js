import React, {useContext, useState} from "react"
import {useAuth0} from "@auth0/auth0-react"
import ContextInstance from "../../contexts/ContextInstance"
import Button from "./Button"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faDownload, faPause, faPlay, faSpinner} from "@fortawesome/free-solid-svg-icons"


export default function PlayerButton({className, data, size}) {
    const {getAccessTokenSilently} = useAuth0()
    const instance = useContext(ContextInstance)

    const [player, setPlayer] = useState(null)

    const [isDownloading, setDownloading] = useState(false)
    const [isPlaying, setPlaying] = useState(false)

    async function downloadLayer() {
        console.info(`Downloading layer ${data["id"]}`)

        console.debug("Setting isDownloading...")
        setDownloading(true)

        console.debug("Getting API access token...")
        const accessToken = await getAccessTokenSilently()

        console.debug("Making the API request...")
        const url = new URL(`${instance}/layers/${data["id"]}/download`)
        const songResponse = await fetch(url.toString(), {
            headers: {
                "Authorization": `Bearer ${accessToken}`
            }
        })

        console.debug("Creating blob...")
        const songBlob = await songResponse.blob()
        const songObjectUrl = URL.createObjectURL(songBlob)

        console.debug("Creating player...")
        const songPlayer = new Audio(songObjectUrl)

        console.debug("Updating button state...")
        setPlayer(songPlayer)
        setDownloading(false)

        console.info("Download successful!")
    }

    function playLayer() {
        if (isPlaying) {
            console.error("Tried to play a song that was already playing.")
            return
        }

        player.play()
        setPlaying(true)
    }

    function pauseLayer() {
        if (!isPlaying) {
            console.error("Tried to pause a song which wasn't playing.")
            return
        }

        player.pause()
        setPlaying(false)
    }

    function selectIcon() {
        if (isDownloading) {
            return <FontAwesomeIcon icon={faSpinner} pulse={true}/>
        }

        if (player === null) {
            return <FontAwesomeIcon icon={faDownload}/>
        }

        if (isPlaying) {
            return <FontAwesomeIcon icon={faPause}/>
        }

        return <FontAwesomeIcon icon={faPlay}/>
    }

    function selectClickAction() {
        if (player === null) {
            return downloadLayer
        }

        if (isPlaying) {
            return pauseLayer
        }

        return playLayer
    }

    return (
        <Button size={size} className={className} onClick={selectClickAction()} disabled={isDownloading}>
            {selectIcon()}
        </Button>
    )
}

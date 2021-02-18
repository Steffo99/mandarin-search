import React, {useContext, useState} from "react"
import {useAuth0} from "@auth0/auth0-react"
import ContextInstance from "../contexts/ContextInstance"
import useWrapper from "./useWrapper"


export default function useSearch() {
    const {getAccessTokenSilently} = useAuth0()
    const instance = useContext(ContextInstance)

    const [type, setType] = useState("songs")
    const [text, setText] = useState("")

    const [weightD, setWeightD] = useState(0.1)
    const [weightC, setWeightC] = useState(0.2)
    const [weightB, setWeightB] = useState(0.4)
    const [weightA, setWeightA] = useState(1.0)

    const [norm1, setNorm1] = useState(false)
    const [norm2, setNorm2] = useState(false)
    const [norm4, setNorm4] = useState(false)
    const [norm8, setNorm8] = useState(false)
    const [norm16, setNorm16] = useState(false)
    const [norm32, setNorm32] = useState(false)
    const norm = (
        norm1 * 1 +
        norm2 * 2 +
        norm4 * 4 +
        norm8 * 8 +
        norm16 * 16 +
        norm32 * 32
    )
    function setNorm(value) {
        setNorm1(Boolean(value & 1))
        setNorm2(Boolean(value & 2))
        setNorm4(Boolean(value & 4))
        setNorm8(Boolean(value & 8))
        setNorm16(Boolean(value & 16))
        setNorm32(Boolean(value & 32))
    }

    const [filterGenre, setFilterGenre] = useState(null)

    const [results, setResults] = useState(null)

    const {wrapped: search, isLoading, error} = useWrapper("Search", async function () {
        if (text === "") {
            console.info("[Search] Clearing search results.")
            setResults(null)
            return
        }

        console.debug("[Search] Getting API access token...")
        const accessToken = await getAccessTokenSilently({})

        console.debug("[Search] Determining mode...")
        const mode = filterGenre === null ? "results" : "thesaurus"

        console.info(`[Search] Searching: ${type} | ${text}`)


        console.debug("[Search] Building URL...")
        const url = new URL(`${instance}/search/${mode}`)
        url.search = new URLSearchParams({
            "element_type": type.toString(),
            "query": text.toString(),
            "weight_d": weightD.toString(),
            "weight_c": weightC.toString(),
            "weight_b": weightB.toString(),
            "weight_a": weightA.toString(),
            "norm_1": norm1.toString(),
            "norm_2": norm2.toString(),
            "norm_4": norm4.toString(),
            "norm_8": norm8.toString(),
            "norm_16": norm16.toString(),
            "norm_32": norm32.toString(),
            ...(filterGenre === null ? {} : {
                "filter_genre_id": filterGenre["id"].toString()
            })
        }).toString()

        console.debug("[Search] Fetching an API response...")
        const response = await fetch(url.toString(), {
            headers: {
                "Authorization": `Bearer ${accessToken}`
            }
        })

        console.debug("[Search] Parsing JSON...")
        const data = await response.json()

        const results = {type, data}
        console.debug("[Search] Setting results: ", results)
        setResults(results)

        console.info("[Search] Success!")
    })

    return {
        search,
        isLoading,
        results,
        error,
        type,
        setType,
        text,
        setText,
        weightD,
        setWeightD,
        weightC,
        setWeightC,
        weightB,
        setWeightB,
        weightA,
        setWeightA,
        norm1,
        setNorm1,
        norm2,
        setNorm2,
        norm4,
        setNorm4,
        norm8,
        setNorm8,
        norm16,
        setNorm16,
        norm32,
        setNorm32,
        norm,
        setNorm,
        filterGenre,
        setFilterGenre,
    }
}
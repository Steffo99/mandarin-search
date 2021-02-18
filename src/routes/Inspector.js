import React from "react"
import {Link} from "@reach/router"
import Logo from "../components/Logo"
import useData from "../hooks/useData"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faExclamationCircle, faSpinner} from "@fortawesome/free-solid-svg-icons"
import SearchBar from "../components/SearchBar"
import ResultsLayout from "../components/layouts/ResultsLayout"


export default function Inspector({
    search,
    elementType,
    id,
    RendererType,
    LinkType,
    ButtonType,
}) {
    const {data, error, isLoading} = useData(`/${elementType}/${id}`)

    const logo = <Logo/>
    const searchBar = <SearchBar search={search}/>
    let title
    let contents

    if (error) {
        title = (
            <span><FontAwesomeIcon icon={faExclamationCircle}/> Errore</span>
        )
        console.error(error)
    }

    else if (isLoading) {
        title = (
            <span><FontAwesomeIcon icon={faSpinner} pulse={true}/> Caricamento...</span>
        )
    }

    else {
        let button
        if(ButtonType) {
            button = <ButtonType data={data} size={"x-large"}/>
        }
        title = (
            <h1>
                {button} <LinkType data={data}/>
            </h1>
        )
        contents = (
            <RendererType data={data} search={search}/>
        )
    }

    return (
        <ResultsLayout logo={logo} searchBar={searchBar}>
            {title}
            {contents}
        </ResultsLayout>
    )
}

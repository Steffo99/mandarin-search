import React from "react";
import {Link} from "@reach/router";
import Logo from "../components/Logo";
import useData from "../hooks/useData";
import DisplayLayout from "../components/layouts/DisplayLayout";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faExclamationCircle, faSpinner} from "@fortawesome/free-solid-svg-icons";


export default function Inspector({
    elementType,
    id,
    RendererType,
    LinkType
}) {
    const {data, error, isLoading} = useData(`/${elementType}/${id}`)

    const logo = (
        <Link to={"/"}><Logo/></Link>
    )

    if(error) {
        const error = (
            <span><FontAwesomeIcon icon={faExclamationCircle}/> Errore</span>
        )
        console.error(error);
        return (
            <DisplayLayout logo={logo} title={error}/>
        )
    }

    if(isLoading) {
        const loading = (
            <span><FontAwesomeIcon icon={faSpinner} pulse={true}/> Caricamento...</span>
        )

        return (
            <DisplayLayout logo={logo} title={loading}/>
        )
    }

    return (
        <DisplayLayout logo={logo} title={<LinkType data={data}/>}>
            <RendererType data={data}/>
        </DisplayLayout>
    )
}

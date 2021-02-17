import React, {useContext, useState, useEffect} from "react";
import {useAuth0} from "@auth0/auth0-react";
import ContextInstance from "../contexts/ContextInstance";


export default function useData(path) {
    const {getAccessTokenSilently, isAuthenticated} = useAuth0();
    const instance = useContext(ContextInstance);
    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if(!path) {
            setError("No path set.")
            return;
        }

        console.debug("Getting access token...")
        getAccessTokenSilently({}).then((accessToken) => {
            console.debug("Building the URL...")
            const url = new URL(`${instance}${path}`);
            return fetch(url.toString(), {
                headers: {
                    "Authorization": `Bearer ${accessToken}`
                }
            });
        }).then((response) => {
            return response.json();
        }).then((data) => {
            setData(data);
            setLoading(false);
        }).catch((err) => {
            setError(err);
        });
    }, [path])

    return {data, error, isAuthenticated, isLoading};
}
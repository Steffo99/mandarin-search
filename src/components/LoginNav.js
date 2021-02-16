import React, {useState, useContext} from "react";
import Style from "./LoginNav.module.css";
import classNames from "classnames";
import {useAuth0} from "@auth0/auth0-react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faExclamationCircle, faSpinner, faTimes, faUserCircle, faSignInAlt, faSignOutAlt} from "@fortawesome/free-solid-svg-icons";
import ContextInstance from "../contexts/ContextInstance";
import Input from "./inputs/Input";
import Button from "./buttons/Button";


export default function LoginNav({className, clientId, setClientId, domain, setDomain, setInstance}) {
    const {
        error,
        isAuthenticated,
        isLoading,
        user,
        loginWithRedirect,
        logout,
    } = useAuth0();

    const instance = useContext(ContextInstance);

    let loginStatus = null;
    let loginButton = null;

    if(!isAuthenticated) {
        loginStatus = (
            <div>
                <span><FontAwesomeIcon icon={faTimes}/> Not logged in.</span>
            </div>
        )
        loginButton = (
            <div>
                <Input
                    type={"text"}
                    onChange={(e) => setInstance(e.target.value)}
                    value={instance}
                    placeholder={"Instance"}
                />&nbsp;
                <Input
                    type={"text"}
                    onChange={(e) => setDomain(e.target.value)}
                    value={domain}
                    placeholder={"Auth0 Domain"}
                />&nbsp;
                <Input
                    type={"text"}
                    onChange={(e) => setClientId(e.target.value)}
                    value={clientId}
                    placeholder={"Auth0 Client ID"}
                />&nbsp;
                <Button onClick={loginWithRedirect}>
                    <FontAwesomeIcon icon={faSignInAlt}/>
                </Button>
            </div>
        )
    }

    else if(isLoading) {
        loginStatus = (
            <span><FontAwesomeIcon icon={faSpinner} pulse={true}/> Loading...</span>
        )
    }

    else if(error) {
        loginStatus = (
            <span><FontAwesomeIcon icon={faExclamationCircle}/> {error.toString()}</span>
        )
    }

    else if(user) {
        loginStatus = (
            <span><FontAwesomeIcon icon={faUserCircle}/> {user["name"]}</span>
        )
        loginButton = (
            <Button onClick={() => logout({returnTo: window.location.origin})}>
                <FontAwesomeIcon icon={faSignOutAlt}/>
            </Button>
        )
    }

    return (
        <nav className={classNames(Style.LoginNav, className)}>
            <div className={Style.VerticalCenter}>
                {loginStatus}
            </div>
            <div className={Style.VerticalCenter}>
                {loginButton}
            </div>
        </nav>
    )
}

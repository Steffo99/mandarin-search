import React, {useState, useContext} from "react";
import Style from "./LoginNav.module.css";
import classNames from "classnames";
import {useAuth0} from "@auth0/auth0-react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faExclamationCircle, faSpinner, faTimes, faUser} from "@fortawesome/free-solid-svg-icons";
import ContextInstance from "../contexts/ContextInstance";


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
                <span><FontAwesomeIcon icon={faTimes}/> Non hai effettuato il login.</span>
            </div>
        )
        loginButton = (
            <div>
                <input
                    type={"text"}
                    onChange={(e) => setInstance(e.target.value)}
                    value={instance}
                    placeholder={"Istanza"}
                />&nbsp;
                <input
                    type={"text"}
                    onChange={(e) => setDomain(e.target.value)}
                    value={domain}
                    placeholder={"Auth0 Domain"}
                />&nbsp;
                <input
                    type={"text"}
                    onChange={(e) => setClientId(e.target.value)}
                    value={clientId}
                    placeholder={"Auth0 Client ID"}
                />&nbsp;
                <button onClick={loginWithRedirect}>
                    Login
                </button>
            </div>
        )
    }

    else if(isLoading) {
        loginStatus = (
            <span><FontAwesomeIcon icon={faSpinner} pulse={true}/> Caricamento...</span>
        )
    }

    else if(error) {
        loginStatus = (
            <span><FontAwesomeIcon icon={faExclamationCircle}/> {error.toString()}</span>
        )
    }

    else if(user) {
        loginStatus = (
            <span><FontAwesomeIcon icon={faUser}/> {user["name"]}</span>
        )
        loginButton = (
            <button onClick={() => logout({returnTo: window.location.origin})}>
                Logout
            </button>
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

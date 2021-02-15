import React, {useState} from "react";
import Style from "./LoginNav.module.css";
import classNames from "classnames";
import {useAuth0} from "@auth0/auth0-react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faExclamationCircle, faSpinner, faTimes, faUser} from "@fortawesome/free-solid-svg-icons";


export default function LoginNav({className, clientId, setClientId, domain, setDomain}) {

    const {
        error,
        isAuthenticated,
        isLoading,
        user,
        getAccessTokenSilently,
        getAccessTokenWithPopup,
        getIdTokenClaims,
        loginWithRedirect,
        loginWithPopup,
        logout,
    } = useAuth0();

    const [instance, setInstance] = useState("127.0.0.1:30009");
    const [localClientId, setLocalClientId] = useState(clientId);
    const [localDomain, setLocalDomain] = useState(domain);

    function setValues() {
        setDomain(localDomain);
        setClientId(localClientId);
    }

    let loginStatus = null;
    let loginButton = null;

    if(!isAuthenticated) {
        loginStatus = (
            <div>
                <span className={Style.LoginText}><FontAwesomeIcon icon={faTimes}/> Non hai effettuato il login.</span>
            </div>
        )
        loginButton = (
            <div>
                <label>
                    Istanza&nbsp;
                    <input
                        type={"text"}
                        onChange={(e) => setInstance(e.target.value)}
                        value={instance}
                    />&nbsp;
                </label>
                <label>
                    Auth0 Domain&nbsp;
                    <input
                        type={"text"}
                        onChange={(e) => setLocalDomain(e.target.value)}
                        value={localDomain}
                    />&nbsp;
                </label>
                <label>
                    Auth0 Client ID&nbsp;
                    <input
                        type={"text"}
                        onChange={(e) => setLocalClientId(e.target.value)}
                        value={localClientId}
                    />&nbsp;
                </label>
                <a className={Style.LoginButton} onClick={loginWithRedirect}>
                    Login
                </a>
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
            <span><FontAwesomeIcon className={Style.LoginText} icon={faUser}/> {user["name"]}</span>
        )
        loginButton = (
            <a className={Style.LoginButton} onClick={() => logout({returnTo: window.location.origin})}>
                Logout
            </a>
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

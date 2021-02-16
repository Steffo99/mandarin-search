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

    const [instance, setInstance] = useState("http://127.0.0.1:30009");
    const [localInstance, setLocalInstance] = useState(instance);
    const [localClientId, setLocalClientId] = useState(clientId);
    const [localDomain, setLocalDomain] = useState(domain);

    function setValues() {
        setInstance(localInstance);
        setDomain(localDomain);
        setClientId(localClientId);
    }

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
                <label>
                    Istanza&nbsp;
                    <input
                        type={"text"}
                        onChange={(e) => setLocalInstance(e.target.value)}
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
                <button
                    disabled={localInstance === instance && localDomain === domain && localClientId === clientId}
                    onClick={setValues}
                >
                    Applica
                </button>&nbsp;
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

import React, {useState} from "react";
import {Auth0Provider} from "@auth0/auth0-react";
import Main from "./routes/Main";
import LoginNav from "./components/LoginNav";
import ContextInstance from "./contexts/ContextInstance";
import {Router} from "@reach/router";

function App() {
    const [domain, setDomain] = useState("mandarin.eu.auth0.com")
    const [clientId, setClientId] = useState("IJ2VcIYHVkKVpIy02lxr2rMGBibDKuKM")
    const [instance, setInstance] = useState("http://127.0.0.1:30009")

    return (
        <Auth0Provider
            domain={domain}
            clientId={clientId}
            redirectUri={window.location.origin}
        >
            <ContextInstance.Provider value={instance}>
                <Router>
                    <Main path={"/"}/>

                </Router>
                <LoginNav
                    domain={domain}
                    setDomain={setDomain}
                    clientId={clientId}
                    setClientId={setClientId}
                    setInstance={setInstance}
                />
            </ContextInstance.Provider>
        </Auth0Provider>
    );
}

export default App;

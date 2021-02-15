import React, {useState} from "react";
import {Auth0Provider} from "@auth0/auth0-react";
import Main from "./routes/Main";
import LoginNav from "./components/LoginNav";

function App() {
    const [domain, setDomain] = useState("mandarin.eu.auth0.com")
    const [clientId, setClientId] = useState("IJ2VcIYHVkKVpIy02lxr2rMGBibDKuKM")

    return (
        <Auth0Provider
            domain={domain}
            clientId={clientId}
            redirectUri={window.location.origin}
        >
            <Main/>
            <LoginNav
                domain={domain}
                setDomain={setDomain}
                clientId={clientId}
                setClientId={setClientId}
            />
        </Auth0Provider>
    );
}

export default App;

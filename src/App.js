import React, {useState} from "react"
import {Auth0Provider} from "@auth0/auth0-react"
import LoginNav from "./components/LoginNav"
import ContextInstance from "./contexts/ContextInstance"
import MandarinRouter from "./routes/MandarinRouter"

function App() {
    const [domain, setDomain] = useState("mandarin.eu.auth0.com")
    const [clientId, setClientId] = useState("IJ2VcIYHVkKVpIy02lxr2rMGBibDKuKM")
    const [instance, setInstance] = useState("https://api.mandarin.steffo.eu")

    return (
        <Auth0Provider
            domain={domain}
            clientId={clientId}
            redirectUri={window.location.origin}
        >
            <ContextInstance.Provider value={instance}>
                <MandarinRouter/>
                <LoginNav
                    domain={domain}
                    setDomain={setDomain}
                    clientId={clientId}
                    setClientId={setClientId}
                    setInstance={setInstance}
                />
            </ContextInstance.Provider>
        </Auth0Provider>
    )
}

export default App

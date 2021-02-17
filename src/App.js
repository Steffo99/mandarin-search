import React, {useState} from "react";
import {Auth0Provider} from "@auth0/auth0-react";
import Home from "./routes/Home";
import LoginNav from "./components/LoginNav";
import ContextInstance from "./contexts/ContextInstance";
import {Router} from "@reach/router";
import Inspector from "./routes/Inspector";
import RenderAlbum from "./components/renderers/RenderAlbum";
import RenderSong from "./components/renderers/RenderSong";
import RenderPerson from "./components/renderers/RenderPerson";
import LinkAlbum from "./components/links/LinkAlbum";
import LinkSong from "./components/links/LinkSong";
import LinkPerson from "./components/links/LinkPerson";
import RenderLayer from "./components/renderers/RenderLayer";
import LinkLayer from "./components/links/LinkLayer";
import RenderGenre from "./components/renderers/RenderGenre";
import LinkGenre from "./components/links/LinkGenre";

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
                    <Home path={"/"}/>
                    <Inspector path={"/albums/:id"} elementType={"albums"} RendererType={RenderAlbum} LinkType={LinkAlbum}/>
                    <Inspector path={"/songs/:id"} elementType={"songs"} RendererType={RenderSong} LinkType={LinkSong}/>
                    <Inspector path={"/people/:id"} elementType={"people"} RendererType={RenderPerson} LinkType={LinkPerson}/>
                    <Inspector path={"/layers/:id"} elementType={"layers"} RendererType={RenderLayer} LinkType={LinkLayer}/>
                    <Inspector path={"/genres/:id"} elementType={"genres"} RendererType={RenderGenre} LinkType={LinkGenre}/>
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

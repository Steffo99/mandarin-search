import React from "react"
import {Router} from "@reach/router"
import Home from "./Home"
import Inspector from "./Inspector"
import RenderAlbum from "../components/renderers/RenderAlbum"
import LinkAlbum from "../components/links/LinkAlbum"
import RenderSong from "../components/renderers/RenderSong"
import LinkSong from "../components/links/LinkSong"
import RenderPerson from "../components/renderers/RenderPerson"
import LinkPerson from "../components/links/LinkPerson"
import RenderLayer from "../components/renderers/RenderLayer"
import LinkLayer from "../components/links/LinkLayer"
import RenderGenre from "../components/renderers/RenderGenre"
import LinkGenre from "../components/links/LinkGenre"
import useSearch from "../hooks/useSearch"


export default function MandarinRouter() {
    const search = useSearch()

    return (
        <Router>
            <Home path={"/"} search={search}/>
            <Inspector path={"/albums/:id"} elementType={"albums"} RendererType={RenderAlbum} LinkType={LinkAlbum}/>
            <Inspector path={"/songs/:id"} elementType={"songs"} RendererType={RenderSong} LinkType={LinkSong}/>
            <Inspector path={"/people/:id"} elementType={"people"} RendererType={RenderPerson} LinkType={LinkPerson}/>
            <Inspector path={"/layers/:id"} elementType={"layers"} RendererType={RenderLayer} LinkType={LinkLayer}/>
            <Inspector path={"/genres/:id"} elementType={"genres"} RendererType={RenderGenre} LinkType={LinkGenre}/>
        </Router>
    )
}

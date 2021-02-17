import React from "react";
import LinkGenre from "../links/LinkGenre";
import Description from "../Description";
import LinkAlbum from "../links/LinkAlbum";
import GenreTree from "../GenreTree";
import LinkSong from "../links/LinkSong";
import EntitySong from "../entities/EntitySong";


export default function RenderGenre({data}) {
    let tree;
    if(data["supergenre"]) {
        tree = (
            <ul>
                <li>
                    <LinkGenre data={data["supergenre"]}/>
                    <ul>
                        <GenreTree data={data}/>
                    </ul>
                </li>
            </ul>
        )
    }
    else {
        tree = (
            <ul>
                <GenreTree data={data}/>
            </ul>
        )
    }

    const albums = data["albums"].map((album) => [
        <li><LinkAlbum data={album}/></li>
    ])

    const songs = data["songs"].map((song) => [
        <EntitySong data={song}/>
    ])

    return (
        <div>
            <Description text={data["description"]}/>
            <h2>Tree</h2>
            {tree}
            <h2>Albums</h2>
            <ul>
                {albums}
            </ul>
            <h2>Songs</h2>
            {songs}
        </div>
    )
}

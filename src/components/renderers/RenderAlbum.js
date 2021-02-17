import React from "react";
import classNames from "classnames";
import EntitySong from "../entities/EntitySong";
import Field from "../Field";
import LinkGenre from "../links/LinkGenre";
import LinkRole from "../links/LinkRole";
import LinkPerson from "../links/LinkPerson";
import Description from "../Description";


export default function RenderAlbum({data}) {
    data["songs"].sort((a, b) => {
        if(a["disc"] < b["disc"]) return -1;
        if(a["disc"] > b["disc"]) return 1;
        if(a["track"] < b["track"]) return -1;
        if(a["track"] > b["track"]) return 1;
        return 0;
    })

    const genres = data["genres"].map((genre) => (
        <LinkGenre data={genre}/>
    ))

    const involvements = data["involvements"].map((involvement, position) => (
        <Field key={position} title={<LinkRole data={involvement["role"]}/>}>
            <LinkPerson data={involvement["person"]}/>
        </Field>
    ))

    const entities = data["songs"].map((song) => <EntitySong data={song}/>)

    return (
        <div>
            <Description text={data["description"]}/>
            <h2>Attributes</h2>
            {involvements}
            {genres.length >= 1 ?
                <Field title={"Genres"}>
                    {genres}
                </Field>
            : null}
            <h2>Songs</h2>
            {entities}
        </div>
    )
}

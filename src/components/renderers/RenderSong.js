import React from "react";
import classNames from "classnames";
import EntitySong from "../entities/EntitySong";
import Field from "../Field";
import LinkGenre from "../links/LinkGenre";
import LinkRole from "../links/LinkRole";
import LinkPerson from "../links/LinkPerson";
import Description from "../Description";
import Lyrics from "../Lyrics";
import EntityLayer from "../entities/EntityLayer";
import EntityField from "../entities/EntityField";
import Style from "../entities/EntitySong.module.css";
import LinkAlbum from "../links/LinkAlbum";


export default function RenderSong({data}) {
    const genres = data["genres"].map((genre) => (
        <LinkGenre data={genre}/>
    ))

    const involvements = data["involvements"].map((involvement, position) => (
        <Field key={position} title={<LinkRole data={involvement["role"]}/>}>
            <LinkPerson data={involvement["person"]}/>
        </Field>
    ))

    const entities = data["layers"].map((obj) => <EntityLayer data={obj}/>)

    return (
        <div>
            <Description text={data["description"]}/>
            <h2>Lyrics</h2>
            <Lyrics text={data["lyrics"]}/>
            <h2>Attributes</h2>
            {data["album"] ?
                <Field title={"Album"} className={Style.Album}>
                    <LinkAlbum data={data["album"]}/> {data["year"] ? `(${data["year"]})` : null}
                </Field>
            : null}
            {data["disc"] || data["track"] ?
                <Field title={"Position"}>
                    {data["disc"] ? `Disc ${data["disc"]}` : null} {data["track"] ? `- Track ${data["track"]}` : null}
                </Field>
            : null}
            {involvements}
            {genres.length >= 1 ?
                <Field title={"Genres"}>
                    {genres}
                </Field>
            : null}
            <h2>Layers</h2>
            {entities}
        </div>
    )
}

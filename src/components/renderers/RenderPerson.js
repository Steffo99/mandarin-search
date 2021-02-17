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
import LinkSong from "../links/LinkSong";


export default function RenderPerson({data}) {
    const album_involvements = data["album_involvements"].map((involvement, position) => (
        <Field className={Style.Involvement} key={position} title={<LinkRole data={involvement["role"]}/>}>
            <LinkAlbum data={involvement["album"]}/>
        </Field>
    ))

    const song_involvements = data["song_involvements"].map((involvement, position) => (
        <Field className={Style.Involvement} key={position} title={<LinkRole data={involvement["role"]}/>}>
            <LinkSong data={involvement["song"]}/>
        </Field>
    ))

    return (
        <div>
            <Description text={data["description"]}/>
            <h2>Credits</h2>
            {album_involvements}
            {song_involvements}
        </div>
    )
}

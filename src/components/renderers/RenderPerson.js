import React from "react"
import Field from "../Field"
import LinkRole from "../links/LinkRole"
import Description from "../Description"
import Style from "../entities/EntitySong.module.css"
import LinkAlbum from "../links/LinkAlbum"
import LinkSong from "../links/LinkSong"


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

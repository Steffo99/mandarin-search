import React, {Fragment} from "react";
import Style from "./EntitySong.module.css";
import PlayerButton from "../buttons/PlayerButton";
import EntityField from "./EntityField";
import Entity from "./Entity";
import LinkAlbum from "../links/LinkAlbum";
import LinkPerson from "../links/LinkPerson";
import LinkGenre from "../links/LinkGenre";
import LinkSong from "../links/LinkSong";


export default function EntitySong({className, data}) {

    const button = (
        data["layers"].length === 1 ?
            <PlayerButton size={"large"} layerId={data["layers"][0]["id"]}/>
        : null
    );

    const genres = data["genres"].map((genre) => (
        <LinkGenre data={genre}/>
    ))

    const involvements = data["involvements"].map((involvement, position) => (
        <EntityField key={position} title={involvement["role"]["name"]}>
            <LinkPerson data={involvement["person"]}/>
        </EntityField>
    ))

    return (
        <Entity
            button={button}
            title={<LinkSong data={data}/>}
            contents={
                <Fragment>
                    {data["description"] ?
                        <div className={Style.Description}>
                            {data["description"]}
                        </div>
                        : null
                    }
                    {data["lyrics"] ?
                        <div className={Style.Lyrics}>
                            {data["lyrics"]}
                        </div>
                        : null
                    }
                </Fragment>
            }
            fields={
                <Fragment>
                    {data["album"] ?
                        <EntityField title={"Album"} className={Style.Album}>
                            <LinkAlbum data={data["album"]}/> {data["year"] ? `(${data["year"]})` : null} {data["disc"] ? `- Disc ${data["disc"]}` : null} {data["track"] ? `- Track ${data["track"]}` : null}
                        </EntityField>
                    : null}
                    {involvements}
                    {data["genres"] ?
                        <EntityField title={"Genres"} className={Style.Genres}>
                            {genres}
                        </EntityField>
                    : null}
                </Fragment>
            }
            className={className}
        />
    )
}

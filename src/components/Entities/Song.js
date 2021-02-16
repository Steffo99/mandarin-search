import React from "react";
import Style from "./Song.module.css";
import PlayerButton from "../PlayerButton";
import EntityField from "./EntityField";
import Entity from "./Entity";


export default function Song({className, data}) {

    const button = (
        data["layers"].length === 1 ?
            <PlayerButton size={"large"} layerId={data["layers"][0]["id"]}/>
        : null
    );

    const genres = data["genres"].map((genre) => genre["name"]).join(", ")

    const involvements = data["involvements"].map((involvement) => (
        <EntityField title={involvement["role"]["name"]}>
            {involvement["person"]["name"]}
        </EntityField>
    ))

    return (
        <Entity button={button} title={data["title"]} className={className}>
            {data["description"] ?
                <div className={Style.Description}>
                    {data["description"]}
                </div>
            : null}
            {data["lyrics"] ?
                <div className={Style.Lyrics}>
                    {data["lyrics"]}
                </div>
            : null}
            {data["album"] ?
                <EntityField title={"Album"} className={Style.Album}>
                    {data["album"]["title"]} {data["year"] ? `(${data["year"]})` : null} {data["disc"] ? `- Disc ${data["disc"]}` : null} {data["track"] ? `- Track ${data["track"]}` : null}
                </EntityField>
            : null}
            {involvements}
            {data["genres"] ?
                <EntityField title={"Genres"} className={Style.Genres}>
                    {genres}
                </EntityField>
            : null}
        </Entity>
    )
}

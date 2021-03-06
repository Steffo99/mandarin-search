import React, {Fragment} from "react"
import Style from "./EntitySong.module.css"
import PlayerButton from "../buttons/PlayerButton"
import EntityField from "./EntityField"
import Entity from "./Entity"
import LinkAlbum from "../links/LinkAlbum"
import LinkPerson from "../links/LinkPerson"
import LinkGenre from "../links/LinkGenre"
import LinkSong from "../links/LinkSong"
import classNames from "classnames"
import Button from "../buttons/Button"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faLayerGroup, faTimes} from "@fortawesome/free-solid-svg-icons"
import LinkRole from "../links/LinkRole"
import Description from "../Description"
import Lyrics from "../Lyrics"


export default function EntitySong({className, data}) {

    let button
    if (data["layers"].length === 0) {
        button = (
            <Button size={"large"} disabled={true}>
                <FontAwesomeIcon icon={faTimes}/>
            </Button>
        )
    } else if (data["layers"].length > 1) {
        button = (
            <Button size={"large"} disabled={true}>
                <FontAwesomeIcon icon={faLayerGroup}/>
            </Button>
        )
    } else {
        button = (
            <PlayerButton size={"large"} data={data["layers"][0]}/>
        )
    }

    const genres = data["genres"].map((genre) => (
        <LinkGenre key={genre["id"]} data={genre}/>
    ))

    const involvements = data["involvements"].map((involvement, position) => (
        <EntityField className={Style.Involvement} key={position} title={<LinkRole data={involvement["role"]}/>}>
            <LinkPerson data={involvement["person"]}/>
        </EntityField>
    ))

    return (
        <Entity
            button={button}
            title={<LinkSong data={data}/>}
            contents={
                <Fragment>
                    <Description className={Style.Description} text={data["description"]}/>
                    <Lyrics className={Style.Lyrics} text={data["lyrics"]}/>
                </Fragment>
            }
            fields={
                <Fragment>
                    {data["album"] ?
                        <EntityField title={"Album"} className={Style.Album}>
                            <LinkAlbum data={data["album"]}/> {data["year"] ? `(${data["year"]})` : null}
                        </EntityField>
                        : null}
                    {data["disc"] || data["track"] ?
                        <EntityField title={"Position"}>
                            {data["disc"] ? `Disc ${data["disc"]}` : null} {data["track"] ? `- Track ${data["track"]}` : null}
                        </EntityField>
                        : null}
                    {involvements}
                    {genres.length >= 1 ?
                        <EntityField title={"Genres"} className={Style.Genres}>
                            {genres}
                        </EntityField>
                        : null}
                </Fragment>
            }
            className={classNames(Style.EntitySong, className)}
        />
    )
}

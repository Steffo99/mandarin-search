import React, {Fragment} from "react";
import Style from "./EntitySong.module.css";
import PlayerButton from "../buttons/PlayerButton";
import EntityField from "./EntityField";
import Entity from "./Entity";
import LinkAlbum from "../links/LinkAlbum";
import LinkPerson from "../links/LinkPerson";
import LinkGenre from "../links/LinkGenre";
import LinkSong from "../links/LinkSong";
import classNames from "classnames";
import Button from "../buttons/Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLayerGroup, faTimes} from "@fortawesome/free-solid-svg-icons";
import LinkRole from "../links/LinkRole";


export default function EntitySong({className, data}) {

    let button;
    if (data["layers"].length === 0) {
        button = (
            <Button size={"large"} disabled={true}>
                <FontAwesomeIcon icon={faTimes}/>
            </Button>
        );
    } else if(data["layers"].length > 1) {
        button = (
            <Button size={"large"} disabled={true}>
                <FontAwesomeIcon icon={faLayerGroup}/>
            </Button>
        );
    } else {
        button = (
            <PlayerButton size={"large"} layerId={data["layers"][0]["id"]}/>
        );
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
                    <div className={Style.Description}>
                        {data["description"] ?
                            data["description"]
                            :
                            <span className={"halfparent"}>No description.</span>
                        }
                    </div>
                    <div className={Style.Lyrics}>
                        {data["lyrics"] ? data["lyrics"] : <span className={"halfparent"}>No lyrics.</span>}
                    </div>
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

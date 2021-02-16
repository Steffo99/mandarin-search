import React, {Fragment} from "react";
import EntityField from "./EntityField";
import Entity from "./Entity";
import LinkAlbum from "../links/LinkAlbum";
import LinkPerson from "../links/LinkPerson";
import LinkGenre from "../links/LinkGenre";
import Style from "./EntityAlbum.module.css";
import classNames from "classnames";


export default function EntityAlbum({className, data}) {

    const button = null;

    const genres = data["genres"].map((genre) => (
        <LinkGenre data={genre}/>
    ))

    const involvements = data["involvements"].map((involvement, position) => (
        <EntityField className={Style.Involvement} key={position} title={involvement["role"]["name"]}>
            <LinkPerson data={involvement["person"]}/>
        </EntityField>
    ))

    return (
        <Entity
            button={button}
            title={<LinkAlbum data={data}/>}
            contents={
                <div className={Style.Description}>
                    {data["description"] ?
                        data["description"]
                        :
                        <span className={"halfparent"}>No description.</span>
                    }
                </div>
            }
            fields={
                <Fragment>
                    {involvements}
                    {genres.length >= 1 ?
                        <EntityField title={"Genres"} className={Style.Genres}>
                            {genres}
                        </EntityField>
                    : null}
                </Fragment>
            }
            className={classNames(Style.EntityAlbum, className)}
        />
    )
}

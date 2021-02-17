import React, {Fragment} from "react"
import EntityField from "./EntityField"
import Entity from "./Entity"
import LinkAlbum from "../links/LinkAlbum"
import LinkPerson from "../links/LinkPerson"
import LinkGenre from "../links/LinkGenre"
import Style from "./EntityAlbum.module.css"
import classNames from "classnames"
import LinkRole from "../links/LinkRole"
import Description from "../Description"


export default function EntityAlbum({className, data}) {

    const button = null

    const genres = data["genres"].map((genre) => (
        <LinkGenre data={genre}/>
    ))

    const involvements = data["involvements"].map((involvement, position) => (
        <EntityField className={Style.Involvement} key={position} title={<LinkRole data={involvement["role"]}/>}>
            <LinkPerson data={involvement["person"]}/>
        </EntityField>
    ))

    return (
        <Entity
            button={button}
            title={<LinkAlbum data={data}/>}
            contents={
                <Description className={Style.Description} text={data["description"]}/>
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

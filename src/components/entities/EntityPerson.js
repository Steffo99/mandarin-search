import React, {Fragment} from "react";
import EntityField from "./EntityField";
import Entity from "./Entity";
import LinkAlbum from "../links/LinkAlbum";
import LinkPerson from "../links/LinkPerson";
import Style from "./EntityPerson.module.css";
import classNames from "classnames";
import Description from "../Description";
import LinkRole from "../links/LinkRole";


export default function EntityPerson({className, data}) {

    const button = null;

    const album_involvements = data["album_involvements"].map((involvement, position) => (
        <EntityField className={Style.Involvement} key={position} title={<LinkRole data={involvement["role"]}/>}>
            <LinkAlbum data={involvement["album"]}/>
        </EntityField>
    ))

    return (
        <Entity
            button={button}
            title={<LinkPerson data={data}/>}
            contents={
                <Description className={Style.Description} text={data["description"]}/>
            }
            fields={
                <Fragment>
                    {album_involvements}
                </Fragment>
            }
            className={classNames(Style.EntityPerson, className)}
        />
    )
}

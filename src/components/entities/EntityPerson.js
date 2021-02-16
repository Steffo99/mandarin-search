import React, {Fragment} from "react";
import EntityField from "./EntityField";
import Entity from "./Entity";
import LinkAlbum from "../links/LinkAlbum";
import LinkPerson from "../links/LinkPerson";
import Style from "./EntityPerson.module.css";
import classNames from "classnames";


export default function EntityPerson({className, data}) {

    const button = null;

    const album_involvements = data["album_involvements"].map((involvement, position) => (
        <EntityField className={Style.Involvement} key={position} title={involvement["role"]["name"]}>
            <LinkAlbum data={involvement["album"]}/>
        </EntityField>
    ))

    return (
        <Entity
            button={button}
            title={<LinkPerson data={data}/>}
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
                    {album_involvements}
                </Fragment>
            }
            className={classNames(Style.EntityPerson, className)}
        />
    )
}

import React, {Fragment} from "react";
import Style from "./EntityLayer.module.css";
import PlayerButton from "../buttons/PlayerButton";
import EntityField from "./EntityField";
import Entity from "./Entity";
import LinkSong from "../links/LinkSong";
import classNames from "classnames";


export default function EntityLayer({className, data}) {

    const button = (
        <PlayerButton size={"large"} layerId={data["id"]}/>
    );

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
                </Fragment>
            }
            fields={
                <Fragment>
                    {data["song"] ?
                        <EntityField title={"Song"} className={Style.Song}>
                            <LinkSong data={data["song"]}/>
                        </EntityField>
                    : null}
                </Fragment>
            }
            className={classNames(Style.EntitySong, className)}
        />
    )
}

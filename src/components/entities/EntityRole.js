import React from "react"
import Entity from "./Entity"
import Style from "./EntityRole.module.css"
import classNames from "classnames"
import LinkRole from "../links/LinkRole"
import Description from "../Description"


export default function EntityRole({className, data}) {

    const button = null

    return (
        <Entity
            button={button}
            title={<LinkRole data={data}/>}
            contents={
                <Description className={Style.Description} text={data["description"]}/>
            }
            className={classNames(Style.EntityRole, className)}
        />
    )
}

import React from "react";
import Entity from "./Entity";
import Style from "./EntityRole.module.css";
import classNames from "classnames";
import LinkRole from "../links/LinkRole";


export default function EntityRole({className, data}) {

    const button = null;

    return (
        <Entity
            button={button}
            title={<LinkRole data={data}/>}
            contents={
                <div className={Style.Description}>
                    {data["description"] ?
                        data["description"]
                        :
                        <span className={"halfparent"}>No description.</span>
                    }
                </div>
            }
            className={classNames(Style.EntityRole, className)}
        />
    )
}

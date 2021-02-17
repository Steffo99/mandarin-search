import React, {Fragment} from "react"
import EntityField from "./EntityField"
import Entity from "./Entity"
import LinkGenre from "../links/LinkGenre"
import Style from "./EntityGenre.module.css"
import classNames from "classnames"
import Description from "../Description"


export default function EntityGenre({className, data}) {

    const button = null

    const supergenre = (
        <EntityField title={"Supergenre"} className={Style.Supergenre}>
            <LinkGenre data={data["supergenre"]}/>
        </EntityField>
    )
    const subgenres = data["subgenres"].map((genre) => (
        <EntityField key={genre["id"]} title={"Subgenre"} className={Style.Subgenre}>
            <LinkGenre data={genre}/>
        </EntityField>
    ))

    return (
        <Entity
            button={button}
            title={<LinkGenre data={data}/>}
            contents={
                <Description className={Style.Description} text={data["description"]}/>
            }
            fields={
                <Fragment>
                    {data["supergenre"] ? supergenre : null}
                    {data["subgenres"].length >= 1 ? subgenres : null}
                </Fragment>
            }
            className={classNames(Style.EntityGenre, className)}
        />
    )
}

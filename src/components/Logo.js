import React from "react"
import {Link} from "@reach/router"
import Image from "./Logo.png"
import Style from "./Logo.module.css"
import classNames from "classnames"


export default function Logo({className}) {
    return (
        <Link to={"/"}>
            <img
                src={Image}
                alt={"Mandarin"}
                className={classNames(Style.logo, className)}
            />
        </Link>
    )
};
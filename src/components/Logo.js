import React from "react";
import Image from "./Logo.png";
import Style from "./Logo.module.css"
import classNames from "classnames";


export default function Logo({onClick}) {
    return (
        <img
            src={Image}
            alt={"Mandarin"}
            className={classNames(Style.logo, onClick ? Style.Clickable : null)}
            onClick={onClick}
        />
    )
};
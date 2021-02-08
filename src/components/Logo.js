import React from "react";
import Image from "./Logo.png";
import Style from "./Logo.module.css"


export default function Logo() {
    return (
        <img src={Image} alt={"Mandarin"} className={Style.logo}/>
    )
};
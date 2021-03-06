import React, {useState, useContext, Fragment} from "react"
import {useAuth0} from "@auth0/auth0-react"
import {useNavigate} from "@reach/router";
import Style from "./SearchBar.module.css"
import Input from "./inputs/Input"
import SearchButton from "./buttons/SearchButton"
import Select from "./inputs/Select"
import SettingsButton from "./buttons/SettingsButton"
import AdvancedSettings from "./AdvancedSettings"
import classNames from "classnames"
import ContextSearch from "../contexts/ContextSearch"


export default function SearchBar({}) {
    const {isAuthenticated} = useAuth0()
    const navigate = useNavigate()
    const search = useContext(ContextSearch)

    const [showAdvanced, setAdvanced] = useState(false)

    const disabled = (!isAuthenticated || search.isLoading)
    let text
    if (!isAuthenticated) {
        text = "Login required to search ↓"
    } else {
        text = search.text
    }

    function runSearch() {
        search.search()
        navigate("/results")
    }

    function runSearchOnEnter(event) {
        if (event.key === "Enter" && !disabled) {
            runSearch()
        }
    }


    return (
        <div className={Style.searchBlock}>
            <Select
                value={search.type}
                disabled={disabled}
                onChange={(e) => search.setType(e.target.value)}
                className={Style.Select}
            >
                <option value={"songs"}>Songs</option>
                <option value={"albums"}>Albums</option>
                {search.filterGenre ? null :
                    <Fragment>
                        <option value={"people"}>People</option>
                        <option value={"genres"}>Genres</option>
                        <option value={"roles"}>Roles</option>
                        <option value={"layers"}>Layers</option>
                    </Fragment>
                }
            </Select>
            <Input
                value={text}
                disabled={disabled}
                onChange={(e) => search.setText(e.target.value)}
                onKeyPress={runSearchOnEnter}
                className={Style.Input}
            />
            <SearchButton
                className={Style.Search}
                onClick={runSearch}
                disabled={disabled}
                isRunning={search.isLoading}
            />
            <SettingsButton
                className={Style.Settings}
                state={showAdvanced}
                setState={setAdvanced}
                disabled={disabled}
            />
            <AdvancedSettings
                search={search}
                className={classNames(Style.Advanced, showAdvanced ? Style.AdvancedShow : Style.AdvancedHide)}
            />
        </div>
    )
};
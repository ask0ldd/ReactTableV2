/* eslint-disable @typescript-eslint/no-explicit-any */
import './style/SearchModule.css'
import { DatasTableContext } from './DatasTableContext'
import { useContext, useState } from "react"

/**
 * Component : Module adding a search functionality to the datatable.
 * @Component
 * @return ( <SearchModule/> )
 */
function SearchModule() {

    const [inputFocus, setIntputFocus] = useState(false)

    const { dispatch, preset } = useContext(DatasTableContext)
    if(!dispatch) return(<></>)

    const inputStyle = {
        color : preset.searchBar.inputTextColor,
        background : preset.searchBar.inputBackgroundColor,
        border : "1px solid " + preset.searchBar.inputBorderColor,
    }

    const inputStyleFocus = {
        ...inputStyle,
        /*outline: "none",*/
        outline : "1px solid " + preset.searchBar.focusInputBorderColor,
    }

    return (
        <div id="searchContainer">
        <label style={{color : preset.searchBar.labelTextColor}} htmlFor='search'>Search:</label>
        <input onBlur={() => setIntputFocus(prevFocusState => !prevFocusState)} 
            onFocus={() => setIntputFocus(prevFocusState => !prevFocusState)} 
            style={inputFocus ? inputStyleFocus : inputStyle} contentEditable id='search' type="text" 
            onInput={(e)=> dispatch({type : "search", payload : e.currentTarget.value })}
        />
        </div>
    )
    
}

export default SearchModule
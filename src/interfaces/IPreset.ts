import TAlignment from "../types/TAlignment"

/*
add font size
*/

export interface IPreset {
    global :{
        font : string,
        textColor : string,
        backgroundColor : string,
    },
    th : {
        textColor : string,
        textAlign: TAlignment,
        fontWeight: string,
        backgroundColor : string,
        arrow : {activeColor : string, inactiveColor : string}
        separatorColor : string
    },
    evenRow : {
        backgroundColor : {default : string, hover : string},
        textColor : {default : string, hover : string},
        fontWeight: string,
        bottomSeparatorColor : string,
    },
    oddRow : {
        backgroundColor : {default : string, hover : string},
        textColor : {default : string, hover : string},
        fontWeight: string,
        bottomSeparatorColor : string,
    },
    firstnLastRowSeparatorsColor: string,
    paginationButton :
    {
        backgroundColor : {default : string, hover : string},
        textColor : {default : string, hover : string},
        hoverDropShadowColor : string,
        borderColor : string,
    },
    paginationNextPrevious:{
        textColor : string,
    },
    searchBar :
    {
        labelTextColor: string,
        inputBackgroundColor: string,
        inputTextColor:  string,
        inputBorderColor: {default : string, focus : string},
    },
    nEntries : {
        textColor : string,
    },
    selectEntriesPerPage :
    {
        labelTextColor: string,
        selectBackgroundColor: string,
        selectTextColor:  string,
        selectBorderColor: {default : string, focus : string},
        optionsContainerBackgroundColor : string,
        optionsContainerBorderColor : string,
        optionBackgroundColor : {active : string, hover : string}
        hoverOptionTextColor : string,
        arrowColor : string,
    },
    /*setGlobalFont : (font : string) => IPreset,
    setBordersColors : ({_default, focus} : {_default : string, focus : string}) => IPreset,
    setSeparatorColor : (color : string ) => IPreset,
    setTHStyle : ({textColor, background, arrowColor, activeArrowColor} : {textColor : string, background : string, arrowColor : string, activeArrowColor : string}) => IPreset
    setHoveredElementsStyle : ({textColor, background} : {textColor : string, background : string}) => IPreset,
    setOddRowsStyle : ({background, separatorColor} : {background : string, separatorColor : string}) => IPreset,
    setEvenRowsStyle : ({background, separatorColor} : {background : string, separatorColor : string}) => IPreset,*/
    // button style
}
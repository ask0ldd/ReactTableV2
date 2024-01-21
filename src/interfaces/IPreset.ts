/*
add font size
*/

export interface IPreset {
    global :{
        font : string,
        textColor : string,
    },
    th : {
        textColor : string,
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
}
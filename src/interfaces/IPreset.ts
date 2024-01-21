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
        backgroundColor : string,
        textColor : string,
        fontWeight: string,
        hoverBackgroundColor : string,
        hoverTextColor : string,
        bottomSeparatorColor : string,
    },
    oddRow : {
        backgroundColor : string,
        textColor : string,
        fontWeight: string,
        hoverBackgroundColor : string,
        hoverTextColor : string,
        bottomSeparatorColor : string,
    },
    firstnLastRowSeparatorsColor: string,
    paginationButton :
    {
        backgroundColor : string,
        textColor : string,
        hoverBackgroundColor : string,
        hoverTextColor : string,
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
        inputBorderColor: string,
        focusInputBorderColor: string,
    },
    nEntries : {
        textColor : string,
    },
    selectEntriesPerPage :
    {
        labelTextColor: string,
        selectBackgroundColor: string,
        selectTextColor:  string,
        selectBorderColor: string,
        focusSelectBorderColor: string,
        optionsContainerBackgroundColor : string,
        optionsContainerBorderColor : string,
        activeOptionBackgroundColor : string,
        hoverOptionBackgroundColor : string,
        hoverOptionTextColor : string,
        arrowColor : string,
    },
}
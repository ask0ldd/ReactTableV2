import { IPreset } from "../interfaces/IPreset";

export const lightPurplePreset : IPreset = {
    global: {
        font: "Jost",
        textColor: "#213547",
    },
    th: {
        textColor: "#213547",
        fontWeight: "600",
        backgroundColor: "none",
        arrow : {activeColor : "#5e30b4bb", inactiveColor : "#ddd"},
        separatorColor: "#111"
    },
    evenRow: {
        backgroundColor: "none",
        textColor: "#213547",
        fontWeight: "400",
        hoverBackgroundColor: "linear-gradient(90deg, #d422f0aa, #5e30b4bb)",
        hoverTextColor : "#FFFFFF",
        bottomSeparatorColor: "#DDDDDD",
    },
    oddRow: {
        backgroundColor: "#f6f6f6",
        textColor: "#213547",
        fontWeight: "400",
        hoverBackgroundColor: "linear-gradient(90deg, #d422f0aa, #5e30b4bb)",/* */
        hoverTextColor : "#FFFFFF",
        bottomSeparatorColor: "#DDDDDD",
    },
    firstnLastRowSeparatorsColor: "#5e30b4bb",
    paginationButton: {
        backgroundColor: "linear-gradient(to bottom, #fff 0%, #dcdcdc 100%)", 
        textColor: "#213547",
        hoverBackgroundColor: "#5e30b4bb",
        hoverTextColor: "#ffffffcc",
        hoverDropShadowColor : "#5e30b4bb",
        borderColor: "#979797",
    },
    paginationNextPrevious:{
        textColor : "#213547",
    },
    searchBar: {
        labelTextColor: "#454545",
        inputBackgroundColor: "#f6f6f6",
        inputTextColor: "#454545",
        inputBorderColor: "#c5c5c5",
        focusInputBorderColor: "#5e30b4bb"
    },
    nEntries : {
        textColor: "#213547",
    },
    selectEntriesPerPage: {
        labelTextColor: "#454545",
        selectBackgroundColor: "#f6f6f6",
        selectTextColor: "#454545",
        selectBorderColor: "#c5c5c5",
        focusSelectBorderColor: "#5e30b4bb",
        hoverOptionBackgroundColor: "#5e30b4bb",
        hoverOptionTextColor: "#FFFFFF",
        activeOptionBackgroundColor: "#dfdfdf",
        optionsContainerBackgroundColor: "#f6f6f6",
        optionsContainerBorderColor: "#c5c5c5",
        arrowColor: "#213547",
    },
}
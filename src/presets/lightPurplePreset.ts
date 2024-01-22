import { IPreset } from "../interfaces/IPreset";

export const lightPurplePreset : IPreset = {
    global: {
        font: "Jost",
        textColor: "#213547",
        backgroundColor : "#FFFFFF",
    },
    th: {
        textColor: "#213547",
        fontWeight: "600",
        backgroundColor: "none",
        arrow : {activeColor : "#5e30b4bb", inactiveColor : "#ddd"},
        separatorColor: "#111"
    },
    evenRow: {
        backgroundColor : {default : "none", hover : "linear-gradient(90deg, #d422f0aa, #5e30b4bb)"},
        textColor : {default : "#213547", hover : "#FFFFFF"},
        fontWeight: "400",
        bottomSeparatorColor: "#DDDDDD",
    },
    oddRow: {
        backgroundColor : {default : "#f6f6f6", hover : "linear-gradient(90deg, #d422f0aa, #5e30b4bb)"},
        textColor : {default : "#213547", hover : "#FFFFFF"},
        fontWeight: "400",
        bottomSeparatorColor: "#DDDDDD",
    },
    firstnLastRowSeparatorsColor: "#5e30b4bb",
    paginationButton: {
        backgroundColor : {default : "linear-gradient(to bottom, #fff 0%, #dcdcdc 100%)", hover : "#5e30b4bb"},
        textColor : {default : "#213547", hover : "#ffffffcc"},
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
        inputBorderColor: {default : "#c5c5c5", focus : "#5e30b4bb"},
    },
    nEntries : {
        textColor: "#213547",
    },
    selectEntriesPerPage: {
        labelTextColor: "#454545",
        selectBackgroundColor: "#f6f6f6",
        selectTextColor: "#454545",
        hoverOptionTextColor: "#FFFFFF",
        optionsContainerBackgroundColor: "#f6f6f6",
        optionsContainerBorderColor: "#c5c5c5",
        arrowColor: "#213547",
        selectBorderColor: {default : "#c5c5c5", focus : "#5e30b4bb"},
        optionBackgroundColor : {active : "#dfdfdf", hover : "#5e30b4bb"}
    },
    setGlobalFont : function (font : string) : IPreset {
        return {...this, global : {...this.global, font : font}} as IPreset
    },
}
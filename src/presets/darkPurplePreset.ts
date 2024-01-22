import { IPreset } from "../interfaces/IPreset";

/* eslint-disable @typescript-eslint/no-unused-vars */
export const darkPurplePreset : IPreset = {
    global: {
        font: "Jost",
        textColor: "#7D769BDD",
    },
    th: {
        textColor: "#918AAD",
        fontWeight: "600",
        backgroundColor: "#1B1A23",
        arrow : { activeColor : "#693faf", inactiveColor : "#7D769BFF" },
        separatorColor: "#2F2D3B"
    },
    evenRow: {
        backgroundColor : {default : "#0A0A12", hover : "linear-gradient(270deg, #4a2e7a, #693faf)"},
        textColor : {default : "#7D769BDD", hover : "#FFFFFF"},
        fontWeight: "500",
        bottomSeparatorColor: "#2F2D3B",
    },
    oddRow: {
        backgroundColor : {default : "#1B1A23", hover : "linear-gradient(270deg, #4a2e7a, #693faf)"},
        textColor : {default : "#7D769BDD", hover : "#FFFFFF"},
        fontWeight: "500",
        bottomSeparatorColor: "#2F2D3B",
    },
    firstnLastRowSeparatorsColor: "#693faf",
    paginationButton: {
        backgroundColor : {default : "#1B1A23", hover : "#6d40b9"},
        textColor : {default : "#7D769BDD", hover : "#FFFFFF"},
        hoverDropShadowColor : "#6d40b999",
        borderColor: "#2F2D3B",
    },
    paginationNextPrevious:{
        textColor : "#7D769BDD",
    },
    searchBar: {
        labelTextColor: "rgba(125, 118, 155, 0.867)",
        inputBackgroundColor: "rgb(27, 26, 35)",
        inputTextColor: "rgb(145, 138, 173)",
        inputBorderColor: {default : "rgb(47, 45, 59)", focus : "#693faf"},
    },
    nEntries : {
        textColor: "#918AAD",
    },
    selectEntriesPerPage: {
        labelTextColor: "rgba(125, 118, 155, 0.867)",
        selectBackgroundColor: "rgb(27, 26, 35)",
        selectTextColor: "rgb(145, 138, 173)",
        hoverOptionTextColor: "#FFFFFF",
        optionsContainerBackgroundColor: "#1B1A23",
        optionsContainerBorderColor: "rgba(125, 118, 155, 0.867)",
        arrowColor: "#7D769BFF",
        selectBorderColor: {default : "rgb(47, 45, 59)", focus : "#693faf"},
        optionBackgroundColor : {active : "rgba(125, 118, 155, 0.2)", hover : "#693faf"}
    },
    setGlobalFont : function (font : string) {
        return {...this, global : {...this.global, font : font}} as IPreset
    },
}
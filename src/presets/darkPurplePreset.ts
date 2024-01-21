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
        backgroundColor: "#0A0A12",
        textColor: "#7D769BDD",
        fontWeight: "500",
        hoverBackgroundColor: "linear-gradient(270deg, #4a2e7a, #693faf)",
        hoverTextColor : "#FFFFFF",
        bottomSeparatorColor: "#2F2D3B",
    },
    oddRow: {
        backgroundColor: "#1B1A23",
        textColor: "#7D769BDD",
        fontWeight: "500",
        hoverBackgroundColor: "#4a2e7a",
        hoverTextColor : "#FFFFFF",
        bottomSeparatorColor: "#2F2D3B",
    },
    firstnLastRowSeparatorsColor: "#693faf",
    paginationButton: {
        backgroundColor: "#1B1A23",
        textColor: "#7D769BDD",
        hoverBackgroundColor: "#6d40b9",
        hoverTextColor: "#FFFFFFFF",
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
        inputBorderColor: "rgb(47, 45, 59)",
        focusInputBorderColor: "#693faf"
    },
    nEntries : {
        textColor: "#918AAD",
    },
    selectEntriesPerPage: {
        labelTextColor: "rgba(125, 118, 155, 0.867)",
        selectBackgroundColor: "rgb(27, 26, 35)",
        selectTextColor: "rgb(145, 138, 173)",
        selectBorderColor: "rgb(47, 45, 59)",
        focusSelectBorderColor: "#693faf",
        hoverOptionBackgroundColor: "#693faf",
        hoverOptionTextColor: "#FFFFFF",
        optionsContainerBackgroundColor: "#1B1A23",
        optionsContainerBorderColor: "",
        activeOptionBackgroundColor: "",
        arrowColor: "#7D769BFF",
    },
}
import { IPreset } from "../interfaces/IPreset";

/* eslint-disable @typescript-eslint/no-unused-vars */
export const darkGreenPreset : IPreset = {
    global: {
        font: "Jost",
        textColor: "#7D769BDD",
    },
    th: {
        textColor: "#918AAD",
        fontWeight: "600",
        backgroundColor: "#1B1A23",
        arrow : {activeColor : "#20A073", inactiveColor : "#7D769BFF"},
        separatorColor: "#2F2D3B"
    },
    evenRow: {
        backgroundColor: "#0A0A12",
        textColor: "#7D769BDD",
        fontWeight: "500",
        hoverBackgroundColor: "linear-gradient(90deg, #20A073, #277d5f)",
        hoverTextColor : "#FFFFFF",
        bottomSeparatorColor: "#2F2D3B",
    },
    oddRow: {
        backgroundColor: "#1B1A23",
        textColor: "#7D769BDD",
        fontWeight: "500",
        hoverBackgroundColor: "linear-gradient(90deg, #20A073, #277d5f)",
        hoverTextColor : "#FFFFFF",
        bottomSeparatorColor: "#2F2D3B",
    },
    firstnLastRowSeparatorsColor: "#30B383",
    paginationButton: {
        backgroundColor: "#1B1A23",
        textColor: "#7D769BDD",
        hoverBackgroundColor: "#20A073",
        hoverTextColor: "#FFFFFFFF",
        hoverDropShadowColor : "#30B38399",
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
        focusInputBorderColor: "#30B383"
    },
    nEntries : {
        textColor: "#918AAD",
    },
    selectEntriesPerPage: {
        labelTextColor: "rgba(125, 118, 155, 0.867)",
        selectBackgroundColor: "rgb(27, 26, 35)",
        selectTextColor: "rgb(145, 138, 173)",
        selectBorderColor: "rgb(47, 45, 59)",
        focusSelectBorderColor: "#30B383",
        hoverOptionBackgroundColor: "#30B383",
        hoverOptionTextColor: "#FFFFFF",
        optionsContainerBackgroundColor: "#1B1A23",
        optionsContainerBorderColor: "rgba(125, 118, 155, 0.867)",
        activeOptionBackgroundColor: "rgba(125, 118, 155, 0.2)",
        arrowColor: "#7D769BFF",
    },
}
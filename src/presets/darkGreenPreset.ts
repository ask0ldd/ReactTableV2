import PresetClass from "./PresetClass";

/* eslint-disable @typescript-eslint/no-unused-vars */
export const darkGreenPreset = new PresetClass({
    global: {
        font: "Jost",
        textColor: "#7D769BDD",
        backgroundColor : "#0A0A12",
    },
    th: {
        textColor: "#918AAD",
        textAlign: "left",
        fontWeight: "600",
        backgroundColor: "#1B1A23",
        arrow : {activeColor : "#20A073", inactiveColor : "#7D769BFF"},
        separatorColor: "#2F2D3B"
    },
    row: {
        paddingTop : '0',
        paddingBottom : '0',
    },
    evenRow: {
        backgroundColor : {default : "#0A0A12", hover : "linear-gradient(90deg, #20A073, #277d5f)"},
        textColor : {default : "#7D769BDD", hover : "#FFFFFF"},
        fontWeight: "500",
        bottomSeparatorColor: "#2F2D3B",
    },
    oddRow: {
        backgroundColor : {default : "#1B1A23", hover : "linear-gradient(90deg, #20A073, #277d5f)"},
        textColor : {default : "#7D769BDD", hover : "#FFFFFF"},
        fontWeight: "500",
        bottomSeparatorColor: "#2F2D3B",
    },
    firstnLastRowSeparatorsColor: "#30B383",
    paginationButton: {
        backgroundColor : {default : "#1B1A23", hover : "#20A073"},
        textColor : {default : "#7D769BDD", hover : "#FFFFFF"},
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
        inputBorderColor: {default : "rgb(47, 45, 59)", focus : "#30B383"},
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
        selectBorderColor: {default : "rgb(47, 45, 59)", focus : "#30B383"},
        optionBackgroundColor : {active : "rgba(125, 118, 155, 0.2)", hover : "#30B383"}
    },
})
import PresetClass from "./PresetClass";

/* eslint-disable @typescript-eslint/no-unused-vars */
export const basePreset = new PresetClass(
    {
        global: {
            font: "'Jost', sans-serif",
            textColor: "#213547",
            backgroundColor: "#FFFFFF",
        },
        th: {
            textColor: "#213547",
            textAlign: "left",
            fontWeight: "600",
            backgroundColor: "none",
            arrow: { activeColor: "rgb(0, 120, 215)", inactiveColor: "#ddd" },
            separatorColor: "#111",
        },
        Row: {
            paddingTop : '0',
            paddingBottom : '0',
        },
        evenRow: {
            backgroundColor: { default: "none", hover: "linear-gradient(360deg, #2c91e4cc, #2c91e4aa)" },
            textColor: { default: "#213547", hover: "#FFFFFF" },
            fontWeight: "400",
            bottomSeparatorColor: "#DDDDDD",
        },
        oddRow: {
            backgroundColor: { default: "#f6f6f6", hover: "linear-gradient(360deg, #2c91e4cc, #2c91e4aa)" },
            textColor: { default: "#213547", hover: "#FFFFFF" },
            fontWeight: "400",
            bottomSeparatorColor: "#DDDDDD",
        },
        firstnLastRowSeparatorsColor: "#111",
        paginationButton: {
            backgroundColor: { default: "linear-gradient(to bottom, #fff 0%, #dcdcdc 100%)", hover: "#0078d7" },
            textColor: { default: "#213547", hover: "#ffffffcc" },
            hoverDropShadowColor: "#0078d788",
            borderColor: "#979797",
        },
        paginationNextPrevious: {
            textColor: "#213547",
        },
        searchBar: {
            labelTextColor: "#454545",
            inputBackgroundColor: "#f6f6f6",
            inputTextColor: "#454545",
            inputBorderColor: { default: "#c5c5c5", focus: "#0078d7" },
        },
        nEntries: {
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
            selectBorderColor: { default: "#c5c5c5", focus: "#0078d7" },
            optionBackgroundColor: { active: "#dfdfdf", hover: "#0078d7" }
        },
    }
)
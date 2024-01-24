import { IPreset } from "../interfaces/IPreset";

class PresetClass {
    #preset : IPreset

    constructor(preset : IPreset){
        this.#preset = preset
    }

    /**
     * @private
     * @param {IPreset} preset - The preset object
     */
    #set(preset : IPreset){
        this.#preset = preset
    }
    
    /**
     * @returns {IPreset} The preset object
     */
    get(){
        return this.#preset
    }

    /**
     * @param {string} font - The global font
     * @returns {PresetClass}
     */
    setGlobalFont (font: string): PresetClass {
        this.#set({ ...this.#preset, global: { ...this.#preset.global, font: font } } as IPreset)
        return this
    }

    /**
     * @param {{ _default: string; focus: string; }} colors - The border colors of the searchbar / dropdown depending on its state
     * @returns {PresetClass}
     */
    setBordersColors ({ _default, focus }: { _default: string; focus: string; }): PresetClass {
        this.#set({ ...this.#preset, 
            selectEntriesPerPage: { ...this.#preset.selectEntriesPerPage, selectBorderColor: { default: _default, focus } },
            searchBar: { ...this.#preset.searchBar, inputBorderColor: { default: _default, focus } },
        } as IPreset)
        return this
    }

    /**
     * @param {string} color - The first & last separators color
     * @returns {PresetClass}
     */
    setSeparatorColor (color: string): PresetClass {
        this.#set({ ...this.#preset, 
            firstnLastRowSeparatorsColor : color
        } as IPreset)
        return this
    }

    /**
     * @param {{ textColor: string; background: string; arrowColor: string; activeArrowColor: string; }} style - The table header style
     * @returns {PresetClass}
     */
    setTHStyle ({ textColor, background, arrowColor, activeArrowColor }: { textColor: string; background: string; arrowColor: string; activeArrowColor: string; }): PresetClass {
        this.#set({ ...this.#preset, 
            th : {...this.#preset.th,
                textColor,
                backgroundColor : background,
                arrow : {activeColor : activeArrowColor, inactiveColor : arrowColor}
            }
        } as IPreset)
        return this
    }

    /**
     * Set the style for all elements the hoverable elements.
     * @param {Object} options - The style options for the hover effect.
     * @param {string} options.textColor - The text color for the hover effect.
     * @param {string} options.background - The background color for the hover effect.
     * @returns {PresetClass} - The updated preset class.
     */
    setHoveredElementsStyle ({ textColor, background }: { textColor: string; background: string; }): PresetClass {
        this.#set({ ...this.#preset, 
            selectEntriesPerPage : {...this.#preset.selectEntriesPerPage,
                optionBackgroundColor: {...this.#preset.selectEntriesPerPage.optionBackgroundColor, hover: background },
                hoverOptionTextColor : textColor
            },
            oddRow : {...this.#preset.oddRow,
                backgroundColor : {...this.#preset.oddRow.backgroundColor, hover: background},
            },
            evenRow : {...this.#preset.evenRow,
                backgroundColor : {...this.#preset.evenRow.backgroundColor, hover: background},
            },
            paginationButton : {...this.#preset.paginationButton,
                backgroundColor: {...this.#preset.paginationButton.backgroundColor, hover: background},
                textColor: {...this.#preset.paginationButton.textColor, hover: textColor},
                hoverDropShadowColor : background.length === 7 || background.length === 9 ? (background.length === 7 ? background + "33" : background) : ("none"),
            },
        } as IPreset)
        return this
    }

    /**
     * @param {{ background: string; separatorColor: string; }} style - The odd rows style
     * @returns {PresetClass}
     */
    setOddRowsStyle ({ background, separatorColor }: { background: string; separatorColor: string; }): PresetClass {
        this.#set({ ...this.#preset, 
            oddRow : {...this.#preset.oddRow,
                backgroundColor : {...this.#preset.oddRow.backgroundColor, default: background},
                bottomSeparatorColor : separatorColor,
            }
        } as IPreset)
        return this
    }

    /**
     * @param {{ background: string; separatorColor: string; }} style - The even rows style
     * @returns {PresetClass}
     */
    setEvenRowsStyle ({ background, separatorColor }: { background: string; separatorColor: string;}): PresetClass {
        this.#set({ ...this.#preset, 
            evenRow : {...this.#preset.evenRow,
                backgroundColor : {...this.#preset.evenRow.backgroundColor, default: background},
                bottomSeparatorColor : separatorColor,
            }
        } as IPreset)
        return this
    }

}

export default PresetClass
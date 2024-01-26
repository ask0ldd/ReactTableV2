import { isValidElement } from "react"
import { Column } from "../models/ColumnModel"
import { TCustomComponent } from "../types/TCustomComponent"
import TAlignment from "../types/TAlignment"
import TDatatypes from "../types/TDatatypes"

/**
 * Class representing a column builder.
 */
export class ColumnBuilder {

    #th : string | null = null
    #thAlignment : TAlignment = "left"
    #accessor : string | null = null
    #sortable = false
    #datatype : TDatatypes | null = null
    #customComponent : TCustomComponent | null = null
  
    /**
     * Start building a new column.
     * @returns {ColumnBuilder} - The column builder instance.
     */
    constructor(){
      this.#th = null
      this.#thAlignment = 'left'
      this.#accessor = null
      this.#sortable = false
      this.#datatype = null
      this.#customComponent = null
      return this
    }
  
    /**
     * Set the text that will be displayed in the th tag of the column.
     * @param {string} th - The text for the th tag.
     * @param {TAlignment} alignment th text alignment ("left" | "center" | "right")
     * @returns {ColumnBuilder} - The column builder instance.
     */
    setColumnName(th : string, alignment? : 'align-left' | 'align-center' | 'align-right'){
      if(alignment && ['align-left', 'align-center', 'align-right'].includes(alignment)) this.#setColumnNameTextAlignment(alignment.split('-')[1] as TAlignment)
      this.#th = th
      return this
    }

    #setColumnNameTextAlignment(alignment : TAlignment){
      this.#thAlignment = alignment
      // return this
    }
  
    /**
     * Set the key from the data object pointing to the value used to fill the column.
     * @param {string} accessor - The key for the data object.
     * @returns {ColumnBuilder} - The column builder instance.
     */
    setAccessor(accessor : string){
      if(accessor == "custom_component") throw new Error("custom_component accessor is reserved word")
      this.#accessor = accessor
      return this
    }
  
    /**
     * Set whether the column should be sortable.
     * @param {boolean} sortable - Whether the column should be sortable.
     * @returns {ColumnBuilder} - The column builder instance.
     */
    setSortability(sortable : boolean){
      this.#sortable = sortable
      return this
    }
  
    /**
     * Set the type of data that will fill the column.
     * @param {TDatatypes} datatype - The type of data for the column.
     * @returns {ColumnBuilder} - The column builder instance.
     */
    setDatatype(datatype : TDatatypes){
      if(this.#datatype === "custom_component") return this
      this.#datatype = datatype
      return this
    }
  
    /**
     * Set the data type of the column as a string.
     * @returns {ColumnBuilder}
     */
    setDatatypeAsString(){
      if(this.#datatype === "custom_component") return this
      this.#datatype = "string"
      return this
    }
  
    /**
     * Set the data type of the column as a number.
     * @returns {ColumnBuilder}
     */
    setDatatypeAsNumber(){
      if(this.#datatype === "custom_component") return this
      this.#datatype = "number"
      return this
    }
  
    /**
     * Set the data type of the column as a date.
     * @returns {ColumnBuilder}
     */
    setDatatypeAsDate(){
      if(this.#datatype === "custom_component") return this
      this.#datatype = "date"
      return this
    }

    setDatatypeAsCustomComponent(){
      this.#datatype = "custom_component"
      return this
    }

    /**
     * The column will contain a Custom Component.
     * @returns {ColumnBuilder}
     */
    setCustomComponent(customComponent : TCustomComponent){
      if(customComponent == null || !isValidElement(customComponent())) throw new Error("Invalid Component.")
      this.#datatype = "custom_component"
      this.#accessor = null
      this.#customComponent = customComponent
      this.#sortable = false
      return this
    }
  
    /**
     * Build the final column.
     * @returns {Column|undefined} - The built column, or undefined if the column definition is incomplete.
     */
    build(){
      try{
        // if the column contains customComponents
        if(this.#customComponent != null && isValidElement(this.#customComponent(1)) && this.#datatype === "custom_component") return new Column(this.#th, this.#accessor, this.#sortable, this.#datatype, this.#customComponent, this.#thAlignment)
        // if it contains datas : th / accessoir / datatype => mandatory
        if(this.#th == null || this.#accessor == null || this.#datatype == null ) throw new Error("Can't be built : Column definition incomplete.")
        return new Column(this.#th, this.#accessor, this.#sortable, this.#datatype, null, this.#thAlignment)
      }catch (e){
        console.error(e)
        return undefined
      }
    }
  
  }
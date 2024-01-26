import { IColumnDefElement } from "../interfaces/IColumnDefElement"
import TAlignment from "../types/TAlignment"
import { TCustomComponent } from "../types/TCustomComponent"
import TDatatypes from "../types/TDatatypes"

export class Column {
    #th : string | null
    #accessor : string | null
    #sortable : boolean
    #datatype : TDatatypes | null
    #customComponent : TCustomComponent | null
    #thAligment : TAlignment
  
    /**
     * Creates a new Column.
     * @param {string} th - The column header.
     * @param {string} accessor - The accessor for the column.
     * @param {boolean} sortable - Indicates if the column is sortable.
     * @param {TDatatypes | null} datatype - The data type of the column.
     * @param {TCustomComponent} customComponent - Component populating all cells of the column.
     * @param {TAlignment} thAlignment - Horizontal Alignment for the TH text of the column.
     */
    constructor(
      th : string | null, 
      accessor: string | null, 
      sortable : boolean, 
      datatype : TDatatypes | null, 
      customComponent? : TCustomComponent | null,
      thAlignment? : TAlignment)
    {
      this.#th = th
      this.#accessor = accessor
      this.#sortable = sortable
      this.#datatype = datatype
      this.#customComponent = customComponent || null
      this.#thAligment = thAlignment || 'left'
    }
    
    /**
     * Converts the Column to an object.
     * @returns {IColumnDefElement | undefined} The column as an object, or undefined if any essential property is null.
     */
    toObject() : IColumnDefElement | undefined {
      if(this.#customComponent != null) return({th : this.#th, accessor : this.#accessor, sortable : this.#sortable, datatype : this.#datatype, component : this.#customComponent, thAlignment : this.#thAligment})
      if(this.#th == null || this.#accessor == null || this.#datatype == null ) return undefined // { th: '', datakey: '', sortable: true, datatype: '' }
      return({th : this.#th, accessor : this.#accessor, sortable : this.#sortable, datatype : this.#datatype, thAlignment : this.#thAligment})
    }
  }
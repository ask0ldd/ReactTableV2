import { IColumnDefElement } from "../interfaces/IColumnDefElement"

export class Column {
    #th : string | null
    #accessor : string | null
    #sortable : boolean
    #datatype : 'string' | 'number' | 'date' | null
  
    /**
     * Creates a new Column.
     * @param {string} th - The column header.
     * @param {string} accessor - The accessor for the column.
     * @param {boolean} sortable - Indicates if the column is sortable.
     * @param {'string' | 'number' | 'date' | null} datatype - The data type of the column.
     */
    constructor(th : string, accessor: string, sortable : boolean, datatype : 'string' | 'number' | 'date'){
      this.#th = th
      this.#accessor = accessor
      this.#sortable = sortable
      this.#datatype = datatype
    }
    
    /**
     * Converts the Column to an object.
     * @returns {IColumnDefElement | undefined} The column as an object, or undefined if any essential property is null.
     */
    toObject() : IColumnDefElement | undefined {
      if(this.#th == null || this.#accessor == null || this.#datatype == null ) return undefined // { th: '', datakey: '', sortable: true, datatype: '' }
      return({th : this.#th, accessor : this.#accessor, sortable : this.#sortable, datatype : this.#datatype})
    }
  }
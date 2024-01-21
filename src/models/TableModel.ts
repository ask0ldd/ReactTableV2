import { IColumnDefElement } from "../interfaces/IColumnDefElement"
import { Column } from "./ColumnModel"

export class TableModel{
    #columns : Array<IColumnDefElement>
    #id : string
  
    /**
     * Create a TableModel.
     * @param {Object} props - The properties for the TableModel.
     * @param {string} props.id - The ID for the TableModel.
     */
    constructor(props : {id : string}){
      this.#id = props.id
      this.#columns = []
    }

    /**
     * Add a column to the table model.
     * @param {Column | undefined} column - The column to add.
     * @returns {TableModel} The TableModel instance.
     */
    addColumn(column : Column | undefined){
      if(column == null || column.toObject() == null) return
      this.#columns.push(column.toObject() as IColumnDefElement)
      return this
    }
  
    /**
     * Get the columns of the table model.
     * @returns {Array<IColumnDefElement>} Array of column definitions.
     */
    getColumns() : Array<IColumnDefElement> {
      return [...this.#columns]
    }
  
    /**
     * Get the list of column names.
     * @returns {Array<string>} Array of column names.
     */
    getColumnsNamesList() : Array<string>{
        return this.#columns.reduce((accu : Array<string>, column) => {accu.push(column.th); return accu}, [])
    }

    /**
     * Get the list of accessors.
     * @returns {Array<string>} Array of accessors.
     */  
    getAccessorsList() : Array<string>{
      return this.#columns.reduce((accu : Array<string>, column) => {accu.push(column.accessor); return accu}, [])
    }

    /**
     * Get the data type for a specific accessor.
     * @param {string} accessor - The accessor for which to get the data type.
     * @returns {string} The data type of the accessor.
     */
    getDatatypeForAccessor(accessor : string) : string{
      return (this.#columns.find(column => column.accessor === accessor))?.datatype || 'string'
    }

    /**
     * Get the ID of the table model.
     * @returns {string} The ID of the table model.
     */
    getTableId(){
      return this.#id
    }
  }
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useReducer } from "react"
import { TableModel } from "../models/TableModel"
import { TableDAO } from "../dao/TableDAO"
import { ITableState } from "../interfaces/ITableState"

/**
 * Hook handling all the datatable interactions
 * @Hook
 * @param {Object} tableModel - Object defining the structure of the Table.
 * @param {String} tableModel.id - model ID.
 * @param {IColumnDefElement[]} tableModel.columns - Columns full definition.
 * @param {Object[]} tableModel.getColumnsNamesList - Return an array of all column names (<th> inner text).
 * @param {Object[]} tableModel.getAccessorsList - Return an array of all the accessors.
 * @param {Object[]} tableModel.getColumns - Return an array of all columns (w/ accessor, column names, sortable, datatype).
 * @param {string} tableModel.getDatatypeForAccessor - Type of the datas populating the column.
 * @param {Object[]} tableDatas - Datas used to populate the table.
 * @return (tableState, dispatch)
 */
function useTableManager(tableModel : TableModel, tableDatas : Array<any>){

    const initialState : ITableState = {
        sorting : {column : '', direction : 'asc'}, 
        pagination : {currentPage : 1, nEntriesPerPage : 10},
        search : "",
        tableDAO : new TableDAO(tableDatas),
        tableModel : tableModel,
        // group all the right arguments to pass to the TableDAO so it can reply back w/ the expected filtered/sorted datas
        getProcessingParameters() {
            return {search : this.search, datatype : this.tableModel.getDatatypeForAccessor(this.sorting.column), sorting : this.sorting}
        }
    }
    
    /**
     * Reduces the table state based on the action performed.
     * @param {ITableState} state - The current state of the table.
     * @param {{ type: string, payload: any}} action - The action performed on the table.
     */
    function tableStateReducer(state : ITableState, action : { type : string, payload : any}){

        // sorting the table using a column & a direction
        if (action.type === 'sorting' && action.payload.column && action.payload.direction) {
            return { ...state, sorting : action.payload }
        }

        // update the table pagination
        if (action.type === 'pagination' && action.payload.currentPage && action.payload.nEntriesPerPage) {
            return { ...state, pagination : action.payload }
        }

        // using the search field string to update the state with new filtered datas
        if (action.type === 'search') {
            return {...state, 
                search : action.payload, 
                // when typing into the searchbar => the current page is set back to 1
                pagination : { ...state.pagination , currentPage : 1 },
            }
        }

        // add a row to the table
        if(action.type === 'addrow' && action.payload){
            const newRow = action.payload

            // check if the new row contains all the required columns
            const accessors = state.tableModel.getAccessorsList()
            const newRowPropertiesList = Object.getOwnPropertyNames(newRow)
            if(accessors.length !== newRowPropertiesList.length) return state
            accessors.forEach(accessor => {
                if(newRowPropertiesList.includes(accessor) === false) return state // !!!!! should throw
            })

            state.tableDAO.addRow(newRow)
            return { ...state }
        }

        return state
    }

    const [tableState, dispatch] = useReducer(tableStateReducer, {...initialState})

    return {tableState, dispatch}
}

export default useTableManager

export type reducerDispatchType = React.Dispatch<{type: string, payload: any}>

// FUTURE IMPROVEMENTS
// !!! should deal with a table having no search module, give the option passing a prop to datastable
// !!!!!!!! should be able to define overriding ordering functions
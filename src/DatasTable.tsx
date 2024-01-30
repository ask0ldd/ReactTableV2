/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import Table from './Table'
import NDisplayedSelect from './NDisplayedSelect'
import SearchModule from './SearchModule'
import Pagination from './Pagination'
import NEntries from './NEntries'
import { useMemo } from 'react'
import { TableModel } from './models/TableModel'
import useTableManager from './hooks/useTableManager'
import { DatasTableContext } from './DatasTableContext'
import { IPreset } from './interfaces/IPreset'
import { basePreset } from './presets/basePreset'

/**
 * Component : Grouping of all the constitutive elements of a datatable.
 * @Component
 * @param {Object[]} props - Props.
 * @param {Object} props.tableModel
 * @param {Object[]} props.tableModel.getColumns - Return an array defining the columns of the table.
 * @param {string} props.tableModel.getColumns[].accessor - Data accessor.
 * @param {string} props.tableModel.getColumns[].th - Table column header.
 * @param {boolean} props.tableModel.getColumns[].sortable - Sortability of the column.
 * @param {string} props.tableModel.getColumns[].datatype - Type of the datas populating the column.
 * @param {Object[]} props.tableDatas - Datas used to populate the table.
 * @param {number} props.nRowsDefault - Number of rows displayed by default
 * @return ( <DatasTable tableModel={tableModel} tableDatas={tableDatas}/> )
 */
export function DatasTable({tableModel, tableDatas, preset, nRowsDefault, hideNRowsSelect, hideSearchBar, hidePagination} : IProps){

    // [perfs] tableModel & tableDatas props already triggering a re-render (being props), so no need of useState
    const isColumnsDefinitionMatchingDatas = useMemo(() => {

        if(tableDatas.length === 0) return false

        let areAllMatching = true
        const tableDatasPropertiesList = Object.getOwnPropertyNames(tableDatas[0])
        // check if all accessors can be linked to a tabledatas key
        tableModel.getAccessorsList().forEach(accessor => {
            // ignoring null accessor linked to custom components
            if(accessor == null) return
            if(tableDatasPropertiesList.includes(accessor) === false) areAllMatching = false
            if(!areAllMatching) throw new Error("Some Accessors don't exist into the provided Dataset.")
        })
        return areAllMatching
    }, [tableDatas, tableModel])

    const {tableState, dispatch} = useTableManager(tableModel, [...tableDatas])

    const entriesNSearchContainerBaseStyle = {
        display: 'flex', justifyContent: 'space-between', width: '100%', marginBottom: '0.5rem'
    }

    const infosNPaginationContainerBaseStyle = {
        display: 'flex', justifyContent: 'space-between', width: '100%', marginTop: '0.25rem'
    }

    return(
        <div style={{display:'flex', flexDirection:'column', width:'100%'}}>
            {preset?.global.font === "'Jost', sans-serif" ?
                <style>
                    @import url("https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600;700;800&display=swap");
                    box-sizing: border-box;
                    margin: 0px;
                    padding: 0px;
                    text-decoration: none;
                    list-style: none;
                </style>
                :
                <style>
                    box-sizing: border-box;
                    margin: 0px;
                    padding: 0px;
                    text-decoration: none;
                    list-style: none;
                </style>
            }
            { isColumnsDefinitionMatchingDatas ? 
                // providing model, datas & dispatch fn to the children components
                <DatasTableContext.Provider value={{tableModel, dispatch, tableState, preset : preset || basePreset.get()}}>
                    {(!hideNRowsSelect || !hideSearchBar) && <div style={preset?.global ? {fontFamily : preset.global.font, color : preset.global.textColor, ...entriesNSearchContainerBaseStyle} : entriesNSearchContainerBaseStyle} id="entriesNSearchContainer">
                        {!hideNRowsSelect && <NDisplayedSelect nRowsDefault={nRowsDefault}/>}
                        {!hideSearchBar && <SearchModule/>}
                    </div>}
                    <Table/>
                    {!hidePagination && <div style={preset?.global ? {fontFamily : preset.global.font, color : preset.global.textColor, ...infosNPaginationContainerBaseStyle} : infosNPaginationContainerBaseStyle} id="infosNPaginationContainer">
                        <NEntries/>
                        <Pagination/>
                    </div>}
                </DatasTableContext.Provider> 
                : <div>Users datas are missing some mandatory dataKeys.</div>
            }
        </div>
    )

}

export default DatasTable

interface IProps {
    tableModel : TableModel
    tableDatas : Array<any>
    preset? : IPreset
    nRowsDefault? : number
    hideNRowsSelect ?: boolean
    hideSearchBar ?: boolean
    hidePagination ?: boolean
}
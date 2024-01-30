import { DatasTableContext } from './DatasTableContext'
import { useContext } from "react"

/**
 * Component : A container displaying the number of entries in the current table.
 * @Component
 * @return ( <NEntries/> )
 */
function NEntries(){

    const {tableState, preset} = useContext(DatasTableContext)
    if(!tableState) return(<></>)

    const firstDisplayedEntry = tableState.pagination ? Math.abs((tableState.pagination.currentPage-1)*tableState.pagination.nEntriesPerPage) + 1 : 1
    const lastDisplayedEntry =  tableState.pagination ? Math.abs((tableState.pagination.currentPage)*tableState.pagination.nEntriesPerPage) : 10
    const totalEntries = tableState.tableDAO.getProcessedDatas(tableState.getProcessingParameters()).length

    // first Entry displayed to last Entry displayed of total Entries
    return(
        <div style={{ color: preset.nEntries.textColor,  display: 'flex', alignItems: 'center' }} id="infosContainer">Showing {totalEntries != 0 ? firstDisplayedEntry : 0} to {lastDisplayedEntry < totalEntries ? lastDisplayedEntry : totalEntries} of {totalEntries} entries</div>
    )
}

export default NEntries
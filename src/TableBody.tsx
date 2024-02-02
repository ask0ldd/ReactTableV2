import { isValidElement, useContext, useState } from "react"
import { DatasTableContext } from "./DatasTableContext"

export default function TableBody() {

    const { tableState, dispatch, tableModel, preset } = useContext(DatasTableContext)
    const [ hoverTR, setHoverTR ] = useState(-1)

    const topSeparatorColor = { borderBottom: '1px solid ' + preset.firstnLastRowSeparatorsColor }

    const rowsToDisplay = getRowsToDisplay()

    const oddRowStyle = { color: preset.oddRow.textColor.default, background: preset.oddRow.backgroundColor.default, borderBottom: '1px solid ' + preset.oddRow.bottomSeparatorColor }
    const evenRowStyle = { color: preset.evenRow.textColor.default, background: preset.evenRow.backgroundColor.default, borderBottom: '1px solid ' + preset.evenRow.bottomSeparatorColor }
    const hoverRowStyle = { background: preset.evenRow.backgroundColor.hover, borderBottom: '1px solid ' + preset.evenRow.backgroundColor.hover, color: preset.evenRow.textColor.hover }
    const tdPadding = { /*display: 'flex', alignItems: 'center',*/ padding: (10 + parseInt(preset.row.paddingTop) + 'px ') + "18px " + (10 + parseInt(preset.row.paddingBottom) + 'px ') + '18px' }

    if (!dispatch || !tableState || !tableModel || tableState.tableDAO.getProcessedDatas(tableState.getProcessingParameters()).length === 0)
    return (<>No data available in table.</>)

    return (
        <tbody style={{...topSeparatorColor, width:'100%'}}>
            {rowsToDisplay.map((datarow, index) => (
                <tr onMouseOut={() => setHoverTR(-1)} onMouseEnter={() => setHoverTR(index)}
                    style={hoverTR === index ? hoverRowStyle
                    : {
                        ...isRowOdd(index) ? oddRowStyle : evenRowStyle,
                        borderBottom: isLastRow(index, rowsToDisplay.length - 1) ? 'none' : (isRowOdd(index) ? oddRowStyle.borderBottom : evenRowStyle.borderBottom)
                    }}
                    key={'trtable-' + index} className={isRowOdd(index) + isLastRow(index, rowsToDisplay.length - 1)}>
                    {
                    tableModel.getColumns().map((column, index2) => {
                        // display custom component
                        if (column.component && isValidElement(column.component(index))) return (column.component(index, datarow)) // rowdatas datarow
                        // or display datas
                        const key = column.accessor
                        return (<td style={tdPadding} key={'tdtable-' + key + '-' + index2 + index}>{key && datarow[key as keyof typeof datarow]}</td>)
                    })
                    }
                </tr>
            ))}
        </tbody>
    )

    /**
     * Retrieves the rows to display based on the current table state and pagination.
     * @function
     * @returns {Array} The rows to be displayed on the table.
     */
    function getRowsToDisplay(){
        if(tableState == null) return []
        const firstDisplayedEntry = tableState.pagination ? Math.abs((tableState.pagination.currentPage - 1) * tableState.pagination.nEntriesPerPage) : 0
        const lastDisplayedEntry = tableState.pagination ? Math.abs((tableState.pagination.currentPage - 1) * tableState.pagination.nEntriesPerPage + tableState.pagination.nEntriesPerPage) : 10 
        return [...tableState.tableDAO.getProcessedDatas(tableState.getProcessingParameters())].slice(firstDisplayedEntry, lastDisplayedEntry)
    }

    /**
     * Determine which style should be applied to the target row.
     * @param {number} index - index of a table row.
     * @return {string} - the styles class to associate to this row.
     */
    function isRowOdd(index: number): string {
        return index % 2 === 1 ? 'odd' : ''
    }

    /**
     * Return a specific style if the target row is the last one.
     * @param {number} index - index of a table row.
     * @return {string} - the style to associate to this row if it is the last one.
     */
    function isLastRow(index: number, lastRowIndex: number) {
        return index === lastRowIndex ? ' bottomblackborder' : ''
    }
}

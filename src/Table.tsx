/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext, useState, isValidElement } from "react"
import { DatasTableContext } from './DatasTableContext'
import './style/Table.css'
import TAlignment from "./types/TAlignment"

// !!! limit size of value in a cell & fix col sizes

/**
 * Component : A simple HTML Table displaying all the requested data.
 * @Component
 * @return ( <Table/> )
 */
function Table() {

  const { tableState, dispatch, tableModel, preset } = useContext(DatasTableContext)
  const [ hoverTR, setHoverTR ] = useState(-1)

  if (!dispatch || !tableState || !tableModel || tableState.tableDAO.getProcessedDatas(tableState.getProcessingParameters()).length === 0)
    return (<>No data available in table.</>)

  const tableAccessors = tableModel.getAccessorsList()

  const rowsToDisplay = getRowsToDisplay()

  // defining elements styles
  const globalStyle = { background: preset.global.backgroundColor, fontFamily: preset.global.font, color: preset.global.textColor }
  const thStyle = { color: preset.th.textColor, background: preset.th.backgroundColor, fontWeight: preset.th.fontWeight, textAlign: preset.th.textAlign }
  const oddRowStyle = { color: preset.oddRow.textColor.default, background: preset.oddRow.backgroundColor.default, borderBottom: '1px solid ' + preset.oddRow.bottomSeparatorColor }
  const evenRowStyle = { color: preset.evenRow.textColor.default, background: preset.evenRow.backgroundColor.default, borderBottom: '1px solid ' + preset.evenRow.bottomSeparatorColor }
  const arrowInactiveColor = { color: preset.th.arrow.inactiveColor }
  const arrowActiveColor = { color: preset.th.arrow.activeColor }
  const topSeparatorColor = { borderBottom: '1px solid ' + preset.firstnLastRowSeparatorsColor }
  const hoverRowStyle = { background: preset.evenRow.backgroundColor.hover, borderBottom: '1px solid ' + preset.evenRow.backgroundColor.hover, color: preset.evenRow.textColor.hover }
  const tdPadding = { /*display: 'flex', alignItems: 'center',*/ padding: (10 + parseInt(preset.row.paddingTop) + 'px ') + "18px " + (10 + parseInt(preset.row.paddingBottom) + 'px ') + '18px' }

  return (
    <div style={{overflowX:'auto'}}>
      <table style={preset.global ? globalStyle : {}} id={tableModel.getTableId()} aria-label="Current Employees">
      
        <thead style={topSeparatorColor}>
          <tr style={{ background: thStyle.background, border: 'none' }}>
            {tableModel.getColumnsNamesList().map((name, index) => (
              <th key={'thtable-' + index}
                // different paddings if th must host the arrows
                style={{
                  ...thStyle, cursor: 'pointer',
                  padding: tableModel.getColumns()[index].sortable ? '10px 36px 10px 18px' : '10px 18px 10px 18px',
                  textAlign: tableModel.getColumns()[index].thAlignment != null && tableModel.getColumns()[index].thAlignment != 'preset' ?
                    tableModel.getColumns()[index].thAlignment as TAlignment :
                    thStyle.textAlign
                }}
                onClick={() => { handleSortingClick(index) }}>{name}
                {
                  // display arrows if sortable
                  tableModel.getColumns()[index].sortable &&
                  <div className="arrowsContainer">
                    <span style={tableState.sorting?.direction === "asc" && tableState.sorting?.column == tableAccessors[index] ?
                      arrowActiveColor : arrowInactiveColor}>▲
                    </span>
                    <span style={tableState.sorting?.direction === "desc" && tableState.sorting?.column == tableAccessors[index] ?
                      arrowActiveColor : arrowInactiveColor}>▼
                    </span>
                  </div>
                }
              </th>))}
          </tr>
        </thead>

        <tbody style={topSeparatorColor}>
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

      </table>
    </div>
  )

  /**
   * Sorting the table after clicking on a column header
   * @param {number} index - index of the column into the table model.
   * @return
   */
  function handleSortingClick(index: number) {
    // if not column not sortable
    if (!tableModel?.getColumns()[index].sortable || !dispatch || !tableState) return
    // if clicking on an already active column, invert sorting direction
    if (tableState.sorting.column === tableAccessors[index])
      return tableState.sorting.direction === 'asc' ? dispatch({ type: 'sorting', payload: { column: tableAccessors[index], direction: 'desc' } }) : dispatch({ type: 'sorting', payload: { column: tableAccessors[index], direction: 'asc' } })
    // if clicking on a different column sorting direction = asc by default
    return dispatch({ type: 'sorting', payload: { column: tableAccessors[index], direction: 'asc' } })
  }

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

export default Table
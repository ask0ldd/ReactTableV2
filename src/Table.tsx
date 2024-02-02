/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext, } from "react"
import { DatasTableContext } from './DatasTableContext'
import './style/Table.css'
import TableHead from "./TableHead"
import TableBody from "./TableBody"

// !!! limit size of value in a cell & fix col sizes

/**
 * Component : A simple HTML Table displaying all the requested data.
 * @Component
 * @return ( <Table/> )
 */
function Table() {

  const { tableState, dispatch, tableModel, preset } = useContext(DatasTableContext)

  if (!dispatch || !tableState || !tableModel || tableState.tableDAO.getProcessedDatas(tableState.getProcessingParameters()).length === 0)
    return (<>No data available in table.</>)

  // defining elements styles
  const globalStyle = { background: preset.global.backgroundColor, fontFamily: preset.global.font, color: preset.global.textColor, width : '100%'}
  
  return (
    <div style={{width:'100%', overflowX:'auto' /*!!! should have resolution condition */}}>
      <table style={preset.global ? globalStyle : {width:'100%'}} id={tableModel.getTableId()} aria-label="Current Employees">
      
        <TableHead/>

        <TableBody/>

      </table>
    </div>
  )

}

export default Table
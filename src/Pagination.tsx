/* eslint-disable @typescript-eslint/no-explicit-any */
import { DatasTableContext } from './DatasTableContext'
import { ITableState } from './interfaces/ITableState'
import './style/Pagination.css'
import { useContext, useState } from "react"

/**
 * Component : Datatable pagination.
 * @Component
 * @return ( <Pagination/> )
 */
function Pagination() {

    const {tableState, dispatch, preset} = useContext(DatasTableContext)
    const[focusButton, setFocusButton] = useState(0)
    if(!dispatch || !tableState) return(<></>)

    const currentPage = tableState.pagination.currentPage
    const nEntriesPerPage = tableState.pagination.nEntriesPerPage
    const totalEntries = tableState.tableDAO.getProcessedDatas(tableState.getProcessingParameters()).length
    
    const enoughEntriesLeftForNextPage =  currentPage * nEntriesPerPage < totalEntries

    // const paginationPreset = preset && preset.paginationButton
    const paginationButtonStyle = {
      background : preset.paginationButton.backgroundColor,
      color : preset.paginationButton.textColor,
      border : '1px solid ' + preset.paginationButton.borderColor,
    }

    const paginationButtonHoverStyle = {
      background : preset.paginationButton.hoverBackgroundColor,
      color : preset.paginationButton.hoverTextColor,
      fontWeight : 600,
      boxShadow: '0 4px 8px ' + preset.paginationButton.hoverDropShadowColor,
      border : '1px solid ' + preset.paginationButton.hoverBackgroundColor,
      opacity: 1,
    }

    /*
     * Previous Table Page.
     * dispatch : fn saved in DatasTableContext
     * interacts with the reducer in useTableManager
     */
    function prevPage(tableState : ITableState) : void {
      if(dispatch == null || tableState == null) return
      dispatch({
        type : "pagination", 
        payload : {
          ...tableState.pagination, 
          currentPage : currentPage > 1 ? currentPage-1 : currentPage
        }})
    }

    /*
     * Next Table Page.
     * dispatch : fn saved in DatasTableContext
     * interacts with the reducer in useTableManager
     */
    function nextPage(tableState : ITableState) : void {
      if(dispatch == null || tableState == null) return
      dispatch({
        type : "pagination", 
        payload : {
          ...tableState.pagination, 
          currentPage : enoughEntriesLeftForNextPage ? currentPage+1 : currentPage
        }})
    }

    return (
        <div id="paginationContainer">
          {currentPage > 1 && 
            <span role='button' style={preset.paginationNextPrevious ? { color: preset.paginationNextPrevious.textColor, marginLeft:'0.5rem' } : {marginLeft:'0.5rem'}} 
                  tabIndex={0} onClick={() => prevPage(tableState)}>Previous</span>}

          {currentPage > 1 && 
            <div role='button' onMouseOut={() => setFocusButton(0)} onMouseEnter={() => setFocusButton(1)} style={focusButton == 1 ? paginationButtonHoverStyle : paginationButtonStyle} tabIndex={0} className="paginationInactivePage" onClick={() => prevPage(tableState)}>{currentPage-1}</div>}
          
          <div role='button' onMouseOut={() => setFocusButton(0)} onMouseEnter={() => setFocusButton(2)} style={focusButton == 2 ? paginationButtonHoverStyle : paginationButtonStyle} tabIndex={0} className="paginationActivePage">{currentPage}</div>
          
          {enoughEntriesLeftForNextPage && 
            <div role='button' onMouseOut={() => setFocusButton(0)} onMouseEnter={() => setFocusButton(3)} style={focusButton == 3 ? paginationButtonHoverStyle : paginationButtonStyle} tabIndex={0} className="paginationInactivePage" onClick={() => nextPage(tableState)}>{currentPage+1}</div>}
          
          {enoughEntriesLeftForNextPage && 
            <span role='button' style={preset.paginationNextPrevious ? { color: preset.paginationNextPrevious.textColor, marginLeft:'0.5rem' } : {marginLeft:'0.5rem'}} 
                  tabIndex={0} onClick={() => nextPage(tableState)}>Next</span>}
        </div>
    )
}

export default Pagination

import { useContext } from 'react'
import TAlignment from './types/TAlignment'
import { DatasTableContext } from './DatasTableContext'

export default function TableHead() {

    const { tableState, dispatch, tableModel, preset } = useContext(DatasTableContext)

    const topSeparatorColor = { borderBottom: '1px solid ' + preset.firstnLastRowSeparatorsColor }
    const thStyle = { color: preset.th.textColor, background: preset.th.backgroundColor, fontWeight: preset.th.fontWeight, textAlign: preset.th.textAlign }
    const arrowInactiveColor = { color: preset.th.arrow.inactiveColor }
    const arrowActiveColor = { color: preset.th.arrow.activeColor }

    if (!dispatch || !tableState || !tableModel || tableState.tableDAO.getProcessedDatas(tableState.getProcessingParameters()).length === 0)
    return (<></>)

    const tableAccessors = tableModel.getAccessorsList()

    return (
        <thead style={{...topSeparatorColor, width:'100%'}}>
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

    )

    function handleSortingClick(index: number) {
        // if not column not sortable
        if (!tableModel?.getColumns()[index].sortable || !dispatch || !tableState) return
        // if clicking on an already active column, invert sorting direction
        if (tableState.sorting.column === tableAccessors[index])
          return tableState.sorting.direction === 'asc' ? dispatch({ type: 'sorting', payload: { column: tableAccessors[index], direction: 'desc' } }) : dispatch({ type: 'sorting', payload: { column: tableAccessors[index], direction: 'asc' } })
        // if clicking on a different column sorting direction = asc by default
        return dispatch({ type: 'sorting', payload: { column: tableAccessors[index], direction: 'asc' } })
    }
}

import './style/OptionsList.css'
import { useContext } from 'react'
import Option from './Option'
import { SelectContext } from './contexts/SelectContext'
import { DatasTableContext } from '../DatasTableContext'

/**
 * Component : The list of options displayed into the custom select.
 * @Component
 * @return ( <OptionsList/> )
 */
function OptionsList(){

    const { selectId, options, listbox } = useContext(SelectContext)
    const {preset} = useContext(DatasTableContext)
    const optionsContainerStyle = {background : preset.selectEntriesPerPage.optionsContainerBackgroundColor, border : '1px solid ' + preset.selectEntriesPerPage.optionsContainerBorderColor}

    return(
        listbox.isExpanded ? 
        <ul style={optionsContainerStyle} onClick={(e) => {e.preventDefault(); console.log('listbox');}} tabIndex={-1} id="customListbox" aria-labelledby="customSelectLabel" className="selectOptionsContainer" role="listbox">
            {options.map((option, index) => <Option key={selectId+'-option-'+index} index={index} option={option}/>)}
        </ul> 
        : <></>
    )
}

export default OptionsList
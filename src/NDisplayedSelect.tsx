/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext } from 'react'
import Select from './select/Select'
import './style/NDisplayedSelect.css'
import { DatasTableContext } from './DatasTableContext'

/**
 * Component : A container hosting a select.
 * @Component
 * @return ( <NDisplayedSelect/> )
 */
function NDisplayedSelect({nRowsDefault} : {nRowsDefault? : number}) 
{
    /*const NDisplayedOptions = ['10', '25', '50', '100']
    const {dispatch} = useContext(DatasTableContext)*/

    /* should update select active option if 100 */
    // if(!dispatch) return(<></>)

    const {preset} = useContext(DatasTableContext)

    return (
        <div style={{color : preset.selectEntriesPerPage.labelTextColor}} id="entriesContainer">
            Show
            {/*<select onChange={e => updateNumberEntriesPerPage(e)}>
                {
                    // Select w/ 10, 25, 50, 100 entries per page.
                    NDisplayedOptions.map((opt, index) => 
                        (<option value={parseInt(opt)} key={'opt'+index}>{opt}</option>))
                }
            </select>*/}
            <Select selectId={"nDisplayed"} nRowsDefault={nRowsDefault}/>
            entries
        </div>
    )

    /*function updateNumberEntriesPerPage(e : React.ChangeEvent<HTMLSelectElement>){
        const currentPage = 1
        const nEntriesPerPage = e.target.value != null ? parseInt(e.target.value) : 50
        dispatch && dispatch({type : "pagination", payload : {currentPage, nEntriesPerPage}})
    }*/


}

export default NDisplayedSelect
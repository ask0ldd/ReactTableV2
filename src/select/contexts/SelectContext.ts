import { createContext } from "react";
import { IOption } from "../Select";

export const SelectContext = createContext<ISelectContext>({
    selectId : '',
    options : [],  
    activeOption : {get : () => ({label:'', value:''}), set : () => false},
    listbox : {isExpanded : false, setAsExpanded : () => false},
})

interface ISelectContext{
    selectId : string
    options : Array<IOption>
    activeOption : {
        get : () => IOption
        set : (option : IOption) => void
    }
    listbox : {
        isExpanded : boolean, 
        setAsExpanded : (bool : boolean) => void
    }
}


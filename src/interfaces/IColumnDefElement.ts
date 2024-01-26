import { TCustomComponent } from "../types/TCustomComponent"

export interface IColumnDefElement 
{
  th : string | null
  accessor : string | null
  sortable : boolean
  datatype : 'string' | 'number' | 'date' | 'custom_component' | null
  component? : TCustomComponent | null
  thAlignment? : 'left' | 'center' | 'right'
}
import TAlignment from "../types/TAlignment"
import { TCustomComponent } from "../types/TCustomComponent"
import TDatatypes from "../types/TDatatypes"

export interface IColumnDefElement 
{
  th : string | null
  accessor : string | null
  sortable : boolean
  datatype : TDatatypes | null
  component? : TCustomComponent | null
  thAlignment? : TAlignment | 'preset'
}
import { createContext } from "react"
import { reducerDispatchType } from "./hooks/useTableManager"
import { TableModel } from "./models/TableModel"
import { ITableState } from "./interfaces/ITableState"
import { IPreset } from "./interfaces/IPreset"
import { basePreset } from "./presets/basePreset"

const initialContext : IDatasTableContext = {preset : basePreset.get()}

export const DatasTableContext = createContext<IDatasTableContext>(initialContext)

export interface IDatasTableContext{
    tableModel? : TableModel
    dispatch? : reducerDispatchType
    tableState? : ITableState
    preset : IPreset
}
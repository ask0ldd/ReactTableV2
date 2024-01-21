/* eslint-disable @typescript-eslint/no-explicit-any */
import { TableDAO } from "../dao/TableDAO"
import { TableModel } from "../models/TableModel"
import { IPaginationRules } from "./IPaginationRules"
import { ISorting } from "./ISorting"

export interface ITableState {
    sorting : ISorting
    pagination : IPaginationRules
    search : string
    tableDAO : TableDAO
    // processedDatas : Array<any>
    tableModel : TableModel
    getProcessingParameters : () => { search : string, datatype : string, sorting : ISorting }
}
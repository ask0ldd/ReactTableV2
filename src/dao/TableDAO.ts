/* eslint-disable @typescript-eslint/no-explicit-any */
export class TableDAO{

    #datas : Array<any>
    
    /**
     * Creates a TableDAO.
     * @param {Array<any>} datas - The initial data array.
     */
    constructor(datas : Array<any>){
        this.#datas = datas
    }

    /**
     * Gets the data array.
     * @returns {Array<any>} - The data array.
     */
    getDatas(){
        return this.#datas
    }

    /**
     * Sets the data array.
     * @param {Array<any>} datas - The data array to set.
     */
    setDatas(datas : Array<any>){
        this.#datas = datas
    }

    /**
     * Adds a row to the data array.
     * @param {object} row - The row to add.
     */
    addRow(row : object){
        this.#datas = [...this.#datas, row]
    }

    /**
     * Gets the filtered data array based on the search string.
     * @param {string} searchString - The search string.
     * @returns {Array<any>} - The filtered data array.
     */
    getFilteredDatas(searchString : string){
        if(searchString === "") return this.#datas

        return [...this.#datas].filter(row => {
            // check if one of the properties of a row contain the searchString
            for (const property in row) if(row[property].toString().toLowerCase().includes(searchString.toLowerCase())) return true
            return false
        })
    }

    /**
     * Gets the sorted data array based on the provided parameters.
     * @param {string} searchString - The search string.
     * @param {{ column: string, direction: "asc" | "desc" }} sortingRules - The sorting rules.
     * @param {string} dataType - The data type.
     * @returns {Array<any>} - The sorted data array.
     */
    getSortedDatas(searchString : string, sortingRules : {column : string, direction : "asc" | "desc"}, dataType : string){
        const datas = this.getFilteredDatas(searchString)
        const frCollator = new Intl.Collator('en')
        if(dataType === 'date'){
            switch(sortingRules.direction){
               case 'asc' : return datas.sort((a,b) => this.#dateToTime(b[sortingRules.column]) - this.#dateToTime(a[sortingRules.column]))
               case 'desc' : return datas.sort((a,b) => this.#dateToTime(a[sortingRules.column]) - this.#dateToTime(b[sortingRules.column]))
            }
        }
        switch(sortingRules.direction){
            case 'asc' : return datas.sort((a,b) => frCollator.compare(a[sortingRules.column], b[sortingRules.column]))
            case 'desc' : return datas.sort((a,b) => frCollator.compare(b[sortingRules.column], a[sortingRules.column]))
        }
    }

    /**
     * Gets the processed data array based on the provided processing arguments.
     * @param {{ search: string, sorting: { column: string, direction: "asc" | "desc" }, datatype: string }} processingArgs - The processing arguments.
     * @returns {Array<any>} - The processed data array.
     */
    getProcessedDatas(processingArgs : { search : string, sorting : {column : string, direction : "asc" | "desc"}, datatype : string }){
        return this.getSortedDatas(processingArgs.search, processingArgs.sorting, processingArgs.datatype)
    }

    /**
     * Converts the date string to time.
     * @param {string} date - The date string.
     * @returns {number} - The time in milliseconds.
     * @private
     */
    #dateToTime(date : string){
        const [day, month, year] = date.split('/')
        return new Date(parseInt(year), parseInt(month), parseInt(day)).getTime()
    }
}
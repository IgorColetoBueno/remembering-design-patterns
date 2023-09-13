interface SerializedData {
    getData: () => string
}

class CsvData implements SerializedData {
    private data: string;

    constructor(data: string) {
        this.data = data
    }

    getData() {
        return this.data
    };
}

class JsonData implements SerializedData {
    private data: string;

    constructor(data: string) {
        this.data = data
    }

    getData() {
        return this.data
    };
}

class CsvToJsonAdapter extends JsonData {
    private csvData: CsvData;

    constructor(data: CsvData) {
        super('')
        this.csvData = data
    }

    getData() {
        const splitted = this.csvData.getData().split('\n')

        if (!splitted.length) return '[]'

        const headerFields = splitted[0].split(',')
        splitted.splice(0, 1)

        const returnData: any[] = []

        splitted.forEach(item => {
            const itemData = Object.assign({})
            const splittedValues = item.split(',')

            splittedValues.forEach((value, index) => {
                itemData[headerFields[index]] = value
            })

            returnData.push(itemData)
        })
        const dataJSON = JSON.stringify(returnData)
        return dataJSON
    };
}

class DataPrinter {
    static print(json: JsonData) {
        const data = JSON.parse(json.getData())
        console.log(JSON.stringify(data, null, 2))
    }
}

const csvData = new CsvData(`nome,idade
igor,24
joão,25`)

const adapter = new CsvToJsonAdapter(csvData)

DataPrinter.print(adapter)


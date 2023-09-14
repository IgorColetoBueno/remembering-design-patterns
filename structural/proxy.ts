class DbManager {
    public search(text: string) {
        return ['Alex', 'John', 'Terry'].filter(q => q.toLowerCase().includes(text.toLowerCase()))
    }

    constructor() {

    }
}

class DbManagerProxy extends DbManager {
    private dbManager: DbManager

    constructor(dbManager: DbManager) {
        super()
        this.dbManager = dbManager
    }

    search(text: string) {
        console.log(`Search typed: ${text}`)
        const response = this.dbManager.search(text)
        console.log(`Response: ${JSON.stringify(response)}`)
        return response
    }
}

const manager = new DbManager()
const proxy = new DbManagerProxy(manager)

const result = proxy.search("Al")

console.log(result)
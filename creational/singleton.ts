class DbManager {
    private static instance: DbManager

    static getInstance() {
        if (!DbManager.instance) {
            DbManager.instance = new DbManager()
        }
        
        return DbManager.instance
    }

    private constructor() {
    }
}

const instance1 = DbManager.getInstance() 
const instance2 = DbManager.getInstance()

console.log(instance1 === instance2)
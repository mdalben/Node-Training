import * as del from 'del'
import * as Loki from 'lokijs'

const loadCollection = function(colName: string, db: Loki): Promise<Collection<any>> {
    return new Promise(resolve => {
        db.loadDatabase({}, () => {
            const collection = db.getCollection(colName) || db.addCollection(colName)
            resolve(collection)
        }) 
    })
}

export { loadCollection }
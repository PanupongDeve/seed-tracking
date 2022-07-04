import { generateShortId } from '../../utils/shortId'


class Operation {
    collection: any;
    db: any;
    constructor(db:any, collection: any) {
        this.db = db;
        this.collection = collection;
    }

    async get() {
        try {
            let items: any[] = [];
            const snapshot = await this.db.collection(this.collection).get()
            
            snapshot.forEach((doc: any) => {
                items.push({
                    id: doc.id,
                    ...doc.data()
                })
                
            });

            return items
            
        } catch (error) {
            console.log(error)
            throw "Internal Server Error"
        }
    }

    async getByIds() {

    }

    async getById() {

    }

    async create(value:any) {
        try {
            const docRef = this.db.collection(this.collection).doc(generateShortId())
            await docRef.set(value)
        } catch (error) {
            console.log(error)
        }
    }

    async update() {

    }

    async delete() {
        
    }
}

export {
    Operation
}
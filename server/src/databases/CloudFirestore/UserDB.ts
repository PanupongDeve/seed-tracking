import { generateShortId } from '../../utils/shortId'


class UsersDB {
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

    async getByIds(ids = []) {
        
    }

    async getById(id: string) {
        try {
            const cityRef = this.db.collection(this.collection).doc(id);
            const doc = await cityRef.get();
            if (!doc.exists) {
                return {
                    isEmpty: true,
                    data: {}
                }
            } else {
                return {
                    isEmpty: false,
                    data: doc.data()
                };
            }
        } catch (error) {
            console.log(error)
        }
    }   

    async create(value:any) {
        try {
            value.id = generateShortId()
            value.role = 'member'
            const docRef = this.db.collection(this.collection).doc(value.id)
            await docRef.set(JSON.parse(JSON.stringify(value)))
        } catch (error) {
            console.log(error)
        }
    }

    async update(id: string, body: any) {
        try {
            let oldData = await this.getById(id)
            if (oldData?.isEmpty) {
                return oldData
            } else {
                let newData = {
                    ...oldData?.data,
                    ...body
                }

                const docRef = this.db.collection(this.collection).doc(id)
                await docRef.set(JSON.parse(JSON.stringify(newData)))
            }
        } catch (error) {
            console.log(error)
        }
    }

    async delete(id: string) {
        try {
            let oldData = await this.getById(id)
            if (oldData?.isEmpty) {
                return oldData
            } else {
                let newData = {
                    ...oldData?.data,
                    status: 'inactive'
                }

                const docRef = this.db.collection(this.collection).doc(id)
                await docRef.set(JSON.parse(JSON.stringify(newData)))
            }
        } catch (error) {
            console.log(error)
        }
    }

    async restore(id: string) {
        try {
            let oldData = await this.getById(id)
            if (oldData?.isEmpty) {
                return oldData
            } else {
                let newData = {
                    ...oldData?.data,
                    status: 'active'
                }

                const docRef = this.db.collection(this.collection).doc(id)
                await docRef.set(JSON.parse(JSON.stringify(newData)))
            }
        } catch (error) {
            console.log(error)
        }
    }
}

export {
    UsersDB
}
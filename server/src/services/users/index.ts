import { cloudFireStoreManger } from '../../databases/CloudFirestore'

class UserServices {

    async create(body:any) {
        const users = cloudFireStoreManger.getUserDB()
        await users?.create(body)
        return "add users successful!"
    }

    async getAll() {
        const users = cloudFireStoreManger.getUserDB()
        return await users?.get()
    }

    async getById(userId: string) {
        const users = cloudFireStoreManger.getUserDB()
        return await users?.getById(userId)
    }

    async updateById(userId: string, body: any) {
        const users = cloudFireStoreManger.getUserDB()
        const data = await users?.update(userId, body)
        return data;
    }

    async delete(userId: string) {
        const users = cloudFireStoreManger.getUserDB()
        const data = await users?.delete(userId)
        return data;
    }

    async restore(userId: string) {
        const users = cloudFireStoreManger.getUserDB()
        const data = await users?.restore(userId)
        return data;
    }
}

const userServices = new UserServices()

export default userServices
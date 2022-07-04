import { cloudFireStoreManger } from '../../databases/CloudFirestore'

class UserServices {

    async create(body:any) {
        const users = cloudFireStoreManger.getOperation('users')
        await users?.create(body)
        return "add users successful!"
    }

    async getAll() {
        const users = cloudFireStoreManger.getOperation('users')
        return await users?.get()
    }
}

const userServices = new UserServices()

export default userServices
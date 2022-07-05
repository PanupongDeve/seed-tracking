import { Router, Request, Response, createRouter } from '../../../utils/express';
import { toSnakeCase } from '../../../utils/toSnakeCase';
import userServices from '../../../services/users'
import { UserUpdate} from '../../../models/User'

const router = Router();


router.get('/', async (req: Request, res: Response) => {
    try {
        const users = await userServices.getAll()
        res.send({
            status: 200,
            data: toSnakeCase(users)
        }); 
    } catch (error) {
        res.status(500).send({
            status: 500,
            data: toSnakeCase({ message: error})
        });
    }
})


router.post('/', async (req: Request, res: Response) => {
    if (Object.keys(req.body).length === 0) {
        res.status(400).send({
            status: 400,
            data: toSnakeCase({ message: 'body is required!'})
        })
    } else {
        req.body.status = 'inactive';
        const message = await userServices.create(req.body)
        res.send({
            status: 200,
            data: toSnakeCase({ message })
        });
    }
    
})


router.put('/', (req: Request, res: Response) => {

    res.send({
        status: 403,
        data: toSnakeCase({ message: 'method not allow'})
    });
})


router.delete('/', (req: Request, res: Response) => {

    res.send({
        status: 403,
        data: toSnakeCase({ message: 'method not allow'})
    });
})

router.get('/:userId', async (req: Request, res: Response) => {
    const users = await userServices.getById(req.params.userId)
    if (users?.isEmpty) {
        
        res.status(404).send({
            status: 404,
            data: toSnakeCase({ message: "not found"})
        })
    } else {
        res.send({
            status: 200,
            data: toSnakeCase(users?.data)
        });
    }
    
})


router.post('/:userId', (req: Request, res: Response) => {

    res.send({
        status: 403,
        data: toSnakeCase({ message: 'method not allow'})
    });
})


router.put('/:userId',async (req: Request, res: Response) => {
    if (Object.keys(req.body).length === 0) {
        res.status(400).send({
            status: 400,
            data: toSnakeCase({ message: 'body is required!'})
        })
    } else {
        let input = new UserUpdate(req.body)
        input.clear()
        const user = await userServices.updateById(req.params.userId, input)
        if (user?.isEmpty) {
            res.status(404).send({
                status: 404,
                data: toSnakeCase({ message: "not found"})
            })
        } else {
            res.send({
                status: 200,
                data: toSnakeCase({ message: 'update user success'})
            });
        }  
    } 
})


router.delete('/:userId', async (req: Request, res: Response) => {
    const users = await userServices.delete(req.params.userId)
    if (users?.isEmpty) {
        res.status(404).send({
            status: 404,
            data: toSnakeCase({ message: "not found"})
        })
    } else {
        res.send({
            status: 200,
            data: toSnakeCase({ message: 'delete user success'})
        });
    }  
    
})

router.put('/:userId/restore', async (req: Request, res: Response) => {
    const users = await userServices.restore(req.params.userId)
    if (users?.isEmpty) {
        res.status(404).send({
            status: 404,
            data: toSnakeCase({ message: "not found"})
        })
    } else {
        res.send({
            status: 200,
            data: toSnakeCase({ message: 'restore user success'})
        });
    }  
    
})

const usersRouter = createRouter('v1', 'users', router);


export default usersRouter
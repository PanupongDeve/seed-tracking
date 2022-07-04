import { Router, Request, Response, createRouter } from '../../../utils/express';
import { toSnakeCase } from '../../../utils/toSnakeCase';
import userServices from '../../../services/users'

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
    console.log(req.body)
    if (Object.keys(req.body).length === 0) {
        res.status(400).send({
            status: 400,
            data: toSnakeCase({ message: 'body is required!'})
        })
    } else {
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

router.get('/:userId', (req: Request, res: Response) => {

    res.send({
        status: 200,
        data: toSnakeCase({ message: 'showing user by Id'})
    });
})


router.post('/:userId', (req: Request, res: Response) => {

    res.send({
        status: 403,
        data: toSnakeCase({ message: 'method not allow'})
    });
})


router.put('/:userId', (req: Request, res: Response) => {

    res.send({
        status: 200,
        data: toSnakeCase({ message: 'updating users'})
    });
})


router.delete('/:userId', (req: Request, res: Response) => {

    res.send({
        status: 200,
        data: toSnakeCase({ message: 'delete user by id'})
    });
})

const usersRouter = createRouter('v1', 'users', router);


export default usersRouter
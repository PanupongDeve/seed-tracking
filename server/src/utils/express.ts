import { Router, Request, Response } from 'express';


const createRouter = (version: string, name: string, contentRouter: Router) => {
    const router = Router();  
    return router.use(`/${version}/${name}`, contentRouter)  
}

export {
    Router,
    createRouter,
    Request,
    Response
}
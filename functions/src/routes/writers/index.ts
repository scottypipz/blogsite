import { Request, Response, Router } from 'express'
import RouteInterface from '../../interfaces/route-interface'
import validate from '../../utils/validate'
import RegisterService from './services/RegisterService'
import { ValidationRules } from './validations'

class WriterRoute implements RouteInterface {

    private registerService: RegisterService = new RegisterService()

    routes(): Router {
        return Router()
            .post(
                '/register',
                ValidationRules.register(),
                validate,
                (request: Request, response: Response) => {
                    this.registerService.register(request.body);

                    return response.send(201);
                }
            )
    }
}

export default WriterRoute

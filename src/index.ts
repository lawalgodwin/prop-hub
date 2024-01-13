import express, { Request, Response } from 'express'
import propertyRouter from './routes/property'
import AppController from './controllers/AppController'
import { validateRequest } from './middlewares/Auth'
import userRouter from './routes/user'
// import User from './models/userModel'

const PORT = parseInt((process.env.PORT ?? '5000') as string, 10)


const app = express()

app.use(express.json())

app.use(validateRequest)

app.use('/status', AppController.getStatus)
app.use('/stats', AppController.getstats)

app.use('/api/v1/properties', propertyRouter)
app.use('/api/v1/users', userRouter)

app.use((err: Error, req: Request, res: Response) => {
    console.log(err.message, 'error caught here')
    res.send(err.message)
})

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`))

import express from 'express'
import router from './routes'

const PORT = parseInt((process.env.PORT ?? '5000') as string, 10)

const app = express()

app.use(router)

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`))

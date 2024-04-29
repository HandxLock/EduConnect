import express from 'express'
import cors from 'cors'
import { logger } from 'logger-express'
import 'dotenv/config'
import superAdminRoutes from './routes/superAdmin.routes.js'
import loginRoutes from './routes/login.routes.js'
import userRoutes from './routes/user.routes.js'
import observacionRoutes from './routes/observacion.routes.js'

const PORT = process.env.PORT || 3000

const app = express()

app.use(express.json())
app.use(cors())
app.use(logger())

app.use(superAdminRoutes)
app.use(userRoutes)
app.use(loginRoutes)
app.use(observacionRoutes)
app.listen(PORT, console.log(`Server on http://localhost:${PORT}`))

import express from 'express'
import cors from 'cors'
import { logger } from 'logger-express'
import 'dotenv/config'
import superAdminRoutes from './routes/superAdmin.routes.js'
import verify from './routes/verify.routes.js'
import loginRoutes from './routes/login.routes.js'
import userRoutes from './routes/user.routes.js'
import observacionRoutes from './routes/observacion.routes.js'
import adminRoutes from './routes/admin.routes.js'
import alumnosRoutes from './routes/evaluaciones.routes.js'
import cookieParser from 'cookie-parser'

const PORT = process.env.PORT || 3000

const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}))
app.use(logger())
app.use(verify)
app.use(superAdminRoutes)
app.use(userRoutes)
app.use(loginRoutes)
app.use(observacionRoutes)
app.use(adminRoutes)
app.use(alumnosRoutes)

app.listen(PORT, console.log(`Server on http://localhost:${PORT}`))

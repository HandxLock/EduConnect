import express from 'express'
import cors from 'cors'
import { logger } from 'logger-express'
import 'dotenv/config'
import superAdminRoutes from './routes/superAdmin.routes.js'
import verify from './routes/verify.routes.js'
import loginRoutes from './routes/login.routes.js'
import userRoutes from './routes/user.routes.js'
import observacionRoutes from './routes/observacion.routes.js'
import asignaturaRoutes from './routes/asignatura.routes.js'
import cursoRoutes from './routes/curso.routes.js'
import evaluacionesRoutes from './routes/evaluaciones.routes.js'
import docentesRoutes from './routes/docente.routes.js'
import alumnosRoutes from './routes/alumno.routes.js'
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
app.use(asignaturaRoutes, cursoRoutes)
app.use(evaluacionesRoutes)
app.use(docentesRoutes)
app.use(alumnosRoutes)

app.listen(PORT, console.log(`Server on http://localhost:${PORT}`))

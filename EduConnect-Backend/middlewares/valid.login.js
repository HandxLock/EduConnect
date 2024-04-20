import jwt from 'jsonwebtoken';
import 'dotenv/config';

const validateLogin = async (req, res, next) => {
    try {
        validHeaders(req, res);
        const token = req.header("Authorization").split(" ")[1];
        console.log('token recieved: ', token);
        const tokenDecoded = validToken(token);
        req.person=tokenDecoded
        next();
    } catch (error) {
        console.error(`Error al verificar el token:`, error);
        return res.status(500).json({ message: "Error interno del servidor" });
    }
}

const validToken = async (token, res) => {
    try {
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        console.log('decoded token: ', decodedToken);
        return decodedToken
    } catch (error) {
        throw createError("log_04", "El token disponible no es válido, vuelva a intentar loggear luego de un minuto");
    }
}

const validHeaders = async (req, res) => {
    if(!req.header("Authorization")){
        throw createError("log_03", "No se ha encontrado un token, intente loggear de nuevo");
    }
}

const createError = (code, message) => {
    const error = new Error(message);
    error.code = code;
    return error;
}

export default validateLogin;
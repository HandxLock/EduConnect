import {personByEmailModel} from '../models/personasmodel.js'
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
// import sendErrorResponse from '../../utils/utils.js';

const loginPerson = async (req, res) => {
    const {person} = req.body;

    try {
        const findPerson = await personByEmailModel(person)
        console.log(findPerson);
        if (!findPerson){
            return await sendErrorResponse(res, 'log_01');
        }
        const isPassValid = bcrypt.compareSync(
            person.clave,
            findPerson.clave
        )
        if(!isPassValid){
            return await sendErrorResponse(res, 'log_02')
        }

        const {email, nombre, apellido1, apellido2} = findPerson
        const token = await createToken(email)
        res.status(200).json({
            message: `Bienvenid@ ${nombre} ${apellido1} ${apellido2}, has iniciado sesión satisfactoriamente.`,
            code: 200,
            token
        })

    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

//funcion para crear el token
const createToken = async(email) => {
    const token = jwt.sign({email}, process.env.JWT_SECRET, {
        expiresIn: '60s'
    });
    return token;
};



export default loginPerson;
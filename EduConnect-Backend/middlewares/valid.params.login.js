const validateParamsLogin = (req, res, next) => {
    const { person } = req.body;
    if (!person.email || !person.password) {
        return res.status(400).json({error: "debe ingresar email y contraseña para poder loggear satisfactoriamente"})
    }
    next();
}

export default validateParamsLogin;
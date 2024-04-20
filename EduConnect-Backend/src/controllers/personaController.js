import {createPersonModel, personByEmailModel} from "../models/personasmodel.js";

const createNewPerson = async (req, res) => {
    try {
      const { person } = req.body;
      const newPerson = await createPersonModel(person);
      return res.status(201).json(newPerson);
    } catch (error) {
      console.error(`Error al crear un registro nuevo de persona:`, error);
      return res.status(400).json({ message: "Error interno del servidor" });
    }
};

const getPersonByID = async (req, res) => {
  try {
    const email = req.params;
    // console.log(email);
    const person = await personByEmailModel(email)
    // console.log('user: ', user);
    return res.status(200).json(person);
  } catch (error) {
    console.error(`Error al buscar el registro de la persona:`, error);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
}

export {createNewPerson, getPersonByID}
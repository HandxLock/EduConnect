import { createContext, useState, useEffect} from "react";
const PersonaURL = "/personas.json";

export const PersonasContext = createContext();

const PersonaProvider = ({ children }) => {
    const [Persona, setPersona] = useState([])

    const Personas_data = async (email, clave) => {
        try {
             const Resolution=await fetch(PersonaURL)
             const LoginData = {email, clave}
             if(!Resolution.ok){
                 throw new Error ("Hay un error en la data");
             }
            //  console.log("respuesta de la api", resolution)
            
             const data =await Resolution.json();
            //  console.log('this is data', data);
             const Personas_data = data.personas;
            //  console.log('this is picture_data', Pictures_data);
             const LoginPersona = Personas_data.find(persona => persona.email===LoginData.email)
             if(LoginPersona.clave===LoginData.clave){
                const PersonaValidated=LoginPersona
                setPersona(PersonaValidated)
             }else{
                throw new Error ("Clave incorrecta!");
             }
             
            //  console.log('context data: ', Pictures)
         } catch(error){
             console.error({message:error})
         }
     }

    useEffect(() =>{
        Personas_data(email, clave);
    }, []);

    return (
        <PersonasContext.Provider value={{Persona, setPersona}}>
            {children}
        </PersonasContext.Provider>
    )
}

export default PersonaProvider
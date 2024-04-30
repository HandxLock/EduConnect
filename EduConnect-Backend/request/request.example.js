// ruta post -> http://localhost:3000/user
// {
//     "user":{
//      "rut": "17.365.852-4",
//      "nombre": "Estephan",
//      "apellido1": "Nargul",
//      "apellido2": "Seanfield",
//      "email": "ens@educonnect.cl",
//      "clave": "e1234",
//      "direccion": "por ahi en santiago",
//      "telefono": "+56965784923",
//      "perfilId": "4"
//     }
//   }

// ruta post -> http://localhost:3000/login
// {
//     "user":{
//      "email": "ens@educonnect.cl",
//      "clave": "e1234"
//     }
//   }

// una vez loggeado el usuario de prueba se debe copiar la información del token
// luego pegarla en la pestaña de "Auth" y la parte de "bearer" donde dice Bearer Token
// ruta get -> http://localhost:3000/user/ens@educonnect.cl

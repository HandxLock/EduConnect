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

// ruta -> http://localhost:3000/admin/alumno
// {
//   "alumno":{
//     "user":{
//      "rut": "24.658.452-7",
//      "nombre": "Giorgio",
//      "apellido1": "King",
//      "apellido2": "Perez",
//      "email": "gkp@educonnect.cl",
//      "clave": "g1234",
//      "direccion": "La Cisterna",
//      "telefono": "+56985632571",
//      "perfilId": 4
//     },
//     "colegioID": 1,
//     "cursoID": 1
//   },
//   "apoderado":{
//     "user":{
//      "rut": "16.357.267-1",
//      "nombre": "Federico",
//      "apellido1": "Galvez",
//      "apellido2": "Parra",
//      "email": "fgp@educonnect.cl",
//      "clave": "f1234",
//      "direccion": "La Cisterna",
//      "telefono": "+56947593281",
//      "perfilId": 5
//     },
//     "colegioID": 1
//   }
// }

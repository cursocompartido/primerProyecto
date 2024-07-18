const express = require('express');
const cors = require('cors');
const routes = require('./routes/routes.js');
//function lala(){}

// creación de host const app = express();
const server = () => {

    const app = express(); // Se utiliza para desarrollar aplicaciones web y APIs. ( es un paquete de node)
    // dependencias son los paquetes que se instalan de node con npm (administrador de paquetes de NODE)
    app.use(cors()); // son para las peticiones para el postman,
    app.use(express.json()); // parte del express. permite el formato para recibir las request y las response
    app.use('/api', routes)// require importa algo, /api, es la primero ruta de tu aplicacion.
    app.listen('3000', () => { console.log('Servidor corriendo en puerto 3000') }); // app.listen levanta el servidor de la aplicacion con un puerto especifico
}
server();



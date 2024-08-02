const { Router: eRouter } = require('express');
const router = eRouter();

//TODO: Agregar nuevas routes para propiedades y roles
//TODO: Recordar para que sirve este archivo (routes.js) 

const usuariosRouter = require('../controllers/usuarios/routes');
const clienteRouter = require('../controllers/cliente/routes');
const propiedadesRouter = require('../controllers/Propiedades/routes')


router.use(clienteRouter);
router.use(usuariosRouter);
router.use(propiedadesRouter)



module.exports = router;


const { Router: eRouter } = require('express');
const router = eRouter();

const usuariosRouter = require('../controllers/usuarios/routes');

router.use(usuariosRouter);

const clienteRouter = require('../controllers/cliente/routes')
router.use(clienteRouter)

module.exports = router;


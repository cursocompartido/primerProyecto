const { Router: eRouter } = require('express');
const router = eRouter();

const usuariosRouter = require('../controllers/usuarios/routes');

router.use(usuariosRouter);




module.exports = router;


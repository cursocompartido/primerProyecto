// require importa paquetes externos y funciones creadas por ti.
const { Router, response } = require('express');
const router = Router();

// con el / te muestra las carpetas de tu sistema, ./ te muestra la carpeta actual, ../ va hacia una carpeta atras, ../../ mas carpetas hacia atras
const { getUsuario, postUsuario, deleteUsuario, updateUsuario } = require('./usuarios');

router.get('/user', getUsuario);
router.post('/user', postUsuario);
router.delete('/user', deleteUsuario);
router.put('/user', updateUsuario);
module.exports = router;

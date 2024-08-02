const express = require('express')
const router = express.Router()
const { crearPropiedad, getPropiedad, actualizarPropiedad, eliminarPropiedad, getPropiedadesById } = require('./propiedades')


router.post('/propiedades', crearPropiedad)


router.get('/propiedades', getPropiedad)

router.put('/propiedades/:id', actualizarPropiedad)

router.delete('/propiedades', eliminarPropiedad)

router.get('/propiedades/:id', getPropiedadesById)


module.exports = router;
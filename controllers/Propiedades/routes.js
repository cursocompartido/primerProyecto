const express = require('express')
const router = express.Router()
const { crearPropiedad, getPropiedad, actualizarPropiedad, eliminarPropiedad } = require('./propiedades')


router.post('/Propiedades', crearPropiedad)


router.get('/Propiedades', getPropiedad)

router.put('/Propiedades/:id', actualizarPropiedad)

router.delete('/Propiedades', eliminarPropiedad)

// router.get('/cliente/:id', getClientebyId)


module.exports = router;
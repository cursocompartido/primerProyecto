const express = require('express')
const router = express.Router()
const { crearCliente, getCliente, actualizarCliente, eliminarCliente, getClientebyId } = require('./cliente')


router.post('/cliente', crearCliente) 


router.get( '/cliente', getCliente )

router.put( '/cliente/:id', actualizarCliente)

router.delete( '/cliente', eliminarCliente)

router.get( '/cliente/:id', getClientebyId)


module.exports = router;
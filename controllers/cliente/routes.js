const express = require('express')
const router = express.Router()
const { crearCliente, getClientes, actualizarCliente, eliminarCliente, getClientebyId } = require('./cliente')

//TODO: Agregar middleware para validación de variables
//TODO: Agregar middleware de validación de JWT (USUARIO);


router.post('/cliente', crearCliente)


router.get('/cliente', getClientes)

router.put('/cliente/:id', actualizarCliente)

router.delete('/cliente/:id', eliminarCliente)

router.get('/cliente/:id', getClientebyId)


module.exports = router;
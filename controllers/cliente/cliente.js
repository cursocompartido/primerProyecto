const crearCliente = ( req, res) => {

    return res.json({messange: 'crear'})

}

const getCliente = (req, res) => {
    return res.json({messange: 'get'})
}

const actualizarCliente = (req, res) => {
    
    console.log(req.params)
    console.log(req.body)
    console.log(req.header)
    return res.json({messange: 'actualizar'})
}

const eliminarCliente = (req, res) => {
    return res.json({messange: 'eliminar'})
}

const getClientebyId = (req, res) => {
    console.log(req.params)
    return res.json({messange: 'get2'})
}


module.exports = {
    crearCliente,
    getCliente,
    actualizarCliente,
    eliminarCliente,
    getClientebyId

}
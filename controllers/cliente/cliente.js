

//TODO: Generar SQL atraves de Prisma
//TODO: Cambiar las consultas SQL por funciones de prisma para base de datos
//TODO: Agregar a cada función las consultas correspondientes, ejemplo: Select, Update, Delete
//TODO: Crear las carpeta: propiedades

//TODO: DENTRO DE CONTROLLERS, GENERAR CARPETAS PROPIEDADES
//TODO: HACER LO MISMO QUE HICISTE CON CLIENTE PARA MOSTRAR LAS RUTAS Y CONSUMIRLAS POR POSTMAN
//TODO: VAMOS A PENSAR EL POR QUE DEBEMOS EXTRAER LA LOGICA DESDE ACA A OTRO ARCHIVO
//TODO: REPASO DE REQ, RES (BODY, HEADER, QUERY PARAMS)
const crearCliente = (req, res) => {

    return res.json({ messange: 'crear' })

}

const getCliente = (req, res) => {
    return res.json({ messange: 'get' })
}

const actualizarCliente = (req, res) => {

    console.log(req.params)
    console.log(req.body)
    console.log(req.header)
    return res.json({ messange: 'actualizar' })
}

const eliminarCliente = (req, res) => {
    return res.json({ messange: 'eliminar' })
}

const getClientebyId = (req, res) => {
    console.log(req.params)
    return res.json({ messange: 'get2' })
}


module.exports = {
    crearCliente,
    getCliente,
    actualizarCliente,
    eliminarCliente,
    getClientebyId

}
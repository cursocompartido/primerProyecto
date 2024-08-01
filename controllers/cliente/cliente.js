

//TODO: Generar SQL atraves de Prisma
//TODO: Cambiar las consultas SQL por funciones de prisma para base de datos
//TODO: Agregar a cada función las consultas correspondientes, ejemplo: Select, Update, Delete
//TODO: Crear las carpeta: propiedades

//TODO: DENTRO DE CONTROLLERS, GENERAR CARPETAS PROPIEDADES
//TODO: HACER LO MISMO QUE HICISTE CON CLIENTE PARA MOSTRAR LAS RUTAS Y CONSUMIRLAS POR POSTMAN
//TODO: VAMOS A PENSAR EL POR QUE DEBEMOS EXTRAER LA LOGICA DESDE ACA A OTRO ARCHIVO
//TODO: REPASO DE REQ, RES (BODY, HEADER, QUERY PARAMS)
const crearCliente = (req, res) => {

    return res.json({ message: 'Cliente creado con éxito' })

}

const getCliente = (req, res) => {
    return res.json({ message: 'Obteniendo Clientes' })
}

const actualizarCliente = (req, res) => {

    console.log('Parámetros de la ruta:', req.params) // Muestra los parámetros de la ruta
    console.log( 'Cuerpo de la solicitud', req.body) // Muestra el cuerpo de la solicitud
    console.log('Headers de la solicitud',req.headers) // Muestra los headers de la solicitud
    
    return res.json({ message: 'Cliente Actualizado con éxito' })
}

const eliminarCliente = (req, res) => {
    return res.json({ message: 'Cliente eliminado con éxito' })
}

const getClientebyId = (req, res) => {
    console.log(req.params)
    return res.json({ message: 'Obteniendo cliente por ID' })
}


module.exports = {
    crearCliente,
    getCliente,
    actualizarCliente,
    eliminarCliente,
    getClientebyId

}
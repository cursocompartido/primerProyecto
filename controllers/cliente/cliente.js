

//TODO: Generar SQL atraves de Prisma
//TODO: Cambiar las consultas SQL por funciones de prisma para base de datos
//TODO: Agregar a cada función las consultas correspondientes, ejemplo: Select, Update, Delete
//TODO: Crear las carpeta: propiedades

//TODO: DENTRO DE CONTROLLERS, GENERAR CARPETAS PROPIEDADES
//TODO: HACER LO MISMO QUE HICISTE CON CLIENTE PARA MOSTRAR LAS RUTAS Y CONSUMIRLAS POR POSTMAN
//TODO: VAMOS A PENSAR EL POR QUE DEBEMOS EXTRAER LA LOGICA DESDE ACA A OTRO ARCHIVO
//TODO: REPASO DE REQ, RES (BODY, HEADER, QUERY PARAMS)
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient

const crearCliente = async(req, res) => {

    const body = req.body;

    //const { name, email, password } = body;

    //console.log({...body});

try {

//INSERT INTO cliente (name,email,password)values("Matias Queirolo","matiasq@gmail.com","123456")
const newCliente = await prisma.cliente.create({
    data: {
        ...body
    },
})

return res.json({ message: 'Cliente creado con éxito', newCliente })
    
} catch (error) {
    throw new Error(error);
}

}

const getClientes = async(req, res) => {

    const take = +req.query.take;
    const skip = +req.query.skip;

    console.log({take, skip});

    try {

        //SELECT * FROM cliente
        const getCliente = await prisma.cliente.findMany();

        return res.json({
            getCliente
        });
        
    } catch (error) {
        throw new Error(error);
    }

}

const actualizarCliente = async(req, res) => {

    const id = +req.params.id;
    const body = req.body;

    try {

        // UPDATE cliente SET column1 = value1, column2 = value2
        const updateCliente = await prisma.cliente.update({
            where:{id},
            data:{
                ...body
            }
        })
        
        return res.json({ message: 'Cliente Actualizado con éxito', updateCliente });
    } catch (error) {
       console.log(error)
    }

   
}

const eliminarCliente = async(req, res) => {

    const id = +req.params.id;


    try {
        
        // DELETE * FROM cliente WHERE id = id
        const deleteClient = await prisma.cliente.delete({
            where:{id}
        })

        

    return res.json({ message: 'Cliente eliminado con éxito', deleteClient });
    } catch (error) {
        throw new error(error);
    }


}

const getClientebyId = async(req, res) => {
    const id = +req.params.id;

    try {

        // SELECT * FROM cliente WHERE id = id
        const getClient = await prisma.cliente.findFirst({
            where:{id}
        })

        return res.json({
            message: 'get Cliente',
            getClient
        })
    } catch (error) {
        throw new Error(error);
    }
}


module.exports = {
    crearCliente,
    getClientes,
    actualizarCliente,
    eliminarCliente,
    getClientebyId

}
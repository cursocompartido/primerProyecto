
const crearPropiedad = (req, res) => {

    return res.json({ message: 'Propiedad creada con éxito' })

}

const getPropiedad = (req, res) => {
    return res.json({ message: 'Obteniendo Propiedad' })
}

const actualizarPropiedad = (req, res) => {

    console.log('Parámetros de la ruta:', req.params) // Muestra los parámetros de la ruta
    console.log('Cuerpo de la solicitud', req.body) // Muestra el cuerpo de la solicitud
    console.log('Headers de la solicitud',req.headers) // Muestra los headers de la solicitud
    
    return res.json({ message: 'Propiedad actualizada con éxito' })
}

const eliminarPropiedad = (req, res) => {
    return res.json({ message: 'Propiedad eliminada con éxito' })
}

// const getPropiedadId = (req, res) => {
//     console.log(req.params)
//     return res.json({ message: 'Obteniendo Propiedad por ID' })
// }


module.exports = {
    crearPropiedad,
    getPropiedad,
    actualizarPropiedad,
    eliminarPropiedad

}
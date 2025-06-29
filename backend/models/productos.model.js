// Importamos mongoose para la creación de los schemas
const mongoose = require('../config/connetiondb')

// El esquema es basicamente eso xd, un molde en el cual se van a ingresar los datos a las colecciones creadas en la DB
const schemaProductos = new mongoose.Schema({
    referencia:{
        type: String,
        required: [true,'La referencia es obligatoria']
    },
    nombre:{
        type: String,
        required: [true,'Asignar un nombre es obligatorio']
    },
    descripcion:{
        type: String,
        required: [true,'La escripcion es obligatoria']
    },
    precio:{
        type:Number,
        default: [0,'El precio por defecto es cero'],
        min: [0,'El precio minimo es cero']
    },
    stock:{
        type: Number,
        default: [0,'El stock por defecto es cero'],
        min: [0,'El stock por defecto es cero']
    },
    imagen:{
        type: String,
        required: [true,'no existe la imagen o ruta a la imagen por defecto']
    },
    habilitado:{
        type: Boolean,
        default: true
    },
}, {
    versionKey: false
})

const productos = mongoose.model('Productos', schemaProductos)
module.exports = productos
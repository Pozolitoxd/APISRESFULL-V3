const mongoose = require('../config/connetiondb')
const newId = new mongoose.Types.ObjectId();

const modelEstudiantes = new mongoose.Schema({

    estudiante: [
        {
            token: {
                type: newId
            }
        },
        {
            nombre: {
                type: String,
                required: [true, "El nombre es obligatorio"]
            }
        }
    ]
})
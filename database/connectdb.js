
import mongoose from "mongoose";

try {
    await mongoose.connect(process.env.URI_MONGO)
    console.log('Conectado a DATABASE')
} catch (error) {
    console.log('ERROR DE CONEXION A DATABASE' + error);
}
import "dotenv/config"
import "./database/connectdb.js"
import express from "express";
import authRouter from './routes/auth.route.js'

const app = express()

app.use(express.json());
app.use('/', authRouter);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log("Servidor en puerto " + PORT))
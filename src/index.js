import express from "express";
import { dirname,join} from "path"; //permite crear ruta absoluta
import {fileURLToPath  } from "url";
import  Rutas from './routes/index.js'
const app=express()
app.listen(4500)
console.log("servidor escuchando en el puerto en el puerto",4500)

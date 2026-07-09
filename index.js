import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import productsRouter from "./src/routes/products.router.js";
import categoriesRouter from "./src/routes/categories.router.js";
import usersRouter from "./src/routes/users.router.js";
import authRouter from "./src/routes/auth.router.js";
import { auth } from "./src/middlewares/auth.middleware.js";

const app = express();

app.use(express.json());
app.use(cors());
//app.use("/api/auth", authRouter);

app.get("/", (req, res) => {
  //res.send(`
  //  <h1>API de productos</h1>
  // <p>Servidor funcionando correctamente</p>
  //`);
  res.json({
    message: "Servidor funcionando correctamente",
  });
});

/*app.get("/parametros/:uid/category/:catId", (req, res) => {
  console.log(req.params);
  res.send(`El id del usuario es: ${req.params.uid} y la categoría es: ${req.params.catId}`);
});

app.get("/query/params", (req, res) => {
  console.log(req.query); 
  const { limit } = req.query;
  res.send(`El parámetro de consulta es: $ {limit }`);
});
*/
app.use (`/api/products`, productsRouter);
app.use (`/api/categories`, categoriesRouter);
app.use (`/api/users`, usersRouter);
app.use (`/api/auth`, authRouter);


app.get("/up", (req, res) => {
  res.json({ 
    status: "ok", 
    message: "Servidor activo" })
  });     

app.use((req, res) => {
  res.status(404).json({
    error: "Ruta no encontrada",
  });
});
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

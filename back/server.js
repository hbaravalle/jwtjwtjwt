const userController = require("./controllers/userController");
const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));

app.post("/register", userController.store);
app.post("/login", userController.token);

app.get("/users/:id", userController.show);

app.listen(3000, () => console.log("Servidor corriendo en el puerto 3000"));

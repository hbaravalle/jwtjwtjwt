const User = require("../models/User");

async function store(req, res) {
  const user = await new User({
    firsname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    password: req.body.password,
  });
  await user.save();
  return res.json("Se ha creado un nuevo usuario");
}

async function token(req, res) {
  // Buscar en la BBDD el usuario que se está logueando
  // Si existe, ver si su contraseña es correcta
  return res.json("Estás intentando loguearte");
}

async function show(req, res) {
  return res.json("Cómo acceder a la info del usuario que está logueado?");
}

module.exports = {
  store,
  token,
  show,
};

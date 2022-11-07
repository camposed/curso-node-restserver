const { response, request } = require("express");

const usuariosGet = (req = request, res = response) => {
  const { q, nombre = "No name", apikey } = req.query;
  res.json({
    msg: "get API -  controlador",
    q,
    nombre,
    apikey,
  });
};

const usuariosPut = (req, res = response) => {
  const { id } = req.params;

  res.status(400).json({
    msg: "put API - controlador",
    id: id,
  });
};

const usuariosPost = (req, res = response) => {
  const { nombre, edad } = req.body;

  res.status(201).json({
    msg: "post API -  controlador",
    nombre: nombre,
    edad: edad,
  });
};

const usuariosDelete = (req, res = response) => {
  res.json({
    msg: "delete API - controlador",
  });
};

module.exports = {
  usuariosGet,
  usuariosPut,
  usuariosPost,
  usuariosDelete,
};

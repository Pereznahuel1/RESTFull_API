const express = require('express');
const router = express.Router();

// Datos simulados
let usuarios = [
    { id: 1, nombre: "Nahuel" },
    { id: 2, nombre: "Lucía" },
];

// Obtener todos los usuarios
router.get('/', (req, res) => {
    res.json(usuarios);
});

// Obtener un usuario por ID
router.get('/:id', (req, res) => {
    const usuario = usuarios.find(u => u.id == req.params.id);
    if (usuario) res.json(usuario);
    else res.status(404).json({ error: "Usuario no encontrado" });
});

// Crear nuevo usuario
router.post('/', (req, res) => {
    const nuevoUsuario = req.body;
    nuevoUsuario.id = usuarios.length + 1;
    usuarios.push(nuevoUsuario);
    res.status(201).json(nuevoUsuario);
});

// Actualizar usuario
router.put('/:id', (req, res) => {
    const index = usuarios.findIndex(u => u.id == req.params.id);
    if (index !== -1) {
    usuarios[index] = { ...usuarios[index], ...req.body };
    res.json(usuarios[index]);
    } else res.status(404).json({ error: "Usuario no encontrado" });
});

// Eliminar usuario
router.delete('/:id', (req, res) => {
    usuarios = usuarios.filter(u => u.id != req.params.id);
    res.json({ mensaje: "Usuario eliminado" });
});

module.exports = router;
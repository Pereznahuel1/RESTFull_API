const express = require('express');
const router = express.Router();

let libros = [
  { id: 1, titulo: 'Cien años...', existencia: 3 },
  { id: 2, titulo: 'El Principito', existencia: 0 }
];

let prestamos = [
  { id: 1, id_usuario: 1, id_libro: 2 },
  { id: 2, id_usuario: 1, id_libro: 1 }
];

// Libros disponibles para préstamo
router.get('/libros/disponibles', (req, res) => {
  const disponibles = libros.filter(l => l.existencia > 0);
  res.json(disponibles);
});

// Préstamos por usuario
router.get('/prestamos/usuario/:id_usuario', (req, res) => {
  const delUsuario = prestamos.filter(p => p.id_usuario == req.params.id_usuario);
  res.json(delUsuario);
});

// Préstamos por libro
router.get('/prestamos/libro/:id_libro', (req, res) => {
  const delLibro = prestamos.filter(p => p.id_libro == req.params.id_libro);
  res.json(delLibro);
});

module.exports = router;

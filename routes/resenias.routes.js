const express = require('express');
const router = express.Router();

let resenias = [
  { id: 1, id_libro: 1, texto: 'Muy bueno' },
  { id: 2, id_libro: 2, texto: 'Emotivo' }
];

// Obtener todas las reseñas
router.get('/', (req, res) => {
  res.json(resenias);
});

// Obtener una reseña por ID
router.get('/:id', (req, res) => {
  const resenia = resenias.find(r => r.id == req.params.id);
  resenia ? res.json(resenia) : res.status(404).json({ error: 'Reseña no encontrada' });
});

// Obtener reseñas de un libro específico
router.get('/libro/:id_libro', (req, res) => {
  const filtradas = resenias.filter(r => r.id_libro == req.params.id_libro);
  res.json(filtradas);
});

// Crear nueva reseña
router.post('/', (req, res) => {
  const nueva = { ...req.body, id: resenias.length + 1 };
  resenias.push(nueva);
  res.status(201).json(nueva);
});

// Actualizar una reseña
router.put('/:id', (req, res) => {
  const index = resenias.findIndex(r => r.id == req.params.id);
  if (index !== -1) {
    resenias[index] = { ...resenias[index], ...req.body };
    res.json(resenias[index]);
  } else {
    res.status(404).json({ error: 'Reseña no encontrada' });
  }
});

// Eliminar reseña
router.delete('/:id', (req, res) => {
  resenias = resenias.filter(r => r.id != req.params.id);
  res.json({ mensaje: 'Reseña eliminada' });
});

module.exports = router;
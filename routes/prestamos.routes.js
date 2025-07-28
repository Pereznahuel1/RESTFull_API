const express = require('express');
const router = express.Router();

let prestamos = [
    { id: 1, id_usuario: 1, id_libro: 2, fecha: '2025-07-28' }
];

// Obtener todos los préstamos
router.get('/', (req, res) => {
    res.json(prestamos);
});

// Obtener préstamo por ID
router.get('/:id', (req, res) => {
    const prestamo = prestamos.find(p => p.id == req.params.id);
    prestamo ? res.json(prestamo) : res.status(404).json({ error: 'Préstamo no encontrado' });
});

// Crear nuevo préstamo
router.post('/', (req, res) => {
    const nuevo = { ...req.body, id: prestamos.length + 1 };
    prestamos.push(nuevo);
    res.status(201).json(nuevo);
});

// Actualizar préstamo
router.put('/:id', (req, res) => {
    const index = prestamos.findIndex(p => p.id == req.params.id);
    if (index !== -1) {
    prestamos[index] = { ...prestamos[index], ...req.body };
    res.json(prestamos[index]);
    } else {
    res.status(404).json({ error: 'Préstamo no encontrado' });
    }
});

// Eliminar préstamo
router.delete('/:id', (req, res) => {
    prestamos = prestamos.filter(p => p.id != req.params.id);
    res.json({ mensaje: 'Préstamo eliminado' });
});

module.exports = router;
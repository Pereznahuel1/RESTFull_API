const express = require('express');
const router = express.Router();

let libros = [
    { id: 1, titulo: 'Cien años de soledad', autor: 'García Márquez', existencia: 3 },
    { id: 2, titulo: 'El Principito', autor: 'Saint-Exupéry', existencia: 0 },
];

// Obtener todos los libros
router.get('/', (req, res) => {
    res.json(libros);
});

// Obtener un libro por su ID
router.get('/:id', (req, res) => {
    const libro = libros.find(l => l.id == req.params.id);
    libro ? res.json(libro) : res.status(404).json({ error: 'Libro no encontrado' });
});

// Crear un nuevo libro
router.post('/', (req, res) => {
    const nuevoLibro = { ...req.body, id: libros.length + 1 };
    libros.push(nuevoLibro);
    res.status(201).json(nuevoLibro);
});

// Actualizar un libro
router.put('/:id', (req, res) => {
    const index = libros.findIndex(l => l.id == req.params.id);
    if (index !== -1) {
    libros[index] = { ...libros[index], ...req.body };
    res.json(libros[index]);
    } else {
    res.status(404).json({ error: 'Libro no encontrado' });
    }
});

// Actualizar existencia
router.put('/:id/existencia', (req, res) => {
    const libro = libros.find(l => l.id == req.params.id);
    if (libro) {
    libro.existencia = req.body.existencia;
    res.json(libro);
    } else {
    res.status(404).json({ error: 'Libro no encontrado' });
    }
});

// Eliminar un libro
router.delete('/:id', (req, res) => {
    libros = libros.filter(l => l.id != req.params.id);
    res.json({ mensaje: 'Libro eliminado' });
});

module.exports = router;
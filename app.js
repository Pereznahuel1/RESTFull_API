const express = require('express');
const app = express();

app.use(express.json()); // para interpretar JSON en los POST y PUT

// ========== ENDPOINTS ==========

// ---------- Usuarios ----------
app.get('/usuarios', (req, res) => {
  res.send('Obtener todos los usuarios');
});

app.get('/usuarios/:id', (req, res) => {
  res.send(`Obtener usuario con ID ${req.params.id}`);
});

app.post('/usuarios', (req, res) => {
  res.send('Crear un nuevo usuario');
});

app.put('/usuarios/:id', (req, res) => {
  res.send(`Actualizar usuario con ID ${req.params.id}`);
});

app.delete('/usuarios/:id', (req, res) => {
  res.send(`Eliminar usuario con ID ${req.params.id}`);
});

// ---------- Libros ----------
app.get('/libros', (req, res) => {
  res.send('Obtener todos los libros');
});

app.get('/libros/:id', (req, res) => {
  res.send(`Obtener libro con ID ${req.params.id}`);
});

app.post('/libros', (req, res) => {
  res.send('Crear un nuevo libro');
});

app.put('/libros/:id', (req, res) => {
  res.send(`Actualizar libro con ID ${req.params.id}`);
});

app.put('/libros/:id/existencia', (req, res) => {
  res.send(`Actualizar existencia del libro con ID ${req.params.id}`);
});

app.delete('/libros/:id', (req, res) => {
  res.send(`Eliminar libro con ID ${req.params.id}`);
});

// ---------- Préstamos ----------
app.get('/prestamos', (req, res) => {
  res.send('Obtener todos los préstamos');
});

app.get('/prestamos/:id', (req, res) => {
  res.send(`Obtener préstamo con ID ${req.params.id}`);
});

app.post('/prestamos', (req, res) => {
  res.send('Crear un nuevo préstamo');
});

app.put('/prestamos/:id', (req, res) => {
  res.send(`Actualizar préstamo con ID ${req.params.id}`);
});

app.delete('/prestamos/:id', (req, res) => {
  res.send(`Eliminar préstamo con ID ${req.params.id}`);
});

// ---------- Reseñas ----------
app.get('/resenias', (req, res) => {
  res.send('Obtener todas las reseñas');
});

app.get('/resenias/:id', (req, res) => {
  res.send(`Obtener reseña con ID ${req.params.id}`);
});

app.get('/resenias/libro/:id_libro', (req, res) => {
  res.send(`Obtener reseñas del libro con ID ${req.params.id_libro}`);
});

app.post('/resenias', (req, res) => {
  res.send('Crear una nueva reseña');
});

app.put('/resenias/:id', (req, res) => {
  res.send(`Actualizar reseña con ID ${req.params.id}`);
});

app.delete('/resenias/:id', (req, res) => {
  res.send(`Eliminar reseña con ID ${req.params.id}`);
});

// ---------- Lógicas específicas ----------
app.get('/libros/disponibles', (req, res) => {
  res.send('Obtener libros disponibles');
});

app.get('/prestamos/usuario/:id_usuario', (req, res) => {
  res.send(`Obtener préstamos del usuario con ID ${req.params.id_usuario}`);
});

app.get('/prestamos/libro/:id_libro', (req, res) => {
  res.send(`Obtener préstamos del libro con ID ${req.params.id_libro}`);
});

// ========== INICIAR SERVIDOR ==========
app.listen(8080, () => {
  console.log('Servidor corriendo en http://localhost:8080');
});

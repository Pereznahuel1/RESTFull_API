const express = require('express');
const app = express();
const PORT = 8080;

// Middleware para leer JSON
app.use(express.json());

// Importar rutas
const usuariosRoutes = require('./routes/usuarios.routes');
const librosRoutes = require('./routes/libros.routes');
const prestamosRoutes = require('./routes/prestamos.routes');
const reseniasRoutes = require('./routes/resenias.routes');
const logicaRoutes = require('./routes/logica.routes');

// Usar rutas
app.use('/usuarios', usuariosRoutes);
app.use('/libros', librosRoutes);
app.use('/prestamos', prestamosRoutes);
app.use('/resenias', reseniasRoutes);
app.use('/', logicaRoutes); // Lógicas específicas

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:8080`);
});
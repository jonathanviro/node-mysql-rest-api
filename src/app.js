import express from 'express';
import indexRoutes from './routes/index.routes.js';
import employeesRoutes from './routes/employees.routes.js';

const app = express();

//Para interpretar los json en un objeto javascript
app.use(express.json());

//Rutas peticiones http
app.use('/api', indexRoutes);
app.use('/api', employeesRoutes);

//Cuando se hace una peticion que no se tiene
app.use((req, res, next) => {
    res.status(404).json({
        message: 'Endpoint no encontrado',
    });
});

export default app;
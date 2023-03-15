import express from "express"
import projectsRoutes from './routes/projects.routes.js';
import TasksRoutes from './routes/tasks.routes.js';
const app = express();

app.use(express.json());
app.use(projectsRoutes, TasksRoutes);


export default app;
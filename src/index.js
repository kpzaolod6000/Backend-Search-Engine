import express from 'express'
import seekerRoutes from './routes/seeker.routes.js'
import indexRoutes from './routes/index.routes.js'

const app = express();

app.use(express.json());

app.use(indexRoutes);
app.use('/api',seekerRoutes);

app.listen(3000);

console.log('Server running on port 3000');
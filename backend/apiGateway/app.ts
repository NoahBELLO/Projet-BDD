import express, { Application, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { ClickHouseRoutes, PostgreSqlRoutes } from "./route/routes";
import 'dotenv/config';
import { createProxyMiddleware } from 'http-proxy-middleware';

dotenv.config();

const app: Application = express();
const port: number = parseInt(process.env.Api_Port as string);

app.use(express.json());

const corsOptions = {
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));

// ClickHouseRoutes(app);
// PostgreSqlRoutes(app);

// Configurations des proxy pour rediriger les requêtes vers les API en fonction du chemin
app.use('/oltp', createProxyMiddleware({
  target: 'http://api_oltp:3002', // URL de l'API de PostgreSQL
  changeOrigin: true,
  logger: console,
  pathRewrite: (path, req) => {
    return path.replace(/^\/oltp/, '');
  }
}));

app.use('/olap', createProxyMiddleware({
  target: 'http://api_olap:3003', // URL de l'API de ClickHouse
  changeOrigin: true,
  logger: console,
  pathRewrite: (path, req) => {
    return path.replace(/^\/olap/, '');
  }
}));

// Middleware pour gérer les erreurs 500 (erreurs serveur)
app.use(
  (err: Error, req: Request, res: Response, next: NextFunction): void => {
    console.error(err.stack);
    res.status(500).json({ message: "Erreur interne du serveur" });
  }
);

// app.get('/', (req: Request, res: Response) => res.send('Gateway API'));

// Démarrer le serveur
app.listen(port, (): void => {
  console.log(`API en cours d'exécution sur http://localhost:${port} (pour tester avec Postman)`);
  console.log(`API en cours d'exécution sur http://api_gateway:${port} (pour utilisation dans le network Docker)`);
});
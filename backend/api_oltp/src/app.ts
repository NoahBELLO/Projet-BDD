import express, { Application, Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import Routes from "./routes/api_oltp.route";
import Controllers from "./controllers/api_oltp.controller";
import 'dotenv/config';
// import { db } from './databases';

dotenv.config();
const app: Application = express();
const port: number = 3000;

const controllers: Controllers = new Controllers();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// db()
app.use("/api", Routes);

// Middleware pour gérer les erreurs 500 (erreurs serveur)
app.use(
  (err: Error, req: Request, res: Response, next: NextFunction): void => {
    console.error(err.stack);
    res.status(500).json({ message: "Erreur interne du serveur" });
  }
);

// Démarrer le serveur
app.listen(port, (): void => {
  console.log(`API en cours d'exécution sur http://localhost:${port}`);
});
import express, { Application, Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import Routes from "./route/routes";
import Controllers from "./controller/controllers";
import 'dotenv/config';

dotenv.config();

const app: Application = express();
const port: number = parseInt(process.env.Api_Port as string);

const controllers: Controllers = new Controllers();
app.use(express.json());
// app.use(express.urlencoded({ extended: true })); // permet d'utiliser le format x-www-form-urlencoded

app.use("/apiPostgreSql", Routes);

// Middleware pour gérer les erreurs 500 (erreurs serveur)
app.use(
  (err: Error, req: Request, res: Response, next: NextFunction): void => {
    console.error(err.stack);
    res.status(500).json({ message: "Erreur interne du serveur" });
  }
);

// Démarrer le serveur
app.listen(port, (): void => {
  console.log(`API en cours d'exécution sur http://localhost:${port} (pour tester avec Postman)`);
  console.log(`API en cours d'exécution sur http://api_oltp:${port} (pour utilisation dans le network Docker)`);
});
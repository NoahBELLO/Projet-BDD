import { Request, Response } from 'express';
// import { UserModel } from './userModel';
// import { TokenModel } from './tokenModel';

class Controller {
    async getAll(req: Request, res: Response): Promise<void> {
        try {
            // let users = await UserModel.collection.find({}).toArray();
            // if (!users) {
            //     throw new Error("Liste utilisateur non trouvée");
            // }
            res.status(201).json({ message: "Toutes les recommendations" });
        }
        catch (err) {
            res.status(500).json({ message: "Aucun recommendations trouver" });
        }
    }

    async get(req: Request, res: Response): Promise<void> {
        try {
            // let { adresseMail } = req.params;
            // if (!adresseMail) {
            //     throw new Error("Email manquant");
            // }

            // let user = await UserModel.collection.findOne({ adresseMail: adresseMail });
            // if (!user) {
            //     throw new Error("Utilisateur non trouvée");
            // }
            res.status(201).json({ message: "Recommendation trouvée" });
        }
        catch (err) {
            res.status(500).json({ message: "Aucun recommendation trouver" });
        }
    }

    // async create(req: Request, res: Response): Promise<void> {
    //     try {
    //         // const { nom, prenom, adresseMail, role } = req.body;
    //         // if (!nom || !prenom || !adresseMail || !role) {
    //         //     throw new Error("Information manquant");
    //         // }

    //         // let user = await UserModel.collection.insertOne(newUtilisateur);
    //         // if (!user) {
    //         //     throw new Error("Utilisateur non crée");
    //         // }

    //         res.status(201).json({ message: "Recommendation crée" });
    //     }
    //     catch (err) {
    //         res.status(500).json({ message: "Aucun recommendation crée" });
    //     }
    // }

    // async update(req: Request, res: Response): Promise<void> {
    //     try {
    //         // const { adresseMail, grainDeSel, motDePasse, /* mdpHasher */ } = req.body;
    //         // if (!adresseMail || !grainDeSel || !motDePasse) {
    //         //     throw new Error("Information manquant");
    //         // }

    //         // const result = await UserModel.collection.updateOne(
    //         //     { adresseMail: adresseMail },
    //         //     { $set: updateUtilisateur }
    //         // );
    //         // if (result.modifiedCount === 0) {
    //         //     throw new Error("Aucun utilisateur mis à jour");
    //         // }

    //         // const user = await UserModel.collection.findOne({ adresseMail: adresseMail });
    //         // if (!user) {
    //         //     throw new Error("Utilisateur non trouvée");
    //         // }

    //         // let tokenBDD = await TokenModel.collection.updateOne(
    //         //     { userId: user._id },
    //         //     { $set: tokenObjet }
    //         // );
    //         // if (!tokenBDD.modifiedCount) {
    //         //     throw new Error("Aucun token mis à jour");
    //         // }

    //         res.status(201).json({ message: "Recommendation mis à jour" });
    //     }
    //     catch (err) {
    //         res.status(500).json({ message: "Aucun recommendation mis à jour" });
    //     }
    // }

    // async delete(req: Request, res: Response): Promise<void> {
    //     try {
    //         // const { adresseMail, grainDeSel, motDePasse, /* mdpHasher */ } = req.body;
    //         // if (!adresseMail || !grainDeSel || !motDePasse) {
    //         //     throw new Error("Information manquant");
    //         // }

    //         // const result = await UserModel.collection.updateOne(
    //         //     { adresseMail: adresseMail },
    //         //     { $set: updateUtilisateur }
    //         // );
    //         // if (result.modifiedCount === 0) {
    //         //     throw new Error("Aucun utilisateur mis à jour");
    //         // }

    //         // const user = await UserModel.collection.findOne({ adresseMail: adresseMail });
    //         // if (!user) {
    //         //     throw new Error("Utilisateur non trouvée");
    //         // }

    //         // let tokenBDD = await TokenModel.collection.updateOne(
    //         //     { userId: user._id },
    //         //     { $set: tokenObjet }
    //         // );
    //         // if (!tokenBDD.modifiedCount) {
    //         //     throw new Error("Aucun token mis à jour");
    //         // }

    //         res.status(201).json({ message: "Recommendation supprimer" });
    //     }
    //     catch (err) {
    //         res.status(500).json({ message: "Aucun recommendation supprimer" });
    //     }
    // }
}
export default Controller;
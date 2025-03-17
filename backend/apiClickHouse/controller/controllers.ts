import { Request, Response } from 'express';
import client from '../database/db';

class Controller {
    async getRecommandation(req: Request, res: Response): Promise<void> {
        try {
            const { item_id, limit } = req.query;

            const query = `
                SELECT achat.item_id AS item_id, 
                COUNT(item_id) AS nombreDeFoisItemVu 
                FROM train_sessions AS sessions 
                INNER JOIN train_purchases AS achat ON sessions.session_id = achat.session_id 
                WHERE sessions.item_id = {item_id: UInt32}
                GROUP BY item_id
                ORDER BY nombreDeFoisItemVu DESC, item_id ASC
                LIMIT {limit: UInt32}
            `;// mettre le order by en fonction du nombre de fois l'item apparait (count de l'item_id en fonction de la session_id)

            const results = await client.query({
                query,
                query_params: {
                    item_id: Number(item_id),
                    limit: Number(limit),
                },
                format: 'JSONEachRow',
            });

            const achatsList = (await results.json()) as { item_id: string }[];

            const listeRecommandation = achatsList.map(achatsList => achatsList.item_id);

            res.status(200).json({ "recommendations": listeRecommandation });
        }
        catch (err) {
            console.error('Erreur:', err);
            res.status(500).json({ message: "Aucune recommandation trouvée" });
        }
    }

    async getRecommandationComplexe(req: Request, res: Response): Promise<void> {
        try {
            const { item_id, limit } = req.body;
            res.status(200).json({ "item_id": item_id, "limit": limit });
            // const query = `
            //     SELECT achat.item_id AS item_id
            //     FROM train_sessions AS sessions 
            //     INNER JOIN train_purchases AS achat 
            //     ON sessions.session_id = achat.session_id 
            //     WHERE sessions.item_id = {item_id: UInt32} 
            //     LIMIT {limit: UInt32}
            // `;

            // const results = await client.query({
            //     query,
            //     query_params: {
            //         item_id: Number(item_id),
            //         limit: Number(limit),
            //     },
            //     format: 'JSONEachRow',
            // });

            // const achatsList = (await results.json()) as { item_id: string }[];

            // const listeRecommandation = achatsList.map(achatsList => achatsList.item_id);

            // res.status(200).json({ "recommendations": listeRecommandation });
        }
        catch (err) {
            console.error('Erreur:', err);
            res.status(500).json({ message: "Aucune recommandation trouvée" });
        }
    }
}

export default Controller;
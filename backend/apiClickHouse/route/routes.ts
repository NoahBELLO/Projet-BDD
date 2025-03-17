import { Router } from 'express';
import Controller from "../controller/controllers";
const router: Router = Router();
const controller: Controller = new Controller();

router.get('/', controller.getRecommandation);
// router.get('/', (req, res) => { res.send('ClickHouse API 2') });
router.post('/', controller.getRecommandationComplexe);

export default router;
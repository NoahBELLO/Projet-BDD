import { Router } from 'express';
import Controller from "./controllers";
const router: Router = Router();
const controller: Controller = new Controller();

router.get('/', controller.getAll);
router.get('/:id', controller.get);
// router.post('/inscription', controller.create);
// router.put('/updateUser', controller.update);
// router.delete('/deleteUser/:id', controller.delete);

export default router;
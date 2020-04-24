import { Router } from 'express';
import UserController from '../controllers/user';

const router = new Router();

router.get('/', (req, res) => UserController.get(req, res));
router.get('/:id', UserController.getOne);
router.post('/', UserController.create);
router.put('/:id', UserController.update);
router.delete('/:id', UserController.delete);

export default router;

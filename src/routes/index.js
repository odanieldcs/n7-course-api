import { Router } from 'express';
import userRouter from './user';

const router = new Router();

router.get('/healths', (req, res) => res.status(200).json({ status: 'UP' }));
router.use('/users', userRouter);

export default router;

import { Router, Request, Response } from 'express';
import {
  getCurrentServices,
} from '../controllers/serviceController';

const router = Router();

router.route('/services/getServices').get((_: Request, res: Response) => {
  getCurrentServices((status, response) => {
    res.status(status).json(response);
  });
});

export default router;

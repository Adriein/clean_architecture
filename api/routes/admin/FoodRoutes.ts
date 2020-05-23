import { Router, Request, Response } from 'express';
import express from 'express';

const router: Router = express.Router();

router
  .get('/food/:id', async (req: Request, res: Response) => {
    return;
  })
  .get('/food', async (req: Request, res: Response) => {
    return;
  })
  .post('/food', async (req: Request, res: Response) => {
    return;
  })
  .put('/food/:id', async (req: Request, res: Response) => {
    return;
  });

export { router as foodRouter };

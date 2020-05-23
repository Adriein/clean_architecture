import { Router, Request, Response } from 'express';
import express from 'express';
import { UsersOverviewUseCase } from '../../core/usecases';
import UsersCreateUseCase from '../../core/usecases/users/UserCreateUseCase';

const router: Router = express.Router();

router
  .get('/overview', async (req: Request, res: Response) => {
    const usecase = new UsersOverviewUseCase();
    const response = await usecase.execute();
    res.send(response.getData());
    return;
  })
  .get('/profile/:id', async (req: Request, res: Response) => {
    return;
  })
  .post('/profile', async (req: Request, res: Response) => {
    const usecase = new UsersCreateUseCase();
    const response = await usecase.execute(undefined, req.body);
    res.send(response.getData());
    return;
  })
  .put('/profile/:id', async (req: Request, res: Response) => {
    return;
  })
  .delete('/profile/:id', async (req: Request, res: Response) => {
    return;
  });

export { router as userRouter };

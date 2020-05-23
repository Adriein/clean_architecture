import { Router, Request, Response, NextFunction } from 'express';
import express from 'express';
import { UsersOverviewUseCase } from '../../core/usecases';
import UsersCreateUseCase from '../../core/usecases/users/UserCreateUseCase';
import UsersReadUseCase from '../../core/usecases/users/UserReadUseCase';
import Database from '../../infrastructure/data/Database';
import UsersModifyUseCase from '../../core/usecases/users/UserModifyUseCase';

const router: Router = express.Router();
const database: Database = new Database();

router
  .get('/overview', async (req: Request, res: Response, next: NextFunction) => {
    try {
      const usecase = new UsersOverviewUseCase(database);
      const response = await usecase.execute();
      res.send(response.getData());
      return;
    } catch (error) {
      next(error);
    }
  })
  .get(
    '/profile/:id',
    async (req: Request, res: Response, next: NextFunction) => {
      try {
        const usecase = new UsersReadUseCase(database);
        const response = await usecase.execute(parseInt(req.params.id));
        res.send(response.getData());
        return;
      } catch (error) {
        next(error);
      }
    }
  )
  .post('/profile', async (req: Request, res: Response, next: NextFunction) => {
    try {
      const usecase = new UsersCreateUseCase(database);
      const response = await usecase.execute(undefined, req.body);
      res.send(response.getData());
      return;
    } catch (error) {
      next(error);
    }
  })
  .put(
    '/profile/:id',
    async (req: Request, res: Response, next: NextFunction) => {
      try {
        const usecase = new UsersModifyUseCase(database);
        const response = await usecase.execute(parseInt(req.params.id), req.body);
        res.send(response.getData());
        return;
      } catch (error) {
        next(error);
      }
    }
  )
  .delete('/profile/:id', async (req: Request, res: Response) => {
    return;
  });

export { router as userRouter };

import { Router, Request, Response } from "express";
import Controller from "../../../delivery/Controller";
//import Middelwares from "../Middelwares";

export default class AdminRoutes {
  private router: Router;
  //private middelware = new Middelwares();
  private controller: Controller;

  constructor(router: Router, controller: Controller) {
    this.router = router;
    this.controller = controller;
    this.setUpRoutes();
  }

  private setUpRoutes(): void {
    this.userManagementRoutes();
    this.foodManagementRoutes();
    this.dietManagementRoutes();
  }

  private userManagementRoutes(): void {
    this.router
      .get("/overview", async (req: Request, res: Response) => {
        const response = await this.controller.getAllUsersProfiles();

        if (!response.getError()) {
          res.status(response.getStatus()).send(response.getData());
          return;
        }
        res.status(response.getStatus()).send(response.getError());
        return;
      })
      .get("/profile/:id", async (req: Request, res: Response) => {
        const response = await this.controller.getUserProfile(req.params.id);

        if (!response.getError()) {
          res.status(response.getStatus()).send(response.getData());
          return;
        }
        res.status(response.getStatus()).send(response.getError());
        return;
      })
      .post("/profile", async (req: Request, res: Response) => {
        const response = await this.controller.createUser(req.body);

        if (!response.getError()) {
          res.status(response.getStatus()).send(response.getData());
        }
        res.status(response.getStatus()).send(response.getError());
      })
      .put("/profile/:id", async (req: Request, res: Response) => {
        const response = await this.controller.editUser(req.params.id, req.body);

        if (!response.getError()) {
          res.status(response.getStatus()).send(response.getData());
        }
        res.status(response.getStatus()).send(response.getError());
      })
      .delete("/profile/:id", async (req: Request, res: Response) => {
        const response = await this.controller.deleteUser(parseInt(req.params.id));

        if (!response.getError()) {
          res.status(response.getStatus()).send(response.getData());
        }
        res.status(response.getStatus()).send(response.getError());
      });
  }

  private foodManagementRoutes(): void {
    this.router
      .get("/food/:id", async (req: Request, res: Response) => {
        const response = await this.controller.retriveFood(req.params.id);

        if (!response.getError()) {
          res.status(response.getStatus()).send(response.getData());
          return;
        }
        res.status(response.getStatus()).send(response.getError());
        return;
      })
      .get("/food", async (req: Request, res: Response) => {
        const response = await this.controller.getAllFoods();

        if (!response.getError()) {
          res.status(response.getStatus()).send(response.getData());
          return;
        }
        res.status(response.getStatus()).send(response.getError());
        return;
      })
      .post("/food", async (req: Request, res: Response) => {
        const response = await this.controller.createFood(req.body);

        if (!response.getError()) {
          res.status(response.getStatus()).send(response.getData());
          return;
        }
        res.status(response.getStatus()).send(response.getError());
        return;
      })
      .put("/food/:id", async (req: Request, res: Response) => {
        const response = await this.controller.updateFood(req.params.id, req.body);

        if (!response.getError()) {
          res.status(response.getStatus()).send(response.getData());
          return;
        }
        res.status(response.getStatus()).send(response.getError());
        return;
      });
  }

  private dietManagementRoutes(): void {
    this.router
      .post("/diet", async (req: Request, res: Response) => {
        const response = await this.controller.createDiet(req.body);

        if (!response.getError()) {
          res.status(response.getStatus()).send(response.getData());
          return;
        }
        res.status(response.getStatus()).send(response.getError());
        return;
      })
      .put("/diet/:id", async (req: Request, res: Response) => {
        const response = await this.controller.updateDiet(parseInt(req.params.id), req.body);

        if (!response.getError()) {
          res.status(response.getStatus()).send(response.getData());
          return;
        }
        res.status(response.getStatus()).send(response.getError());
        return;
      });
  }

  public getAdminRouter(): Router {
    return this.router;
  }
}

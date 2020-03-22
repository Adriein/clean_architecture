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
    this.router
      .get("/overview", async (req: Request, res: Response) => {
        const response = await this.controller.getAllUsersProfiles();

        if (!response.getError()) {
          res.status(response.getStatus()).send(response.getData());
        }
        res.status(response.getStatus()).send(response.getError());
      })
      .get("/profile/:id", async (req: Request, res: Response) => {
        const response = await this.controller.getUserProfile(req.params.id);

        if (!response.getError()) {
          res.status(response.getStatus()).send(response.getData());
        }
        res.status(response.getStatus()).send(response.getError());
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

  public getAdminRouter(): Router {
    return this.router;
  }
}

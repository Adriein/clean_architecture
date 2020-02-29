import { Router, Request, Response } from "express";
import EntityFactory from "../../../domain/factories/DomainEntityFactory";
import Controller from "../../../delivery/Controller";
//import Middelwares from "../Middelwares";

export default class AdminRoutes {
  private router: Router;
  //private middelware = new Middelwares();
  private entityFactory: EntityFactory;
  private controller: Controller;

  constructor(router: Router, entityFactory: EntityFactory, controller: Controller) {
    this.router = router;
    this.entityFactory = entityFactory;
    this.controller = controller
    this.setUpRoutes();
  }

  private setUpRoutes(): void {
    this.router
      .get("/overview", async (req: Request, res: Response) => {
        res.send(await this.controller.getAllUsersProfiles());
      })
      .get("/profile/:id", async (req: Request, res: Response) => {
        res.send(await this.controller.getUserProfile(req.params.id));
      })
      .get("/profile/userfoods/:id", async (req: Request, res: Response) => {
        res.send(await this.controller.getUserFoods(req.params.id));
      })
      .put("/profile/:id", async (req: Request, res:Response) => {
        res.send(await this.controller.editUser(req.params.id, req.body));
      })
  }

  public getAdminRouter(): Router {
    return this.router;
  }
}

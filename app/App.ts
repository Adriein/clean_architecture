import express from "express";
import cookieSession from "cookie-session";
import bodyParser from "body-parser";
import "reflect-metadata";

//import AuthRoutes from "./api/routes/auth/AuthRoutes";
import EntityFactory from "./api/factories/DomainEntityFactory";
import AdminRoutes from "./api/infrastructure/express/admin/AdminRoutes";
import Controller from "./api/delivery/Controller";

export default class App {
  private app: express.Application;
  private router: express.Router;
  private entityFactory: EntityFactory;
  private controller: Controller

  constructor() {
    this.app = express();
    this.router = express.Router();
    this.entityFactory = new EntityFactory();
    this.controller = new Controller(this.entityFactory);
  }

  public init(): void {
    this.setUpEnvironment();
    this.setUpMiddelwares();
    this.setUpRoutes();
    this.startServer();
  }

  private setUpEnvironment(): void {
    this.app.set("port", process.env.PORT || 5000);

    console.log(`App Environment: PORT: ${this.app.get("port")} CONFIG: DEV `);
  }

  private setUpMiddelwares(): void {
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(cookieSession({ keys: ["fjrufjhruf"] }));
  }

  private setUpRoutes() {
    //this.app.use("/api/auth", new AuthRoutes(this.router).router);
    this.app.use(
      "/api/admin",
      new AdminRoutes(this.router, this.entityFactory, this.controller).getAdminRouter()
    );
  }

  private startServer() {
    this.app.listen(this.app.get("port"), () => {
      console.log(`Server running...`);
    });
  }
}
import express from 'express';
import bodyParser from 'body-parser';

import { userRouter } from './routes/admin/UserRoutes';
import { errorHandler } from './routes/middelwares/error-handler';

export default class App {
  private app: express.Application;


  constructor() {
    this.app = express();

  }

  public init(): void {
    this.setUpEnvironment();
    this.setUpMiddelwares();
    this.setUpRoutes();
    this.startServer();
  }

  private setUpEnvironment(): void {
    this.app.set('port', process.env.PORT || 5000);
    console.log(`App Environment: PORT: ${this.app.get('port')} CONFIG: DEV `);
  }

  private setUpMiddelwares(): void {
    this.app.use(bodyParser.json());
  }

  private setUpRoutes() {
    this.app.use('/api/admin', userRouter);
    this.app.use(errorHandler);
  }

  private startServer() {
    this.app.listen(this.app.get('port'), () => {
      console.log(`Server running...`);
    });
  }
}

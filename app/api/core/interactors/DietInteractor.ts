import IDietProps from "../interfaces/IDietProps";
import { IAbstractFactory } from "../interfaces";
import { ResponseModel } from "../entities";
import EntityAbstractFactory from "../../factories/EntityAbstractFactory";
import DietCreateUseCase from "../usecases/diets/DietCreateUseCase";
import DietUpdateUseCase from "../usecases/diets/DietUpdateUseCase";

export default class DietInteractor {
  private dietCreateUseCase!: DietCreateUseCase;
  private dietUpdateUseCase!: DietUpdateUseCase;
  private entityFactory: IAbstractFactory;
  private responseModel: ResponseModel<IDietProps>;

  constructor() {
    this.entityFactory = new EntityAbstractFactory();
    this.responseModel = this.entityFactory.createDietReponseModel();
  }

  public async executeCreateDiet(body: any): Promise<ResponseModel<IDietProps>> {
    try {
      this.dietCreateUseCase = new DietCreateUseCase(this.entityFactory);
      return this.responseModel
        .setData([await this.dietCreateUseCase.execute(this.parse(body))])
        .setStatus(200);
    } catch (error) {
      return this.responseModel.setError(error);
    }
  }

  public async executeUpdateDiet(id: number, body: any): Promise<ResponseModel<IDietProps>> {
    try {
      this.dietUpdateUseCase = new DietUpdateUseCase(this.entityFactory);
      return this.responseModel
        .setData([await this.dietUpdateUseCase.execute(id, this.parse(body))])
        .setStatus(200);
    } catch (error) {
      return this.responseModel.setError(error);
    }
  }

  private parse(body: any): IDietProps {
    return JSON.parse(JSON.stringify(body)) as IDietProps;
  }
}

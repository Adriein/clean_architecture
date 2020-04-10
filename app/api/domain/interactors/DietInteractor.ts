import IDietProps from "../interfaces/IDietProps";
import { IAbstractFactory } from "../interfaces";
import { ResponseModel } from "../entities";
import EntityAbstractFactory from "../../factories/EntityAbstractFactory";
import DietCreateUseCase from "../usecases/diets/DietCreateUseCase";

export default class DietInteractor {
  private dietCreateUseCase!: DietCreateUseCase;
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
        .setData([await this.dietCreateUseCase.execute(this.mapper(body))])
        .setStatus(200);
    } catch (error) {
      return this.responseModel.setError(error);
    }
  }

  private mapper(body: any): IDietProps {
    return JSON.parse(JSON.stringify(body)) as IDietProps;
  }
}

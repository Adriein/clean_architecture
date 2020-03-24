import { FoodListUseCase } from "../usecases";
import EntityAbstractFactory from "../../factories/EntityAbstractFactory";
import { IAbstractFactory, IFoodProps } from "../interfaces";
import { ResponseModel } from "../entities";

export default class FoodsInteractor {
  private foodsListUseCase: FoodListUseCase;

  private entityFactory: IAbstractFactory;

  private responseModel: ResponseModel<IFoodProps>;

  constructor() {
    this.entityFactory = new EntityAbstractFactory();

    this.foodsListUseCase = new FoodListUseCase(this.entityFactory);

    this.responseModel = this.entityFactory.createUserResponseModel();
  }

  public async executeFoodsList(): Promise<ResponseModel<IFoodProps>> {
    try {
      return this.responseModel.setData(await this.foodsListUseCase.execute()).setStatus(200);
    } catch (error) {
      return this.responseModel.setError(error);
    }
  }
}

import { FoodListUseCase } from "../usecases";
import EntityAbstractFactory from "../../factories/EntityAbstractFactory";
import { IAbstractFactory, IFoodProps } from "../interfaces";
import { ResponseModel } from "../entities";
import EntityCreateUseCase from "../usecases/generic/EntityCreateUseCase";
import EntityUpdateUseCase from "../usecases/generic/EntityUpdateUseCase";
import EntityRetriveUseCase from "../usecases/generic/EntityRetriveUseCase";

export default class FoodsInteractor {
  private foodsListUseCase!: FoodListUseCase;
  private entityFactory: IAbstractFactory;
  private responseModel: ResponseModel<IFoodProps>;
  private createFoodUseCase!: EntityCreateUseCase<IFoodProps>;
  private updateFoodUseCase!: EntityUpdateUseCase<IFoodProps>;
  private retriveFoodUseCase!: EntityRetriveUseCase<IFoodProps>;

  constructor() {
    this.entityFactory = new EntityAbstractFactory();
    this.responseModel = this.entityFactory.createUserResponseModel();
  }

  public async executeFoodsList(): Promise<ResponseModel<IFoodProps>> {
    try {
      this.foodsListUseCase = new FoodListUseCase(this.entityFactory);
      return this.responseModel.setData(await this.foodsListUseCase.execute()).setStatus(200);
    } catch (error) {
      return this.responseModel.setError(error);
    }
  }

  public async executeRetriveFood(id: number): Promise<ResponseModel<IFoodProps>> {
    try {
      this.retriveFoodUseCase = new EntityRetriveUseCase<IFoodProps>(
        this.entityFactory.createFood()
      );
      return this.responseModel.setData([await this.retriveFoodUseCase.fetch(id)]).setStatus(200);
    } catch (error) {
      return this.responseModel.setError(error);
    }
  }

  public async executeCreateFood(body: any): Promise<ResponseModel<IFoodProps>> {
    try {
      this.createFoodUseCase = new EntityCreateUseCase<IFoodProps>(this.entityFactory.createFood());
      return this.responseModel
        .setData([await this.createFoodUseCase.create(this.mapper(body))])
        .setStatus(200);
    } catch (error) {
      return this.responseModel.setError(error);
    }
  }

  public async executeUpdateFood(id: number, body: any): Promise<ResponseModel<IFoodProps>> {
    try {
      this.updateFoodUseCase = new EntityUpdateUseCase<IFoodProps>(this.entityFactory.createFood());
      return this.responseModel
        .setData([await this.updateFoodUseCase.update(id, this.mapper(body))])
        .setStatus(200);
    } catch (error) {
      return this.responseModel.setError(error);
    }
  }

  private mapper(body: any): IFoodProps {
    return JSON.parse(JSON.stringify(body)) as IFoodProps;
  }
}

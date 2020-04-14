import { IAbstractFactory, IDietProps } from "../../interfaces";
import Diet from "../../entities/Diet";

export default class DietCreateUseCase {
  private entityFactory: IAbstractFactory;

  constructor(entityFactory: IAbstractFactory) {
    this.entityFactory = entityFactory;
  }
  public async execute(body: IDietProps): Promise<IDietProps> {
    //creating a diet always comes with user id and num of meals
    const diet: Diet = this.entityFactory.createDiet(body);
    
    //saving diet to generate the diet id
    await diet.create(body);
    
    //return the new diet
    return diet.getAttributes();
  }
}

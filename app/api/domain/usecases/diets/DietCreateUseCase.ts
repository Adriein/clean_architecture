import { IAbstractFactory, IDietProps } from "../../interfaces";
import Diet from "../../entities/Diet";

export default class DietCreateUseCase {
  private entityFactory: IAbstractFactory;

  constructor(entityFactory: IAbstractFactory) {
    this.entityFactory = entityFactory;
  }
  public async execute(body: IDietProps): Promise<IDietProps> {
    //creating a diet always comes with user id and num of meals
    const diet = this.entityFactory.createDiet(body);

    //set the creation date
    //diet.set({ createDate: new Date() });

    //saving diet to generate the diet id
    await diet.create(body);
    
    //generate meals (by default 1 if num of meals is unseted)
    //await diet.generateMeals();
    
    //return the new diet
    return diet.getAttributes();
  }
}

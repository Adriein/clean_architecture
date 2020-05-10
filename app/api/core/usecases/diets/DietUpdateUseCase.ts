import { IAbstractFactory, IDietProps, IMealProps } from "../../interfaces";
import Diet from "../../entities/Diet";
import { Meal } from "../../entities";

export default class DietCreateUseCase {
  private entityFactory: IAbstractFactory;

  constructor(entityFactory: IAbstractFactory) {
    this.entityFactory = entityFactory;
  }
  public async execute(id: number, body: IDietProps): Promise<IDietProps> {
    const diet: Diet = this.entityFactory.createDiet(body);
    const mealsFromBody: IMealProps[] = [];

    //parse meals in the body
    body.meals?.forEach((meal: IMealProps) => {
      mealsFromBody.push(JSON.parse(meal as string));
    });   

    //fetch the diet stored in the db
    await diet.fetch(id);

    //fetch the meals stored in the db asociated to this diet
    const [{ meals }] = await diet.findBy({
      select: ["id"],
      relations: ["meals"],
      where: { id: diet.get("id")! },
    });
    
    
    //check if we are changing a meal or adding a new one
    //if num of meals are diferent this means is an update of number of meals
    if (mealsFromBody.length != meals?.length!) {
      if (mealsFromBody.length! < meals?.length!) {
        const result = this.compare(mealsFromBody, meals!);
        for (const meal of result) {
          await diet.decrementMeals(meal.id!);    
        }
      } else {
        const result = this.compare(meals!, mealsFromBody);      
        for (const meal of result) {
          await diet.incrementMeals(meal);   
        }
      }
    }


    return { id: 1 };    
    //update the diet in order to set the update date



    //mount and return the updated json object

  }

  //array 1 MUST BE THE SHORTEST
  private compare(array1: IMealProps[], array2: IMealProps[]) {
    array1.forEach((element1: IMealProps) =>
      array2.forEach((element2: IMealProps, index: number) => {      
        if (element1.id == element2.id) {
          array2.splice(index, 1);
        }
      })
    );
    return array2;
  }
}

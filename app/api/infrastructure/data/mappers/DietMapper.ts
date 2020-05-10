import { DietSchema, TableMeal, TableUser } from "../entity";
import { IDietProps, IMealProps } from "../../../core/interfaces";
import Mapper from "./Mapper";

export default class DietMapper extends Mapper<IDietProps, DietSchema> {
  mapToDatabase(props: IDietProps, fn: Function): DietSchema {
    const dietSchema = super.mapToDatabase(props, fn);
    const userSchema = new TableUser();
    userSchema.id = props.user;
    dietSchema.user = userSchema;
    dietSchema.meals = dietSchema.meals?.map((meal: any) => Object.assign(new TableMeal(), meal));
    return dietSchema;
  }
}

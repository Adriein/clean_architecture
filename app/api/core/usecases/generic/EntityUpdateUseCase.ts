import { Model } from "../../entities";

export default class EntityUpdateUseCase<T> {
  private model: Model<T>;
  constructor(model: Model<T>) {
    this.model = model;
  }
  async update(id: number, body: T): Promise<T> {
    //check if entity already exists in db
    await this.model.fetch(id);
    const modelOnDB = this.model.getAttributes();
    if (!modelOnDB) {
      throw new Error("model not found on DB");
    }

    //update the new model on the db
    await this.model.update(id, body);
    return this.model.getAttributes();
  }
}

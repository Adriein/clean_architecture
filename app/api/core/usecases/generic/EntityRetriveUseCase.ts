import { Model } from "../../entities";

export default class EntityRetriveUseCase<T> {
  private model: Model<T>;
  constructor(model: Model<T>) {
    this.model = model;
  }
  async fetch(id: number): Promise<T> {
    await this.model.fetch(id);
    return this.model.getAttributes();
  }
}

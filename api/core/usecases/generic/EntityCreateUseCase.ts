import { Model } from '../../entities';

export default class EntityCreateUseCase<T> {
  private model: Model<T>;
  constructor(model: Model<T>) {
    this.model = model;
  }
  async create(body: T): Promise<T> {
    return await this.model.create(body);
  }
}

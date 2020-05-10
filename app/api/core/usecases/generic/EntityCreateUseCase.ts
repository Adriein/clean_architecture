import { Model } from "../../entities";

interface Left {
}
interface Right<T> {
  data: T;
}

type Either<T> = Left | Right<T>;

class Left{
  constructor(private message: string){}
}

export default class EntityCreateUseCase<T> {
  private model: Model<T>;
  constructor(model: Model<T>) {
    this.model = model;
  }
  async create(body: T): Promise<Either<T>> {
    await this.model.create(body);
    //return this.model.getAttributes();
    return new Left('ajajajja');
  }
}

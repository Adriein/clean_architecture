import { IMapper } from "../../../domain/interfaces";

export default abstract class Mapper<T extends Object, K extends Object> implements IMapper<T, K> {
  mapToDatabase(props: T, fn: Function): K {
    for (const prop in props) {
      if (props[prop] instanceof Array) {
        const array: any = props[prop];
        props[prop] = array.map((element: any) => JSON.parse(element));
      }
    }
    return Object.assign(fn(), props);
  }
  mapToDomain(props: any): T {
    return props as T;
  }
}

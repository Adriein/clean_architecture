export default interface IMapper<T, K> {
  mapToDatabase(props: T, fn: Function): K;
  mapToDomain(props: K): T;
}

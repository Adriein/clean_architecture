export default interface ILogger {
  level(level: string): this;
  log(message: string): void;
  stack(stack?: string): this
}

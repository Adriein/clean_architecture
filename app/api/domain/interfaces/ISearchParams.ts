export default interface ISearchParams {
  table: string;
  raw?: string;
  where?: {
    [key: string]: string;
  };
  join?: string
}

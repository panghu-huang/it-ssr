export type ErrorFormatter = (status: number | null, response?: string) => any;

export type GetFetchOptions = () => object;

export interface IOptions {
  path?: string;
  data?: object;
  [propName: string]: any;
}

export interface IFetchOptions extends IOptions {
  method: string;
}

export interface IConfigOptions {
  baseUrl?: string;
  formatError?: ErrorFormatter;
  getFetchOptions?: GetFetchOptions;
}

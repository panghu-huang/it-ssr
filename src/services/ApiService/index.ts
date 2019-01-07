import { stringify } from 'querystring';
import { 
  IOptions, 
  IConfigOptions, 
  IFetchOptions, 
  ErrorFormatter,
  GetFetchOptions
} from './index.d';

export enum FetchMethod {
  GET = 'GET', 
  POST = 'POST', 
  PUT = 'PUT',  
  PATCH = 'PATCH', 
  DELETE = 'DELETE',
};

class ApiService {

  public static baseUrl: string;
  public static formatError: ErrorFormatter;
  public static getFetchOptions: GetFetchOptions;

  public static config(options: IConfigOptions) {
    Object.keys(options).forEach(optionName => {
      ApiService[optionName] = options[optionName];
    });
  }

  private apiUrl: string;

  constructor(routeName: string, baseUrl?: string) {
    this.apiUrl = `${baseUrl || ApiService.baseUrl}/${routeName}`;
  }

  public get(params?: IOptions) {
    return this.fetch({ ...params, method: FetchMethod.GET });
  }

  public post(params?: IOptions) {
    return this.fetch({ ...params, method: FetchMethod.POST });
  }

  public put(params?: IOptions) {
    return this.fetch({ ...params, method: FetchMethod.PUT });
  }

  public patch(params?: IOptions) {
    return this.fetch({ ...params, method: FetchMethod.PATCH });
  }

  public delete(params?: IOptions) {
    return this.fetch({ ...params, method: FetchMethod.DELETE });
  }

  private fetch({ path, data, method, ...rest }: IFetchOptions) {
    let url = path ? `${this.apiUrl}/${path}` : this.apiUrl as string;

    const { getFetchOptions, formatError } = ApiService;

    const options: any = { 
      ...(getFetchOptions ? getFetchOptions() : {}),
      ...rest, 
      method,
    };

    if (method === FetchMethod.GET) {
      url += `?${stringify(data)}`;
    } else {
      options.data = JSON.stringify(data);
    }
    
    return new Promise((resolve, reject) => {
      fetch(url, options)
      .then(async response => {
        const responseText = await response.text();
        if (response.ok) {
          try {
            const json = JSON.parse(responseText);
            resolve(json);
          } catch (unUseError) {
            resolve(responseText);
          }
        } else {
          const { status } = response;
          const error = formatError 
            ? formatError(status, responseText)
            : { status, message: responseText };
          reject(error);
        }
      })
        .catch(() => {
          const error = formatError 
            ? formatError(null) 
            : { status: null, message: '请检查您的网络连接', };
          reject(error);
        });
    });
  }

}

export default ApiService;
import { ComponentClass, StatelessComponent, FunctionComponent, Context } from 'react';
import { RouteConfig } from 'react-router-config';
import { History } from 'history';
import { ApiService } from './src/services';
import { RenderType, IActions } from './src/types';

declare namespace SSRFramework {
  export const render: RenderType;
  export const actions: IActions;
  export const StoreProvider: ComponentClass;
  export const StoreContext: Context<any>;
  export const ApiService: ApiService;
}

export = SSRFramework;
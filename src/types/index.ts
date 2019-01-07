import { ComponentClass, StatelessComponent, FunctionComponent } from 'react';
import { RouteConfig } from 'react-router-config';
import { History } from 'history';

declare global {
  interface Window {
    __APP_DATA__: string;
  }
}

export type AppContainerType = ComponentClass| StatelessComponent | FunctionComponent;

export type RenderType = (
  routes: IRoute[], 
  options: IRenderOptions
) => void;

export interface IRoute extends RouteConfig {
  name: string;
}

export interface IRenderOptions {
  el: string; 
  AppContainer?: AppContainerType;
}

export interface IStoreAction {
  setState: (prevState: any, callback: any) => void;
}

export interface IActions {
  history: History;
  store: IStoreAction;
}
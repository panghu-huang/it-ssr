import * as React from 'react';
import { hydrate } from 'react-dom';
import { Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { createBrowserHistory } from 'history';
import { StoreProvider } from 'src/containers';
import { addAction } from 'src/store';
import { IRenderOptions, IRoute } from 'src/types';

function render(routes: IRoute[], options: IRenderOptions) {
  document.addEventListener('DOMContentLoaded', () => {
    let data: any = window.__APP_DATA__;
    let store;
    if (data) {
      data = JSON.parse(decodeURIComponent(data));
      store = data.store;
    }

    const history = createBrowserHistory();
    addAction('history', history);

    const AppContanier = options.AppContainer || React.Fragment;
    hydrate(
      (
        <Router history={history}>
          <StoreProvider store={store}>
            <AppContanier>
              {renderRoutes(routes)}
            </AppContanier>
          </StoreProvider>
        </Router>
      ),
      document.querySelector(options.el)
    );
  });
}

export { render };
export * from 'src/containers';
export * from 'src/components';
export * from 'src/services';
export * from 'src/store';
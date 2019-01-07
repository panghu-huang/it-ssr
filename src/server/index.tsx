import * as React from 'react';
import * as Koa from 'koa';
import * as Router from 'koa-router';
import * as serve from 'koa-static';
import * as ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { StoreProvider } from 'src/containers';
import { IRoute, IRenderOptions } from 'src/types';
import fetchData from './fetchData';
import getHtml from './template';

const paths = require('../../config/path.app');

function render(routes: IRoute[], options: IRenderOptions) {
  const app = new Koa();
  const router = new Router();

  app.use(serve(paths.publicDirectory, { gzip: true }));

  router.get('*', async ctx => {
    const pathname = ctx.url;
    const pageProps = await fetchData(pathname, routes);
    const AppContainer = options.AppContainer || React.Fragment;
    const content = ReactDOMServer.renderToString(
      <StaticRouter 
        location={pathname} 
        context={{}}>
        <StoreProvider store={pageProps}>
          <AppContainer>
            {renderRoutes(routes)}
          </AppContainer>
        </StoreProvider>
      </StaticRouter>
    );
    const html = getHtml(content, {
      store: pageProps,
    });
    ctx.body = html;
  });

  app.use(router.routes());

  app.listen(3030, () => {
    console.log('服务端渲染已运行在：http://localhost:3030');
  });
}


export { render };
export * from 'src/containers';
export * from 'src/components';
export * from 'src/services';
export * from 'src/store';
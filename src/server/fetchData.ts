import { matchRoutes } from 'react-router-config';
import { IRoute } from 'src/types';

async function fetchData(pathname: string, routes: IRoute[]): Promise<object> {
  const matchedRoutes = matchRoutes(routes, pathname)
    .map(matched => matched.route)
    .filter(({ component }) => {
      return component && component.hasOwnProperty('getInitialProps');
    }) as IRoute[];
  if (matchedRoutes.length) {
    const promises = matchedRoutes
      .map(({ component }) => {
        // @ts-ignore
        return component.getInitialProps(pathname);
      });
    try {
      const results = await Promise.all(promises);
      return results.reduce((props, result, index) => {
        props[matchedRoutes[index].name] = result;
        return props;
      }, {});
    } catch (error) {
      return {};
    }
  }
  return {};
}

export default fetchData;
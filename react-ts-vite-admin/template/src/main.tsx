import ReactDOM from 'react-dom/client';
import { HashRouter, useRoutes } from 'react-router-dom';
import routes from './routes';
import 'antd/dist/antd.less';
import './global.less';

const Router = () => {
  const element = useRoutes(routes);

  return element;
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <HashRouter>
    <Router />
  </HashRouter>,
);

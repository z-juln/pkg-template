import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, useRoutes } from 'react-router-dom';
import routes from './routes';
import 'antd/dist/antd.less';
import './global.less';

const Router = () => {
  const element = useRoutes(routes);

  return element;
};

class AppWithPlugin {
  constructor(public node: React.ReactNode) {}

  use(plugin: (node: React.ReactNode) => React.ReactNode) {
    this.node = plugin(this.node);
  }
}

const App = new AppWithPlugin(
  <HashRouter>
    <Router />
  </HashRouter>
);

/** pull-ejs-tpl-block: App.use (这行不要删, 用于后期cli插入插件) */

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  App.node,
);

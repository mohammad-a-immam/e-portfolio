import { DEFAULT_PATHS } from 'config.js';

import VerticalPage from 'views/Main';

const appRoot = DEFAULT_PATHS.APP.endsWith('/') ? DEFAULT_PATHS.APP.slice(1, DEFAULT_PATHS.APP.length) : DEFAULT_PATHS.APP;

const routesAndMenuItems = {
  mainMenuItems: [
    {
      path: DEFAULT_PATHS.APP,
      label: 'menu.vertical',
      icon: 'grid-3',
      component: VerticalPage,
    },
  ],
  sidebarItems: [],
};
export default routesAndMenuItems;

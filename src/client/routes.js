import Home from './views/home/Home';
import About from './views/about/About';
import Settings from './views/settings/Settings';

const routes = [
  {
    prefix: '',
    path: '/',
    component: Home,
    exact: true,
    title: 'Home',
  },
  {
    prefix: '',
    path: '/settings',
    component: Settings,
    exact: true,
    title: 'Settings',
  },
  {
    prefix: '',
    path: '/about',
    component: About,
    exact: true,
    title: 'About',
  },
  {
    prefix: '',
    path: '/date',
    component: Home,
    exact: true,
    title: 'Home',
  },
]

export default routes;

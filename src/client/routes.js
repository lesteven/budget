import Home from './views/home/Home';
import About from './views/about/About';

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
    path: '/about',
    component: About,
    exact: true,
    title: 'About',
  },
]

export default routes;

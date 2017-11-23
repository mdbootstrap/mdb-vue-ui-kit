import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '@/docs/HomePage';
import GridPage from '@/docs/GridPage';
import BadgePage from '@/docs/BadgePage';
import CardPage from '@/docs/CardPage';
import ButtonPage from '@/docs/ButtonPage';
import TablePage from '@/docs/TablePage';
import DropdownPage from '@/docs/DropdownPage';
import JumbotronPage from '@/docs/JumbotronPage';
import CarouselPage from '@/docs/CarouselPage';
import BreadcrumbPage from '@/docs/BreadcrumbPage';
import WavesPage from '@/docs/WavesPage';
import FaPage from '@/docs/FaPage';
import InputsPage from '@/docs/InputsPage';
import LiveDemoPage from '@/docs/LiveDemoPage';
import MediaPage from '@/docs/MediaPage';
import ListGroupPage from '@/docs/ListGroupPage';
import NavbarPage from '@/docs/NavbarPage';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage,
    }, {
      path: '/components/badge',
      name: 'BadgePage',
      component: BadgePage,
    }, {
      path: '/components/grid',
      name: 'GridPage',
      component: GridPage,
    }, {
      path: '/components/card',
      name: 'CardPage',
      component: CardPage,
    }, {
      path: '/components/button',
      name: 'ButtonPage',
      component: ButtonPage,
    }, {
      path: '/components/table',
      name: 'TablePage',
      component: TablePage,
    }, {
      path: '/components/dropdown',
      name: 'Dropdown Page',
      component: DropdownPage,
    }, {
      path: '/components/jumbotron',
      name: 'JumbotronPage',
      component: JumbotronPage,
    }, {
      path: '/components/carousel',
      name: 'CarouselPage',
      component: CarouselPage,
    }, {
      path: '/components/breadcrumb',
      name: 'BreadcrumbPage',
      component: BreadcrumbPage
    }, {
      path: '/components/waves',
      name: 'WavesPage',
      component: WavesPage
    }, {
      path: '/components/icons',
      name: 'FaPage',
      component: FaPage
    }, {
      path: '/components/inputs',
      name: 'InputsPage',
      component: InputsPage
    }, {
      path: '/components/liveDemo',
      name: 'LiveDemoPage',
      component: LiveDemoPage
    }, {
      path: '/components/media',
      name: 'MediaPage',
      component: MediaPage
    }, {
      path: '/components/listgroup',
      name: 'ListGroupPage',
      component: ListGroupPage
    }, {
      path: '/components/navbar',
      name: 'NavbarPage',
      component: NavbarPage
    }
  ],
});

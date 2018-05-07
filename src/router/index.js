import Vue from 'vue';
import Router from 'vue-router';

// PAGES
import CSSPage from '../docs/CSSPage';
import ComponentsPage from '../docs/ComponentsPage';
import AdvancedPage from '../docs/AdvancedPage';

// FREE
import HomePage from '../docs/HomePage';
import GridPage from '../docs/GridPage';
import BadgePage from '../docs/BadgePage';
import CardPage from '../docs/CardPage';
import ButtonPage from '../docs/ButtonPage';
import TablePage from '../docs/TablePage';
import DropdownPage from '../docs/DropdownPage';
import JumbotronPage from '../docs/JumbotronPage';
import CarouselPage from '../docs/CarouselPage';
import BreadcrumbPage from '../docs/BreadcrumbPage';
import FaPage from '../docs/FaPage';
import InputsPage from '../docs/InputsPage';
import LiveDemoPage from '../docs/LiveDemoPage';
import MediaPage from '../docs/MediaPage';
import ListGroupPage from '../docs/ListGroupPage';
import NavbarPage from '../docs/NavbarPage';
import NavigationPage from '../docs/NavigationPage';
import CollapsePage from '../docs/CollapsePage';
import PaginationPage from '../docs/PaginationPage';
import PanelPage from '../docs/PanelPage';
import ChartPage from '../docs/ChartPage';
import ProgressBarsPage from '../docs/ProgressBarsPage';
import TooltipPage from '../docs/TooltipPage';
import PopoverPage from '../docs/PopoverPage';
import EdgeHeaderPage from '../docs/EdgeHeaderPage';
import MasksPage from '../docs/MasksPage';
import HoverPage from '../docs/HoverPage';
import VideoCarouselPage from '../docs/VideoCarouselPage';
import ModalPage from '../docs/ModalPage';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage
    },

    // PAGES
    {
      path: '/css',
      name: 'CSSPage',
      component: CSSPage
    }, {
      path: '/components',
      name: 'ComponentsPage',
      component: ComponentsPage
    }, {
      path: '/advanced',
      name: 'AdvancedPage',
      component: AdvancedPage
    },

    // FREE
    {
      path: '/components/badge',
      name: 'BadgePage',
      component: BadgePage
    }, {
      path: '/components/grid',
      name: 'GridPage',
      component: GridPage
    }, {
      path: '/components/card',
      name: 'CardPage',
      component: CardPage
    }, {
      path: '/components/button',
      name: 'ButtonPage',
      component: ButtonPage
    }, {
      path: '/css/table',
      name: 'TablePage',
      component: TablePage
    }, {
      path: '/components/dropdown',
      name: 'DropdownPage',
      component: DropdownPage
    }, {
      path: '/css/jumbotron',
      name: 'JumbotronPage',
      component: JumbotronPage
    }, {
      path: '/advanced/carousel',
      name: 'CarouselPage',
      component: CarouselPage
    }, {
      path: '/components/breadcrumb',
      name: 'BreadcrumbPage',
      component: BreadcrumbPage
    }, {
      path: '/css/hover',
      name: 'HoverPagePage',
      component: HoverPage
    }, {
      path: '/css/icons',
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
    }, {
      path: '/components/navigation',
      name: 'NavigationPage',
      component: NavigationPage
    }, {
      path: '/advanced/collapse',
      name: 'CollapsePage',
      component: CollapsePage
    }, {
      path: '/components/pagination',
      name: 'PaginationPage',
      component: PaginationPage
    }, {
      path: '/components/panel',
      name: 'PanelPage',
      component: PanelPage
    }, {
      path: '/advanced/chart',
      name: 'ChartPage',
      component: ChartPage
    }, {
      path: '/components/progress-bars',
      name: 'ProgressBarsPage',
      component: ProgressBarsPage
    }, {
      path: '/advanced/tooltip',
      name: 'TooltipPage',
      component: TooltipPage
    }, {
      path: '/advanced/popover',
      name: 'PopoverPage',
      component: PopoverPage
    }, {
      path: '/components/edge-header',
      name: 'EdgeHeaderPage',
      component: EdgeHeaderPage
    }, {
      path: '/css/masks',
      name: 'MasksPage',
      component: MasksPage
    }, {
      path: '/advanced/videocarousel',
      name: 'VideoCarouselPage',
      component: VideoCarouselPage
    }, {
      path: '/advanced/modal',
      name: 'ModalPage',
      component: ModalPage
    }
  ]
});

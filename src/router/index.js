import Vue from 'vue';
import Router from 'vue-router';

// PAGES
import CSSPage from '../docs/CSSPage';
import ComponentsPage from '../docs/ComponentsPage';
import AdvancedPage from '../docs/AdvancedPage';
import NavigationMenuPage from '../docs/NavigationMenuPage';
import FormsMenuPage from '../docs/FormsMenuPage';
import TablesPage from '../docs/TablesPage';
import ModalsPage from '../docs/ModalsPage';

// FREE
import HomePage from '../docs/HomePage';
import GridPage from '../docs/GridPage';
import BadgePage from '../docs/BadgePage';
import CardPage from '../docs/CardPage';
import ButtonPage from '../docs/ButtonPage';
import TablePage from '../docs/TablePage';
import TableAdditionalPage from '../docs/TableAdditionalPage';
import DataTablePage from '../docs/DataTablePage';
import TableResponsivePage from '../docs/TableResponsivePage';
import TablePaginationPage from '../docs/TablePaginationPage';
import TableScrollPage from '../docs/TableScrollPage';
import TableSearchPage from '../docs/TableSearchPage';
import TableSortPage from '../docs/TableSortPage';
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
import NotificationPage from '../docs/NotificationPage';
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
import FormsPage from '../docs/FormsPage';
import SearchPage from '../docs/SearchPage';
import ValidationPage from '../docs/ValidationPage';
import FooterPage from '../docs/FooterPage';

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
    {
      path: '/navigation',
      name: 'NavigationMenuPage',
      component: NavigationMenuPage
    },
    {
      path: '/forms',
      name: 'FormsMenuPage',
      component: FormsMenuPage
    },
    {
      path: '/tables',
      name: 'TablesPage',
      component: TablesPage
    },
    {
      path: '/modals',
      name: 'ModalsPage',
      component: ModalsPage
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
      path: '/css/table-additional',
      name: 'TableAdditionalPage',
      component: TableAdditionalPage
    }, {
      path: '/tables/datatable',
      name: 'DataTablePage',
      component: DataTablePage
    }, {
      path: '/tables/table-pagination',
      name: 'TablePaginationPage',
      component: TablePaginationPage
    }, {
      path: '/css/table-responsive',
      name: 'TableResponsviePage',
      component: TableResponsivePage
    }, {
      path: '/tables/table-search',
      name: 'TableSearchPage',
      component: TableSearchPage
    }, {
      path: '/tables/table-sort',
      name: 'TableSortPage',
      component: TableSortPage
    }, {
      path: '/tables/table-scroll',
      name: 'TableScrollPage',
      component: TableScrollPage
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
      path: '/navigation/breadcrumb',
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
      path: '/forms/inputs',
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
      path: '/navigation/navbar',
      name: 'NavbarPage',
      component: NavbarPage
    }, {
      path: '/navigation/navigation',
      name: 'NavigationPage',
      component: NavigationPage
    }, {
      path: '/components/notification',
      name: 'NotificationPage',
      component: NotificationPage
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
      path: '/forms/validation',
      name: 'ValidationPage',
      component: ValidationPage
    }, {
      path: '/advanced/videocarousel',
      name: 'VideoCarouselPage',
      component: VideoCarouselPage
    }, {
      path: '/modals/modal',
      name: 'ModalPage',
      component: ModalPage
    }, {
      path: '/forms/forms',
      name: 'FormsPage',
      component: FormsPage
    }, {
      path: '/forms/search',
      name: 'SearchPage',
      component: SearchPage
    }, {
      path: '/navigation/footer',
      name: 'FooterPage',
      component: FooterPage
    }
  ]
});

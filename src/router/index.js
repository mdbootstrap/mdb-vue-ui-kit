import Vue from 'vue';
import Router from 'vue-router';

// CATEGORIES
import CSSPage from '../docs/categories/CSSPage';
import ComponentsPage from '../docs/categories/ComponentsPage';
import AdvancedPage from '../docs/categories/AdvancedPage';
import NavigationMenuPage from '../docs/categories/NavigationMenuPage';
import FormsMenuPage from '../docs/categories/FormsMenuPage';
import TablesPage from '../docs/categories/TablesPage';
import ModalsPage from '../docs/categories/ModalsPage';
import AddonsPage from '../docs/categories/AddonsPage';

// FREE
import AnimationsPage from '../docs/AnimationsPage';
import AlertPage from '../docs/AlertPage';
import AccordionPage from '../docs/AccordionPage';
import BadgePage from '../docs/BadgePage';
import BackgroundImagePage from '../docs/BackgroundImagePage';
import BlogComponentsPage from '../docs/BlogComponentsPage';
import ButtonPage from '../docs/ButtonPage';
import ButtonsGroupPage from '../docs/ButtonsGroupPage';
import BreadcrumbPage from '../docs/BreadcrumbPage';
import CardPage from '../docs/CardPage';
import CarouselPage from '../docs/CarouselPage';
import ChartPage from '../docs/ChartPage';
import CollapsePage from '../docs/CollapsePage';
import DataTablePage from '../docs/DataTablePage';
import DropdownPage from '../docs/DropdownPage';
import EdgeHeaderPage from '../docs/EdgeHeaderPage';
import FaPage from '../docs/FaPage';
import FooterPage from '../docs/FooterPage';
import FormsPage from '../docs/FormsPage';
import GradientPage from '../docs/GradientPage';
import GoogleMapsPage from '../docs/GoogleMapsPage';
import GridPage from '../docs/GridPage';
import HamburgerMenuPage from '../docs/HamburgerMenuPage';
import HomePage from '../docs/HomePage';
import HoverPage from '../docs/HoverPage';
import IframePage from '../docs/IframePage';
import InputsPage from '../docs/InputsPage';
import InputGroupPage from '../docs/InputGroupPage';
import JumbotronPage from '../docs/JumbotronPage';
import LiveDemoPage from '../docs/LiveDemoPage';
import ListGroupPage from '../docs/ListGroupPage';
import MasksPage from '../docs/MasksPage';
import MediaPage from '../docs/MediaPage';
import ModalPage from '../docs/ModalPage';
import ModalEventsPage from '../docs/ModalEventsPage';
import ModalExamplesPage from '../docs/ModalExamplesPage';
import ModalFormsPage from '../docs/ModalFormsPage';
import ModalStylesPage from '../docs/ModalStylesPage';
import SelectPageFree from '../docs/SelectPage';
import NavsPage from '../docs/NavsPage';
import NavbarPage from '../docs/NavbarPage';
import NavigationPage from '../docs/NavigationPage';
import PaginationPage from '../docs/PaginationPage';
import PanelPage from '../docs/PanelPage';
import PopoverPage from '../docs/PopoverPage';
import ProgressBarsPage from '../docs/ProgressBarsPage';
import SearchPage from '../docs/SearchPage';
import CustomColorsScrollbarPage from '../docs/CustomColorsScrollbarPage';
import SliderPage from '../docs/SliderPage';
import SpinnersPage from '../docs/SpinnersPage';
import TabsPage from '../docs/TabsPage';
import TablePage from '../docs/TablePage';
import TableAdditionalPage from '../docs/TableAdditionalPage';
import TableResponsivePage from '../docs/TableResponsivePage';
import TablePaginationPage from '../docs/TablePaginationPage';
import TableScrollPage from '../docs/TableScrollPage';
import TableSearchPage from '../docs/TableSearchPage';
import TableSortPage from '../docs/TableSortPage';
import TooltipPage from '../docs/TooltipPage';
import ValidationPage from '../docs/ValidationPage';
import VideoCarouselPage from '../docs/VideoCarouselPage';
import VideoPage from '../docs/VideoPage';
import WavesPage from '../docs/WavesPage';
import StretchedLinkPage from '../docs/StretchedLinkPage';
import NotificationsFreePage from '../docs/NotificationsPage';
import MasonryPage from '../docs/MasonryPage';
import SwitchPage from '../docs/SwitchPage';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage
    },

    // CATEGORIES
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
    {
      path: '/plugins',
      name: 'AddonsPage',
      component: AddonsPage
    },

    // FREE
    {
      path: '/advanced/accordion',
      name: 'AccordionPage',
      component: AccordionPage
    }, {
      path: '/components/badge',
      name: 'BadgePage',
      component: BadgePage
    }, {
      path: '/css/background',
      name: 'BackgroundImagePage',
      component: BackgroundImagePage
    }, {
      path: '/css/gradient',
      name: 'GradientPage',
      component: GradientPage
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
      path: '/components/button-group',
      name: 'ButtonsGroupPage',
      component: ButtonsGroupPage
    }, {
      path: '/navigation/hamburger',
      name: 'HamburgerMenuPage',
      component: HamburgerMenuPage
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
      path: '/plugins/iframe',
      name: 'IframePage',
      component: IframePage
    }, {
      path: '/tables/table-pagination',
      name: 'TablePaginationPage',
      component: TablePaginationPage
    }, {
      path: '/advanced/maps',
      name: 'GoogleMapsPage',
      component: GoogleMapsPage
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
      path: '/components/jumbotron',
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
      path: '/css/scrollbar',
      name: 'CustomColorsScrollbarPage',
      component: CustomColorsScrollbarPage
    }, {
      path: '/forms/inputs',
      name: 'InputsPage',
      component: InputsPage
    }, {
      path: '/forms/group',
      name: 'InputGroupPage',
      component: InputGroupPage
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
      path: '/navigation/navs',
      name: 'NavsPage',
      component: NavsPage
    }, {
      path: '/navigation/navigation',
      name: 'NavigationPage',
      component: NavigationPage
    }, {
      path: '/components/alerts',
      name: 'AlertPage',
      component: AlertPage
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
      path: '/modals/events',
      name: 'ModalEventsPage',
      component: ModalEventsPage
    }, {
      path: '/modals/examples',
      name: 'ModalExamplesPage',
      component: ModalExamplesPage
    }, {
      path: '/modals/forms',
      name: 'ModalFormsPage',
      component: ModalFormsPage
    }, {
      path: '/modals/styles',
      name: 'ModalStylesPage',
      component: ModalStylesPage
    }, {
      path: '/components/slider',
      name: 'SliderPage',
      component: SliderPage
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
    }, {
      path: '/components/tabs',
      name: 'TabsPage',
      component: TabsPage
    }, {
      path: '/forms/select',
      name: 'SelectPageFree',
      component: SelectPageFree
    }, {
      path: '/plugins/video',
      name: 'VideoPage',
      component: VideoPage
    }, {
      path: '/components/spinners',
      name: 'SpinnersPage',
      component: SpinnersPage
    }, {
      path: '/plugins/blog-components',
      name: 'BlogComponentsPage',
      component: BlogComponentsPage
    }, {
      path: '/advanced/wave-effect',
      name: 'WavesPage',
      component: WavesPage
    }, {
      path: '/css/animations',
      name: 'AnimationsPage',
      component: AnimationsPage
    }, {
      path: '/components/stretched-link',
      name: 'StretchedLinkPage',
      component: StretchedLinkPage
    }, {
      path: '/advanced/notifications',
      name: 'NotificationsFreePage',
      component: NotificationsFreePage
    },{
      path: '/css/masonry',
      name: 'MasonryPage',
      component: MasonryPage
    }, {
      path: '/forms/switch',
      name: 'SwitchPage',
      component: SwitchPage
    },
  ]
});

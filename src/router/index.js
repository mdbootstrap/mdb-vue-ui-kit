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
import AnimationsPage from '../docs/CSS/AnimationsPage';
import AlertPage from '../docs/Components/AlertPage';
import AccordionPage from '../docs/Advanced/AccordionPage';
import BadgePage from '../docs/Components/BadgePage';
import BackgroundImagePage from '../docs/CSS/BackgroundImagePage';
import BlogComponentsPage from '../docs/Plugins/BlogComponentsPage';
import ButtonPage from '../docs/Components/ButtonPage';
import ButtonsGroupPage from '../docs/Components/ButtonsGroupPage';
import BreadcrumbPage from '../docs/Navigation/BreadcrumbPage';
import CardPage from '../docs/Components/CardPage';
import CarouselPage from '../docs/Advanced/CarouselPage';
import ChartPage from '../docs/Advanced/ChartPage';
import CollapsePage from '../docs/Advanced/CollapsePage';
import DataTablePage from '../docs/Tables/DataTablePage';
import DataTableJSONPage from '../docs/Tables/DataTableJSONPage';
import DropdownPage from '../docs/Components/DropdownPage';
import EdgeHeaderPage from '../docs/Components/EdgeHeaderPage';
import FaPage from '../docs/CSS/FaPage';
import FooterPage from '../docs/Navigation/FooterPage';
import FormsPage from '../docs/Forms/FormsPage';
import GradientPage from '../docs/CSS/GradientPage';
import GoogleMapsPage from '../docs/Advanced/GoogleMapsPage';
import GridPage from '../docs/GridPage';
import HamburgerMenuPage from '../docs/Navigation/HamburgerMenuPage';
import HomePage from '../docs/HomePage';
import HoverPage from '../docs/CSS/HoverPage';
import IframePage from '../docs/Plugins/IframePage';
import InputsPage from '../docs/Forms/InputsPage';
import InputGroupPage from '../docs/Forms/InputGroupPage';
import JumbotronPage from '../docs/Components/JumbotronPage';
import LiveDemoPage from '../docs/LiveDemoPage';
import ListGroupPage from '../docs/Components/ListGroupPage';
import MasksPage from '../docs/CSS/MasksPage';
import MediaPage from '../docs/Components/MediaPage';
import ModalPage from '../docs/Modals/ModalPage';
import ModalEventsPage from '../docs/Modals/ModalEventsPage';
import ModalExamplesPage from '../docs/Modals/ModalExamplesPage';
import ModalFormsPage from '../docs/Modals/ModalFormsPage';
import ModalStylesPage from '../docs/Modals/ModalStylesPage';
import SelectPageFree from '../docs/Forms/SelectPage';
import NavsPage from '../docs/Navigation/NavsPage';
import NavbarPage from '../docs/Navigation/NavbarPage';
import NavigationPagev1 from '../docs/Navigation/NavigationPagev1';
import NavigationPagev2 from '../docs/Navigation/NavigationPagev2';
import NavigationPagev3 from '../docs/Navigation/NavigationPagev3';
import NavigationPagev4 from '../docs/Navigation/NavigationPagev4';
import PaginationPage from '../docs/Components/PaginationPage';
import PanelPage from '../docs/Components/PanelPage';
import PopoverPage from '../docs/Advanced/PopoverPage';
import ProgressBarsPage from '../docs/Components/ProgressBarsPage';
import SearchPage from '../docs/Forms/SearchPage';
import CustomColorsScrollbarPage from '../docs/CSS/CustomColorsScrollbarPage';
import SliderPage from '../docs/Components/SliderPage';
import SpinnersPage from '../docs/Components/SpinnersPage';
import TabsPage from '../docs/Components/TabsPage';
import TablePage from '../docs/CSS/TablePage';
import TableAdditionalPage from '../docs/CSS/TableAdditionalPage';
import TableResponsivePage from '../docs/CSS/TableResponsivePage';
import TablePaginationPage from '../docs/Tables/TablePaginationPage';
import TableScrollPage from '../docs/Tables/TableScrollPage';
import TableSearchPage from '../docs/Tables/TableSearchPage';
import TableSortPage from '../docs/Tables/TableSortPage';
import TooltipPage from '../docs/Advanced/TooltipPage';
import ValidationPage from '../docs/Forms/ValidationPage';
import VideoCarouselPage from '../docs/Advanced/VideoCarouselPage';
import VideoPage from '../docs/Plugins/VideoPage';
import WavesPage from '../docs/Advanced/WavesPage';
import StretchedLinkPage from '../docs/Components/StretchedLinkPage';
import NotificationsFreePage from '../docs/Advanced/NotificationsPage';
import MasonryPage from '../docs/CSS/MasonryPage';
import SwitchPage from '../docs/Forms/SwitchPage';
import TreeviewPage from '../docs/Plugins/TreeviewPage';
import RatingPage from '../docs/Plugins/RatingPage';

Vue.use(Router);

export default new Router({
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
      path: '/tables/datatableJSON',
      name: 'DataTableJSONPage',
      component: DataTableJSONPage
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
      path: '/navigation/navigation-v1',
      name: 'NavigationPagev1',
      component: NavigationPagev1
    }, {
      path: '/navigation/navigation-v2',
      name: 'NavigationPagev2',
      component: NavigationPagev2
    }, {
      path: '/navigation/navigation-v3',
      name: 'NavigationPagev3',
      component: NavigationPagev3
    }, {
      path: '/navigation/navigation-v4',
      name: 'NavigationPagev4',
      component: NavigationPagev4
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
      path: '/plugins/treeview',
      name: 'TreeviewPage',
      component: TreeviewPage
    },{
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
    },{
      path: '/plugins/rating',
      name: 'RatingPage',
      component: RatingPage
    },
    
  ]
});

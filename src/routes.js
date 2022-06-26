import HomePage from "./pages/Home";
import ComponentPage from "./pages/Components";
import ArchivePage from "./pages/Archive"

var routes = [
    {
      path: "home",
      name: "Home",
      icon: "",
      component: HomePage,
      layout: "/public",
    },
    {
      path: "components",
      name: "Components",
      icon: "",
      component: ComponentPage,
      layout: "/public",
    },
    {
      path: "archive",
      name: "Archive",
      icon: "",
      component: ArchivePage,
      layout: "/public",
    }
  ];
  export default routes;
  
import HomePage from "./pages/Home";
import TodayPage from "./pages/Today";
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
      path: "today",
      name: "Today",
      icon: "",
      component: TodayPage,
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
  
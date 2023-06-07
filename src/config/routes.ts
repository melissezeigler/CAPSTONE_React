import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Weather from "../pages/Weather";

interface RouteType {
    path: string, 
    component: () => JSX.Element,
    name: string,
    protected: boolean
}

const routes: RouteType[] = [
    {
      path: "",
      component: Home,
      name: "Home Screen",
      protected: false,
    },
    {
      path: "/dashboard",
      component: Dashboard,
      name: "Dashboard",
      protected: true,
    },
    {
      path: "/weather",
      component: Weather,
      name: "Weather",
      protected: false,
    },
  ];

export default routes
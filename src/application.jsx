import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css"

import {BrowserRouter, Route, Routes} from "react-router-dom";
import PublicLayout from "./layouts/Public"

import routes from "./routes";


function Application() {
  /**
   * 
   * @param {Array} routes 
   */
   const getPublicRoutes = (routes) => {
    const componentList = routes.map(function(route, index){
        if(route.layout === "/public"){
          const RouteComponent = route.component;
            return(
                <Route exact path={route.path} element={<RouteComponent name={route.name}/>} key={index}></Route>
            )
        }
    })

    return componentList;
  }
  return (
    <BrowserRouter>
      <Routes>
          <Route exact path="sample" element={<h1>Sample Page</h1>}></Route>
          <Route exact path="/" element={<PublicLayout/>}>
            {getPublicRoutes(routes) }
          </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Application;

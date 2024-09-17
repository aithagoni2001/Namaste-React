import React,{lazy,Suspense} from "react";
import ReactDOM from "react-dom/client";
import Error from "./Components/Error";
import Contact from "./Components/Contact";
import Header from "./Components/Header";
import Body from "./Components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./Components/About";
import Restaurants from "./Components/Restaurants";
// import Instamart from "./Components/Instamart";


const Instamart = lazy(()=> import("./Components/Instamart"))

const App = () => {
  return (
    <div>
      <Header />
      <Outlet/>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path:"/",
    element: <App/>,
    children:[
      {
        path:"/",
        element :<Body/>
      },
      {
        path:"/about",
        element:<About/>
      },{
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/instamart",
        element: <Suspense fallback={<h1>Loading....🔃</h1>}><Instamart/></Suspense>
      },
      {
        path:"restaurants/:resid",
        element:<Restaurants/>
      },
    ],
    errorElement: <Error/>
  }
 

])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);

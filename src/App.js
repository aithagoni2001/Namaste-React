import React,{lazy,Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import Error from "./Components/Error";
import Contact from "./Components/Contact";
import Header from "./Components/Header";
import Body from "./Components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./Components/About";
import Restaurants from "./Components/Restaurants";
// import Instamart from "./Components/Instamart";

import UserContext from "./Components/UserContext";
import { Provider } from "react-redux";
import AppStore from "./utils/ReduxStore/AppStore";


const Instamart = lazy(()=> import("./Components/Instamart"))

const App = () => {
  const [Username, setUsername] = useState()

useEffect(()=>{

  const data ={
    name:"Aithagoni"
  }
  setUsername(data.name)
  console.log(Username)

},[])
  return (
    <div>
      <Provider store={AppStore}>
      <UserContext.Provider value={{LoggedInUser:Username,setUsername}}>
      <Header />
      <Outlet/>
      </UserContext.Provider>
      </Provider>
      {/* <UserContext.Provider value={{LoggedInUser:"Pavan"}}> */}
     
      {/* </UserContext.Provider>  */}
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

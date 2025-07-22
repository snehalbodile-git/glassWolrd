import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter,Outlet,RouterProvider} from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import Body from "./Body";
import CustomerList from "../customer/CustomerList";
import AddCustomer from '../customer/AddCutomer';
function Home(){

    return(
        <>
         {/* <!--begin::App Wrapper--> */}
        <div className="app-wrapper">
            <Header/>   
            <Sidebar/>
            <Outlet/>
            {/* <Body/> */}
            <Footer/>
        </div>   
        </>
    );
}


export default Home;

const appRouter = createBrowserRouter([
    {
        path:"/",
        element : <Home/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/customer",
                element:<CustomerList/>
            },
            {
                path:"/customer/add",
                element:<AddCustomer/>
            }
        ]
    }
]);

const rootElement = document.getElementById('root');

if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    // root.render(<Home />);
    root.render(<RouterProvider router={appRouter}/>);
}
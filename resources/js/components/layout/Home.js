import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import Body from "./Body";

function Home(){

    return(
        <>
         {/* <!--begin::App Wrapper--> */}
        <div className="app-wrapper">
            <Header/>   
            <Sidebar/>
            <Body/>
            <Footer/>
        </div>   
        </>
    );
}


export default Home;

const rootElement = document.getElementById('root');

if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(<Home />);
}
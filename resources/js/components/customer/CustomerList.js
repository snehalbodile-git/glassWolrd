import { Link } from "react-router-dom";
const CustomerList = ()=>{

    return(
        <>
         <main className="app-main">
        {/* <!--begin::App Content Header--> */}
        <div className="app-content-header">
          {/* <!--begin::Container--> */}
          <div className="container-fluid">
            <Link to="/customer/add" className="btn btn-primary">
             Add Customer
            </Link>
          </div>
        </div>
        </main>
        </>
    );
}
export default CustomerList;
import { useRef } from "react";
import axios from "axios";
const AddCustomer = () =>{
     const firstName = useRef("");
     const lastName = useRef("");
     const email = useRef("");
     const phone = useRef("");
     const address = useRef("");
     const note = useRef("");
     const addCustomerEvent = async(e) =>{
        e.preventDefault(); // Prevents page reload
        console.log("Snete");
        const customerData = {
            firstName:firstName.current.value,
            lastName:lastName.current.value,
            email:email.current.value,
            phone:phone.current.value,
            address:address.current.value,
            note:note.current.value
        };
        console.log(customerData);
        try {
            const response = await axios.post("http://127.0.0.1:8000/api/customer/add", customerData);
            console.log("Success:", response.data);
            } catch (error) {
            console.error("Error submitting form:", error);
        }
     }  
return(
    <>
        <main className="app-main">
        {/* <!--begin::App Content Header--> */}
        <div className="app-content-header">
          {/* <!--begin::Container--> */}
          <div className="container-fluid">
                <div className="card card-primary">
              <div className="card-header">
                <h3 className="card-title">Add new Customer</h3>
              </div>
              {/* <!-- /.card-header --> */}
              {/* <!-- form start --> */}
              <form onSubmit={addCustomerEvent}>
                <div className="card-body">
                    <div className="row mb-3">
                        <div className="col-lg-6">
                             <div className="form-group">
                                <label for="first_name">First Name</label>
                                <input type="text" className="form-control" ref={firstName} id="first_name" placeholder="Enter First Name"/>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="form-group">
                                <label for="first_last">Last Name</label>
                                <input type="text" className="form-control" ref={lastName} id="last_name" placeholder="Enter Last Name"/>
                            </div>
                         </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-lg-6">
                            <div className="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" className="form-control" ref={email} id="exampleInputEmail1" placeholder="Enter email"/>
                            </div>
                        </div>
                        <div className="col-lg-6">
                             <div className="form-group">
                                <label for="phone">Phone</label>
                                <input type="text" className="form-control" ref={phone} id="phone" placeholder="Phone"/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="form-group">
                                <label for="address" className="form-label">Enter Address</label>
                                <textarea className="form-control" ref={address} id="address" rows="4" placeholder="Enter Customer Address here..."></textarea>
                                </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="form-group">
                                <label for="extra_note" className="form-label">Extra Note</label>
                                <textarea className="form-control" ref={note} id="form" rows="4" placeholder="Enter Extra Note here..."></textarea>
                                </div>
                        </div>
                    </div>
                </div>
                {/* <!-- /.card-body --> */}

                <div className="card-footer">
                  <button type="submit"  className="btn btn-primary float-right">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        </main>
    </>
);
}
export default AddCustomer;
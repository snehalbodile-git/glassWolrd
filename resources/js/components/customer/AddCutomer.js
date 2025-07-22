
const AddCustomer = () =>{
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
              <form>
                <div className="card-body">
                    <div className="row mb-3">
                        <div className="col-lg-6">
                             <div className="form-group">
                                <label for="first_name">First Name</label>
                                <input type="text" className="form-control" id="first_name" placeholder="Enter First Name"/>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="form-group">
                                <label for="first_last">Last Name</label>
                                <input type="text" className="form-control" id="last_name" placeholder="Enter Last Name"/>
                            </div>
                         </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-lg-6">
                            <div className="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email"/>
                            </div>
                        </div>
                        <div className="col-lg-6">
                             <div className="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="form-group">
                                <label for="address" className="form-label">Enter Address</label>
                                <textarea className="form-control" id="address" rows="4" placeholder="Enter Customer Address here..."></textarea>
                                </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="form-group">
                                <label for="extra_note" className="form-label">Extra Note</label>
                                <textarea className="form-control" id="form" rows="4" placeholder="Enter Extra Note here..."></textarea>
                                </div>
                        </div>
                    </div>
                </div>
                {/* <!-- /.card-body --> */}

                <div className="card-footer">
                  <button type="submit" className="btn btn-primary float-right">Submit</button>
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
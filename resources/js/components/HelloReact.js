import React from 'react';
import ReactDOM from 'react-dom/client';

function HelloReact() {
  return (
    <>
    <div className="card card-primary">
      <div className="card-header">
        <h3 className="card-title">Quick Example</h3>
      </div>
      <form>
        <div className="card-body">
          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email"/>
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
          </div>
          <div className="form-group">
            <label for="exampleInputFile">File input</label>
            <div className="input-group">
              <div className="custom-file">
                <input type="file" class="custom-file-input" id="exampleInputFile"/>
                <label className="custom-file-label" for="exampleInputFile">Choose file</label>
              </div>
              <div className="input-group-append">
                <span className="input-group-text">Upload</span>
              </div>
            </div>
          </div>
          <div className="form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
            <label className="form-check-label" for="exampleCheck1">Check me out</label>
          </div>
        </div>
        <div className="card-footer">
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
      
    </>
  );
}

export default HelloReact;

const rootElement = document.getElementById('hello-react');

if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(<HelloReact />);
}
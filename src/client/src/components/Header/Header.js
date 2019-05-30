import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header className="primary-header border-bottom">
        <h1 className="header-primary">BuildASign Quote Generator</h1>
        <div className="row">
          <div className="col-md-4 form-group">
            <select className="custom-select select-store ">
              <option defaultValue>Please Select Store</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div className="col-md-4 form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Please Enter Sign ID"
            />
          </div>
          <div className="col-md-4 form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Please Enter Help ID"
            />
          </div>
        </div>
      </header>
    );
  }
}

export default Header;

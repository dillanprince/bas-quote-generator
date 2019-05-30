import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header className="primary-header border-bottom">
        <h1 class="header-primary">BuildASign Quote Generator</h1>
        <div className="row">
          <div className="col-md-4">
            <select class="custom-select">
              <option selected>Please Select Store</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div className="col-md-4">
            <input
              type="text"
              class="form-control"
              placeholder="Please Enter Sign ID"
            />
          </div>
          <div className="col-md-4">
            <input
              type="text"
              class="form-control"
              placeholder="Please Enter Help ID"
            />
          </div>
        </div>
      </header>
    );
  }
}

export default Header;

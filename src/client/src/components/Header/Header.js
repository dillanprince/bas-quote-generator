import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showForm: false };
  }

  render() {
    return (
      <header className="primary-header border-bottom">
        <h1 className="header-primary">BuildASign Quote Generator</h1>
        <div className="row">
          <div className="col-md-4 form-group">
            <select
              className="custom-select select-store"
              defaultValue="Please Select Store"
              onChange={(event) => this.props.handleStoreChange(event)}>
              {this.props.storeDropdownItems.map((store) => {
                return (
                  <option value={store.storeId} key={store.storeId}>
                    {store.name}
                  </option>
                );
              })}
              <option defaultValue="Please Select Store">
                Please Select Store
              </option>
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

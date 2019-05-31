import React from 'react';

class QuoteItem extends React.Component {
  render() {
    return (
      <div className="quote-item border-bottom">
        <div className="form-row">
          <div className="col-md-12">
            <h3>Quote Item 1</h3>
          </div>
        </div>
        <div className="form-row">
          <div className="col-md-6 form-group">
            <select
              className="custom-select"
              onChange={(event) => this.props.handleProductChange(event)}>
              {this.props.currentStore.materials.map((material, i) => {
                return (
                  <option value={material.MaterialId} key={i}>
                    {material.Name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="col-md-4 form-group">
            <select
              className="custom-select"
              onChange={(event) => this.props.handleSizeChange(event)}>
              {this.props.currentStore.sizes.map((size, i) => {
                return (
                  <option value={size.SizeId} key={i}>
                    {size.Name}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <div className="form-row">
          <div className="col-md-2 form-group">
            <input type="number" className="form-control" placeholder="QTY" />
          </div>
          <div className="col-md-4 form-group">
            <select className="custom-select">
              <option defaultValue>Number of Colors</option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4+</option>
            </select>
          </div>
          <div className="col-md-4 form-group">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                Double Sided
              </label>
            </div>
          </div>
        </div>
        <div className="form-row">
          <div className="col-md-6 form-group">
            <select className="custom-select">
              <option defaultValue>Options</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div className="col-md-3 offset-md-3 d-flex align-items-end text-right justify-content-end">
            <div className="remove-item">&#10006; Remove Item</div>
          </div>
        </div>
      </div>
    );
  }
}

export default QuoteItem;

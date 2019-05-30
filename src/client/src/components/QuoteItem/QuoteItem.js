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
            <select className="custom-select">
              <option defaultValue>Please Select Material</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div className="col-md-4 form-group">
            <select className="custom-select">
              <option defaultValue>Please Select Size</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
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
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
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
          <div className="col-md-3 offset-md-3">
            <button type="button" className="btn btn-outline-danger">
              Remove Item
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default QuoteItem;

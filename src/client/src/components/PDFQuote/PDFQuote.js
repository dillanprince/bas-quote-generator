import React from 'react';

class PDFQuote extends React.Component {
  render() {
    return (
      <>
        <div className="form-row">
          <div className="col-md-6 form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Please Enter Name"
            />
          </div>
          <div className="col-md-6 form-group">
            <input
              type="email"
              className="form-control"
              placeholder="Please Enter Email"
            />
          </div>
        </div>
        <div className="form-row">
          <div className="col-md-4 offset-4">
            <button className="btn-primary btn-lg btn form-control">
              Get PDF Quote
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default PDFQuote;

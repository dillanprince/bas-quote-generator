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
          <div className="col-md-6 offset-3">
            <button className="btn-primary form-control" onClick={this.generatePDF}>Create PDF</button>
          </div>
        </div>
      </>
    );
  }

  generatePDF(e) {
    e.preventDefault();

    // path relative to application domain, this will neeed to be absolute when pdf server separated out
    fetch('api/v1/pdf', {
      method: 'post',
      body: '<html><strong>hola mundo</strong></html>'
    }).then(res =>  res.json());
  }
}

export default PDFQuote;

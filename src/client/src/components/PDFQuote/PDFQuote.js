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
            <button
              className="btn-primary form-control"
              onClick={this.generatePDF}>
              Create PDF
            </button>
          </div>
        </div>
      </>
    );
  }

  generatePDF(e) {
    e.preventDefault();

    const pdfTemplate =
      '<!DOCTYPE html> \
    <html lang="en"> \
      <head> \
        <meta charset="utf-8"> \
        <title>Your Quote</title> \
        <style> \
        /* internal styles needed for pdf processing, external links are not recognized  */ \
        .clearfix:after { \
          content: ""; \
          display: table; \
          clear: both; \
        } \
     \
        a { \
          color: #5D6975; \
          text-decoration: underline; \
        } \
     \
        body { \
          position: relative; \
          width: 21cm;   \
          margin: 0 auto;  \
          color: #001028; \
          background: #FFFFFF;  \
          font-family: Arial, sans-serif;  \
          font-size: 12px;  \
          font-family: Arial; \
        } \
     \
        header { \
          padding: 10px 0px 20px 0px; \
          margin-bottom: 30px; \
          border-bottom: 1px solid  #C1CED9; \
        } \
     \
        #logo { \
          float: left; \
          margin-bottom: 10px; \
        } \
     \
        #logo img { \
          width: 265px; \
        } \
     \
        h1 { \
          border-bottom: 1px solid  #C1CED9; \
          font-size: 2.4em; \
          line-height: 1.4em; \
          font-weight: bold; \
          text-align: center; \
          margin: 0 0 20px 0; \
          padding-bottom: 20px; \
        } \
     \
        #project { margin-left: 20px; } \
        #company { margin-right: 20px; } \
     \
        #project span, \
        #company span { \
          color: #5D6975; \
          text-align: right; \
          width: 52px; \
          margin-right: 10px; \
          display: inline-block; \
          font-size: 0.8em; \
        } \
     \
        #company { \
          margin-top: 20px; \
          text-align: right; \
        } \
     \
        #project div, \
        #company div { \
          white-space: nowrap;         \
        } \
     \
        table { \
          width: 100%; \
          border-collapse: collapse; \
          border-spacing: 0; \
        } \
     \
        table tr:nth-child(2n-1) td { \
          background: #F5F5F5; \
        } \
     \
        table tr:last-child td { \
          background: none; \
        } \
     \
        table td { \
          text-align: center; \
        } \
     \
        table th { \
          padding: 5px 20px; \
          white-space: nowrap;        \
          font-weight: bold;  \
          font-size: 1.2em; \
          text-transform: uppercase;  \
          text-align: right; \
        } \
     \
        table .service, \
        table .desc { \
          text-align: left; \
        } \
     \
        table td { \
          padding: 20px; \
          text-align: right; \
        } \
     \
        table td.service, \
        table td.desc { \
          vertical-align: top; \
        } \
     \
        table td.unit, \
        table td.qty, \
        table td.total { \
          font-size: 1.2em; \
        } \
     \
        table td.total span { display: block;} \
     \
        table td.grand { \
          border-top: 1px solid #C1CED9;; \
          text-transform: uppercase; \
        } \
     \
        #notices .notice { \
          color: #5D6975; \
          font-size: 1.2em; \
        } \
     \
        footer { \
          color: #5D6975; \
          width: 100%; \
          height: 30px; \
          bottom: 0; \
          padding: 8px 0; \
          text-align: center; \
          border-top: 1px solid  #C1CED9; \
          margin-top: 40px; \
          margin-bottom: 40px; \
        } \
     \
        strong {  \
          display: block;  \
          font-size: 1.2em; \
          padding-bottom: 5px; \
        } \
        </style> \
      </head> \
      <body> \
        <header class="clearfix"> \
          <div id="logo"> \
            <!-- base64 url needed for pdf processing, external references not recognized --> \
            <!-- future: make logo dynamic based on store --> \
            <img src="data:image/png;base64,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"> \
          </div> \
          <div id="company" class="clearfix"> \
            <div> \
              <strong>Quote Details</strong> \
              <div>Quote #: 999999</div> \
              <div>Generated On: 5/30/19</div> \
              <div>Valid Until: 6/30/19</div> \
            </div> \
          </div> \
          <h1>Your Quote</h1> \
          <div id="project"> \
            <div> \
              <strong>Customer Details</strong>  \
              First Last <br/> \
              Email@email.com \
            </div> \
          </div> \
        </header> \
        <main> \
          <table> \
            <thead> \
              <tr> \
                <th class="desc">Item Description</th> \
                <th>Price/Unit</th> \
                <th>Qty</th> \
                <th>Total</th> \
              </tr> \
            </thead> \
            <tbody> \
              <tr> \
                <td class="desc"> \
                  <strong>Paper (14 point ultra thick card stock)</strong> \
                  6 ft U-channel galvanized sign post with mounting bracket<br/> \
                  Colors: Full Color<br/> \
                  Single-sided \
                </td> \
                <td class="unit">$40.00</td> \
                <td class="qty">26</td> \
                <td class="total">$1,040.00</td> \
              </tr> \
              <tr> \
                <td class="desc"> \
                  <strong>Retractable Banner</strong> \
                  Colors: Full Color<br/> \
                  Single-sided \
                </td> \
                <td class="unit">$40.00</td> \
                <td class="qty">80</td> \
                <td class="total">$3,200.00</td> \
              </tr> \
              <tr> \
                <td class="desc"> \
                  <strong>Premium Vinyl Banner</strong> \
                  Grommets<br/> \
                  Colors: Full Color<br/> \
                  Single-sided \
                </td> \
                <td class="unit">$40.00</td> \
                <td class="qty">20</td> \
                <td class="total">$800.00</td> \
              </tr> \
              <tr> \
                <td colspan="3" class="grand total" style="font-weight: bold;"> \
                  <span>Subtotal</span> \
                  <span>Promo</span> \
                  <span>Delivery</span> \
                  <span>Tax</span> \
                </td> \
                <td class="grand total"> \
                    <span>$6,500.00</span> \
                    <span>-$1,500.00</span> \
                    <span>$6,500.00</span> \
                    <span>$6,500.00</span> \
                </td> \
              </tr> \
              <tr> \
                  <td colspan="3" class="grand total" style="font-weight: bolder;"> \
                    <strong style="padding-bottom: 25px;">Total</strong> \
                  </td> \
                  <td class="grand total"> \
                    <strong>$6,500.00</strong> \
                    <a href="#">Order Now!</a> \
                  </td> \
              </tr> \
            </tbody> \
          </table> \
        </main> \
        <footer> \
          <!-- future: make contact info dynamic based on store --> \
          BuildASign.com <br />  \
          11525A Stonehollow Dr, Suite 100, Austin, TX 78758 <br />  \
          eas@buildasign.com <br />  \
          1-800-330-9622  \
        </footer> \
      </body> \
    </html>';

    // const fr = new FileReader();
    // reader.onload = () => {
    //   var dataURL = reader.result;
    //   var output = document.getElementById('output');
    //   output.src = dataURL;
    // };
    // reader.readAsDataURL(input.files[0]);

    // path relative to application domain, this will neeed to be absolute when pdf server separated out
    fetch('api/v1/pdf', {
      method: 'post',
      body: pdfTemplate
    })
      .then((res) => res.arrayBuffer())
      .then((data) => {
        const blob = new Blob([data], { type: 'application/pdf' });
        var link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        const currentDate = new Date();
        link.download = `quote_${currentDate.getFullYear()}${currentDate.getMonth() +
          1}${currentDate.getDate()}.pdf`;
        link.click();
      });
  }
}

export default PDFQuote;

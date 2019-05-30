import React from 'react';

class QuoteSummary extends React.Component {
  render() {
    return (
      <div className="quote-summary">
        <h4 className="border-bottom">Quote Summary</h4>
        <div className="quote-summary__quote-items">
          <div className="quote-summary-item">
            <div className="quote-summary-item__item">First Quote Item</div>
            <div className="quote-summary-item__price">$XX.xx</div>
          </div>
          <div className="quote-summary-item">
            <div className="quote-summary-item__item">First Quote Item</div>
            <div className="quote-summary-item__price">$XX.xx</div>
          </div>
        </div>
        <div className="quote-summary__promo">
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Enter Promo Code"
              aria-label="Enter Promo Code"
              aria-describedby="button-addon2"
            />
            <div class="input-group-append">
              <button
                class="btn btn-outline-secondary"
                type="button"
                id="button-addon2">
                Apply Promo
              </button>
            </div>
          </div>
        </div>
        <div className="quote-summary__prices">
          <div className="quote-summary-prices">
            <div className="quote-summary-prices__subtotal">
              <div>Subtotal:</div>
              <div>$XX.xx</div>
            </div>
            <div className="quote-summary-prices__shipping">
              <div>Shipping:</div>
              <div>$XX.xx</div>
            </div>
            <div className="quote-summary-prices__tax">
              <div>Tax:</div>
              <div>$XX.xx</div>
            </div>
            <div className="quote-summary-prices__total border-top bold">
              <div>TOTAL:</div>
              <div>$XX.xx</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default QuoteSummary;

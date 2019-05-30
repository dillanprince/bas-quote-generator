import React from 'react';

class QuoteSummary extends React.Component {
  render() {
    return (
      <div className="quote-summary">
        <h4 className="border-bottom">Quote Summary</h4>
        <div className="quote-summary__quote-items">
          <div className="quote-summary-item">
            <div className="quote-summary-item__item">
              <div className="quote-summary-item__item--title">
                50000 - Bigass Banner
              </div>
              <div className="quote-summary-item__item--option">
                Item Option
              </div>
            </div>
            <div className="quote-summary-item__price">
              <div className="quote-summary-item__price--total">
                <strong>$XX.xx</strong>
              </div>
              <div className="quote-summary-item__price--peritem">
                ($XX.xx / unit)
              </div>
            </div>
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
              <div>Delivery:</div>
              <div>$XX.xx</div>
            </div>
            <div className="shipping-options">
              <div className="shipping-options__address">
                <div className="form-row">
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Zipcode"
                    />
                  </div>
                  <div className="col-md-6">
                    <select class="custom-select">
                      <option value="1">State</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="custom-control custom-radio">
                <input
                  type="radio"
                  id="customRadio1"
                  name="customRadio"
                  class="custom-control-input"
                />
                <label class="custom-control-label" for="customRadio1">
                  Shipping Option 1 ($XX.xx)
                </label>
              </div>
              <div class="custom-control custom-radio">
                <input
                  type="radio"
                  id="customRadio2"
                  name="customRadio"
                  class="custom-control-input"
                />
                <label class="custom-control-label" for="customRadio2">
                  Shipping Option 2 ($XX.xx)
                </label>
              </div>
              <div class="custom-control custom-radio">
                <input
                  type="radio"
                  id="customRadio3"
                  name="customRadio"
                  class="custom-control-input"
                />
                <label class="custom-control-label" for="customRadio3">
                  Shipping Option 3 ($XX.xx)
                </label>
              </div>
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

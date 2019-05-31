import React from 'react';

class QuoteSummary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      promoInput: '',
      activePromo: '',
      showPromo: false,
      showShippingInfo: false
    };
    this.promoInput = React.createRef();
  }
  handleChange = (event) => {
    this.setState({ promoInput: event.target.value });
  };
  handleClick = () => {
    this.setState({ activePromo: this.state.promoInput });
    if (this.state.promoInput !== '') {
      this.setState({ showPromo: true });
    } else if (this.state.activePromo == '') {
      this.setState({ showPromo: false });
    }
  };
  handleShowShipping = () => {
    this.setState({ showShippingInfo: true });
  };
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
              <div className="quote-summary-item__price--total text-right">
                <strong>$XX.xx</strong>
              </div>
              <div className="quote-summary-item__price--peritem">
                ($XX.xx / unit)
              </div>
            </div>
          </div>
        </div>
        <div className="quote-summary__promo">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Promo Code"
              aria-label="Enter Promo Code"
              aria-describedby="button-addon2"
              onChange={(event) => this.handleChange(event)}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                id="button-addon2"
                onClick={this.handleClick}>
                Apply Promo
              </button>
            </div>
          </div>
          {this.state.showPromo === false ? null : (
            <div className="promo-applied">{this.state.activePromo}</div>
          )}
        </div>
        <div className="quote-summary__prices">
          <div className="quote-summary-prices">
            <div className="quote-summary-prices__subtotal">
              <div>Subtotal:</div>
              <div className="text-right">$XX.xx</div>
            </div>
            <div className="quote-summary-prices__shipping">
              <div>Delivery:</div>
              <div className="text-right">$XX.xx</div>
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
                    <select
                      className="custom-select"
                      onChange={this.handleShowShipping}>
                      <option value="1">Select State</option>
                      <option value="1">State 1</option>
                      <option value="1">State 2</option>
                      <option value="1">State 3</option>
                      <option value="1">State 4</option>
                      <option value="1">State 5</option>
                    </select>
                  </div>
                </div>
              </div>
              <div
                className={
                  this.state.showShippingInfo === false ? 'd-none' : 'd-block'
                }>
                <div className="custom-control custom-radio">
                  <input
                    type="radio"
                    id="customRadio1"
                    name="customRadio"
                    className="custom-control-input"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="customRadio1">
                    Shipping Option 1 ($XX.xx)
                  </label>
                </div>
                <div className="custom-control custom-radio">
                  <input
                    type="radio"
                    id="customRadio2"
                    name="customRadio"
                    className="custom-control-input"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="customRadio2">
                    Shipping Option 2 ($XX.xx)
                  </label>
                </div>
                <div className="custom-control custom-radio">
                  <input
                    type="radio"
                    id="customRadio3"
                    name="customRadio"
                    className="custom-control-input"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="customRadio3">
                    Shipping Option 3 ($XX.xx)
                  </label>
                </div>
              </div>
            </div>
            <div className="quote-summary-prices__tax">
              <div>Tax:</div>
              <div>$XX.xx</div>
            </div>
            <div className="quote-summary-prices__total border-top bold">
              <div>TOTAL:</div>
              <div className="text-right">$XX.xx</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default QuoteSummary;

import React from 'react';

class QuoteSummary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      promoInput: '',
      activePromo: '',
      showPromo: false,
      showShippingInfo: false,
      zipcode: '',
      stateCode: '',
      shippingOptions: []
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
    } else if (this.state.activePromo === '') {
      this.setState({ showPromo: false });
    }
  };

  handleShippingChange = async (event) => {
    const stateCode = event.target.value;
    await this.setState({ stateCode });

    if (stateCode.length && this.state.zipcode > 0) {
      this.getShippingOptions();
    }
  };

  handleZipcodeChange = async (event) => {
    const zipcode = event.target.value;

    await this.setState({ zipcode });

    if (
      Number.parseInt(zipcode) &&
      zipcode.length === 5 &&
      this.state.stateCode.length === 2
    ) {
      this.getShippingOptions();
    }
  };

  getShippingOptions = async () => {
    const data = {
      zipCode: this.state.zipcode,
      state: this.state.stateCode,
      promoCode: this.state.promoInput,
      storeId: this.props.storeId,
      quoteItems: []
    };

    var res = await fetch(
      'https://qa.www.buildasign.com/AdminQuoteGenerator/Shipping',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }
    );

    const shippingOptions = await res.json();

    console.log(shippingOptions);

    this.setState({
      showShippingInfo: true,
      shippingOptions: [...shippingOptions]
    });
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
                      onChange={this.handleZipcodeChange}
                      value={this.state.zipcode}
                      maxLength="5"
                    />
                  </div>
                  <div className="col-md-6">
                    <select
                      className="custom-select"
                      onChange={this.handleShippingChange}>
                      <option>Select State</option>
                      <option>GA</option>
                      <option>TX</option>
                    </select>
                  </div>
                </div>
              </div>
              <div
                className={
                  this.state.showShippingInfo === false ? 'd-none' : 'd-block'
                }>
                {this.state.shippingOptions.map((shippingOption, i) => {
                  return (
                    <div
                      className="custom-control custom-radio"
                      key={shippingOption.VendorDeliveryOptionId}>
                      <input
                        type="radio"
                        id={`customRadio${i}`}
                        name="customRadio"
                        className="custom-control-input"
                        value={shippingOption.VendorDeliveryOptionId}
                        defaultChecked={shippingOption.IsDefault}
                      />
                      <label
                        className="custom-control-label"
                        htmlFor={`customRadio${i}`}>
                        Shipping Option 1 (${shippingOption.Rate})
                      </label>
                    </div>
                  );
                })}
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

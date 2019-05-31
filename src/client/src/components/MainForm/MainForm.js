import React from 'react';
import QuoteItem from '../QuoteItem/QuoteItem';

class MainForm extends React.Component {
  render() {
    return (
      <div className="main-form">
        <QuoteItem
          currentStore={this.props.currentStore}
          handleProductChange={this.props.handleProductChange}
          handleSizeChange={this.props.handleSizeChange}
        />
        <button
          type="button"
          className="btn btn-lg btn-primary add-another-item">
          + Add Another Item
        </button>
      </div>
    );
  }
}

export default MainForm;

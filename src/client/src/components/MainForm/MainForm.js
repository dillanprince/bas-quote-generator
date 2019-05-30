import React from 'react';
import QuoteItem from '../QuoteItem/QuoteItem';

class MainForm extends React.Component {
  render() {
    return (
      <div className="main-form">
        <QuoteItem />
        <button
          type="button"
          className="btn btn-primary btn-lg btn-block add-another-item">
          + Add Another Item
        </button>
      </div>
    );
  }
}

export default MainForm;

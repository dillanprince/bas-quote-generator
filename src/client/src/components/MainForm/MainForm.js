import React from 'react';
import QuoteItem from '../QuoteItem/QuoteItem';

class MainForm extends React.Component {
  render() {
    return (
      <div className="main-form">
        <QuoteItem />
        <button type="button" class="btn btn-primary btn-lg btn-block">
          + Add Another Item
        </button>
      </div>
    );
  }
}

export default MainForm;

import React from 'react';
import Header from './components/Header/Header';
import MainForm from './components/MainForm/MainForm';
import QuoteSummary from './components/QuoteSummary/QuoteSummary';
import PDFQuote from './components/PDFQuote/PDFQuote';

import '../node_modules/bootstrap-scss/bootstrap.scss';

import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      store: []
    };
  }
  render() {
    fetch('https://qa.www.buildasign.com/api/promos/stores')
      .then((response) => response.json())
      .then((response) => console.log(response));

    return (
      <div className="App text-center">
        <form action="">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <Header />
              </div>
            </div>
            <div className="row">
              <div className="col-md-8">
                <MainForm />
                <PDFQuote />
              </div>
              <div className="col-md-4">
                <QuoteSummary />
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default App;

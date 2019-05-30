import React from 'react';
import Header from './components/Header/Header';
import MainForm from './components/MainForm/MainForm';
import QuoteSummary from './components/QuoteSummary/QuoteSummary';
import PDFQuote from './components/PDFQuote/PDFQuote';
import { getStores } from './apis/stores';

import '../node_modules/bootstrap-scss/bootstrap.scss';

import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      basStores: [],
      showForm: false
    };
  }
  componentDidMount() {
    fetch('https://qa.www.buildasign.com/api/promos/stores')
      .then((res) => res.json())
      .then((res) => {
        const storeIds = Object.keys(res.storeIdsAndNames);
        const stores = storeIds.map((storeId) => ({
          storeId,
          name: res.storeIdsAndNames[storeId]
        }));
        const sorted = stores.sort((a, b) => (a.name > b.name ? 1 : -1));
        this.setState({
          basStores: sorted
        });
      });
  }
  showForm = () => {
    this.setState({ showForm: true });
  };
  render() {
    return (
      <div className="App text-center">
        <form action="">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <Header
                  storeDropdownItems={this.state.basStores}
                  showForm={this.showForm}
                />
              </div>
            </div>
            {this.state.showForm === false ? null : (
              <div className="row">
                <div className="col-md-8">
                  <MainForm />
                  <PDFQuote />
                </div>
                <div className="col-md-4">
                  <QuoteSummary />
                </div>
              </div>
            )}
          </div>
        </form>
      </div>
    );
  }
}

export default App;

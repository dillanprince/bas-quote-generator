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
      basStores: [],
      showForm: false,
      currentStore: {
        storeId: null,
        quoteItems: [],
        materials: [],
        sizes: []
      }
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
  handleStoreChange = (event) => {
    const storeId = event.target.value;
    fetch(`https://qa.www.buildasign.com/api/v1/material?storeId=${storeId}`)
      .then((res) => res.json())
      .then((res) =>
        this.setState({
          showForm: true,
          currentStore: {
            ...this.state.currentStore,
            storeId,
            materials: res.Payload,
            sizes: [],
            options: []
          }
        })
      );
  };
  handleProductChange = (event) => {
    const materialId = event.target.value;
    fetch(
      `https://qa.www.buildasign.com/api/v1/material/${materialId}/sizes?storeId=${
        this.state.currentStore.storeId
      }`
    )
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          currentStore: {
            ...this.state.currentStore,
            sizes: res.Payload,
            quoteItems: [
              ...this.state.currentStore.quoteItems,

              {
                materialId: materialId
              }
            ]
          }
        });
      });
  };
  handleSizeChange = (event) => {
    const sizeId = event.target.value;
    const data = {
      storeId: this.state.currentStore.storeId,
      materialId: this.state.currentStore.quoteItems[0].materialId,
      sizeId
    };
    this.setState({
      currentStore: {
        ...this.state.currentStore,
        quoteItems: [
          {
            ...this.state.currentStore.quoteItems[0],
            sizeId: sizeId
          }
        ]
      }
    });
    fetch('https://qa.www.buildasign.com/adminquotegenerator/upsells', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
  };
  handlePricing = () => {
    const data = {
      StoreId: '',
      MaterialId: '',
      SizeId: '',
      Quantity: '',
      NumColors: 0,
      UpsellItemIds: '',
      NumSides: ''
    };

    fetch('', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
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
                  handleStoreChange={this.handleStoreChange}
                />
              </div>
            </div>
            {this.state.showForm === false ? null : (
              <div className="row">
                <div className="col-md-8">
                  <MainForm
                    currentStore={this.state.currentStore}
                    handleProductChange={this.handleProductChange}
                    handleSizeChange={this.handleSizeChange}
                  />
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

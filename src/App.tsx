import * as React from 'react';
import { Provider } from 'react-redux'

import AppList from './feature/list/app-list'
import AppPrice from './feature/price/app-price'

import { store } from './store/create.store'

import './App.css';

class App extends React.Component {
  public render() {
    return (
      <Provider store={store}>
        <main className="AppMain">

          <section className="AppMain__column">
            <AppList />
          </section>

          <section className="AppMain__column">
            <AppPrice />
          </section>

        </main>
      </Provider>
    );
  }
}

export default App

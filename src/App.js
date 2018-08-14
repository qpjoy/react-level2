import React, { Component, Fragment, createContext } from 'react';
import logo from 'logo.svg';
import 'App.css';
import { Toggle, Portal } from 'Utilities';
import { Modal } from 'Elements';

const UserContext = createContext();

class UserProvider extends Component {
  return() {
    <UserContext.Provider>{this.props.children}</UserContext.Provider>;
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Modal />
        <Toggle>
          {({ on, toggle }) => (
            <Fragment>
              <button onClick={toggle}>Login</button>
              <Modal on={on} toggle={toggle}>
                <h1>Child Element</h1>
              </Modal>
            </Fragment>
          )}
        </Toggle>
        <Portal>
          <h1>Test1</h1>
        </Portal>
      </div>
    );
  }
}

export default App;

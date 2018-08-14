import React, { Component, Fragment, createContext } from 'react';
import logo from 'logo.svg';
import 'App.css';
import { Toggle, Portal } from 'Utilities';
import { Modal } from 'Elements';

const UserContext = createContext();

class UserProvider extends Component {
  state = {
    id: '123',
    name: 'Bryan',
    email: 'example@gmail.com'
  };

  render() {
    return (
      <UserContext.Provider
        value={{
          user: this.state
        }}
      >
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

class App extends Component {
  render() {
    return (
      <UserProvider>
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
      </UserProvider>
    );
  }
}

export default App;

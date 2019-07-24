import React, { Component } from "react";
import Login from "./components/Login";
import User from "./components/Pages/user";
import { store } from "./store";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Wrapper from "./components/Wrapper";


const wrapperUser = Wrapper(User);
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
            <Route exact path="/users" component={wrapperUser} />
          <Switch>
            <Route exact path="/" component={Login} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;

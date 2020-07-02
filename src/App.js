import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ReduxToastr from "react-redux-toastr";

import Navbar from "components/Navbar";
import ImageGrid from "components/ImageGrid";
import Form from "components/Form";

function App() {
  return (
    <>
      <ReduxToastr
        timeOut={2000}
        newestOnTop={false}
        preventDuplicates
        position="bottom-left"
        getState={(state) => state.toastr} // This is the default
        transitionIn="fadeIn"
        transitionOut="fadeOut"
        progressBar
        closeOnToastrClick
      />
      <Router>
        <Navbar />
        <div className="row">
          <div className="container">
            <Switch>
              <Route path="/" exact>
                <ImageGrid />
              </Route>
              <Route path="/add">
                <Form />
              </Route>
              <Route path="/edit/:id" exact>
                <Form />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;

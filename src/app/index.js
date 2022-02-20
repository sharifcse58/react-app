import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";

import "../css/style.css";

import {
  Home,
  Header,
  About,
  Blog,
  Project,
  Contact,
  SideBar,
} from "../components";
import { MoviesList, MoviesInsert, MoviesUpdate } from "../pages";
import "bootstrap/dist/css/bootstrap.min.css";

const Container = styled.div.attrs({
  className: "container",
})``;

function App(props) {
  return (
    <Router>
      {/* <NavBar /> */}
      <div class="row">
        <div class="col-md-3 left-menu">
          <SideBar />
        </div>

        <div class="col-md-9 col-sm-12">
          <div class="nav-header">
            <Header />
          </div>
          <div class="content">
            <Switch>
              <Route exact path="/about" component={Home} />
              <Route exact path="/" component={About} />
              <Route exact path="/projects" component={Project} />
              <Route exact path="/blog" component={Blog} />
              <Route exact path="/contact" component={Contact} />

              <Container>
                <Route path="/movies/list" exact component={MoviesList} />
                <Route path="/movies/create" exact component={MoviesInsert} />
                <Route
                  path="/movies/update/:id"
                  exact
                  component={MoviesUpdate}
                />
              </Container>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;

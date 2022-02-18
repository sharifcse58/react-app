import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import styled from 'styled-components'

import { NavBar, Home, About, Blog, Project, Contact, Header, SideBar } from '../components'
import { MoviesList,MoviesInsert,MoviesUpdate } from '../pages'
import 'bootstrap/dist/css/bootstrap.min.css'

const Container = styled.div.attrs({
    className: 'container',
})``

function App(props) {
    return (
        <Router>
            {/* <NavBar /> */}
            <div class="row">
                <SideBar />
                <div class="content">
                    {/* <Header /> */}
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
        </Router>
    )
}

export default App

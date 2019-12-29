import React, {Component, Fragment} from 'react';
import {Link, Route} from 'react-router-dom';
import Signup from './Signup';
import Signin from './Signin';
import Home from './Home';
import AddArticle from './AddArticle';
import Header from '../componets/Header';

export default class App extends Component {
    render() {
        return (
            <Fragment>
                <Header/>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <Route exact path="/" component={Home}/>
                            <Route exact path="/users/signup" component={Signup}/>
                            <Route exact path="/users/signin" component={Signin}/>
                            <Route exact path="/articles/add" component={AddArticle}/>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
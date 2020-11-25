import React, { Component } from "react";
import {Route,NavLink,HashRouter} from "react-router-dom";
import StartingTheProject from "./startintheproject";
import Code from "./code";
import AppFinished from "./finished";

class Main extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <h1>Utilizando React Router</h1>
                    <ul className="header">
                        <li><NavLink to="/">Primeiros Passos</NavLink></li>
                        <li><NavLink to="/codigo">O código</NavLink></li>
                        <li><NavLink to="/finalizado">App Finalizado</NavLink></li>
                    </ul>
                <div className="content">
                    <Route exact path="/" component={StartingTheProject}/>
                    <Route path="/codigo" component={Code}/>
                    <Route path="/finalizado" component={AppFinished}/>
                </div>
                </div>
            </HashRouter>
    );
    }
}
export default Main;
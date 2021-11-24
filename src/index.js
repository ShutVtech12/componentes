import React from "react";
import {
    Switch,
    Route,
} from "react-router-dom";
import Home from "./components/home";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/styles.css"
import Info from "./components/info";

const App = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/2CV3IDE8IDP3/">
                    <Home />
                </Route>
                <Route exact path="/2CV3IDE8IDP3/info">
                    <Info />
                </Route>
                <Route path="*" render={() => <h1>Recurso no encontrado</h1>} />
            </Switch>
        </div>
    );
}
export default App;
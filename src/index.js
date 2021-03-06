import React from "react";
import {
    Switch,
    Route,
} from "react-router-dom";
import Home from "./components/home";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/styles.css"
import Login from "./components/login"

const App = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/2CV13IDA8IDPF/">
                    <Login />
                </Route>
                <Route exact path="/2CV13IDA8IDPF/home">
                    <Home />
                </Route>
                <Route path="*" render={() => <h1>Recurso no encontrado</h1>} />
            </Switch>
        </div>
    );
}
export default App;
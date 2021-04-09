import './App.css';
import Page from "./components/Page";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
        <BrowserRouter>
            <Navbar/>
            <div>
                <Switch>
                    <Route path={'/page'} exact component={Page}/>
                </Switch>
            </div>
        </BrowserRouter>
    </div>
  );
}

export default App;

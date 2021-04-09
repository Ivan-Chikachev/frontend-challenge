import './App.css';
import Page from "./components/Page";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Navbar from "./components/Navbar";
import Favorite from "./components/Favorite";
import {PageState} from "./context/Page/PageState";

function App() {
    return (
        <div className="wrapper">
            <PageState>
                <BrowserRouter>
                    <Navbar/>
                    <div>
                        <Switch>
                            <Route path={'/cats'} exact component={Page}/>
                            <Route path={'/favorite'} exact component={Favorite}/>
                        </Switch>
                    </div>
                </BrowserRouter>
            </PageState>
        </div>
    );
}

export default App;

import './App.css';
import Page from "./components/Page";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Navbar from "./components/Navbar";
import Favorite from "./components/Favorite";
import {PageState} from "./context/Page/PageState";
import {FavoriteState} from "./context/Favorite/FavoriteState";

function App() {
    return (
        <div className="wrapper">
            <FavoriteState>
                <PageState>
                    <BrowserRouter>
                        <Navbar/>
                        <div>
                            <Switch>
                                <Route path={'/'} exact component={Page}/>
                                <Route path={'/favorite'} exact component={Favorite}/>
                            </Switch>
                        </div>
                    </BrowserRouter>
                </PageState>
            </FavoriteState>
        </div>
    );
}

export default App;

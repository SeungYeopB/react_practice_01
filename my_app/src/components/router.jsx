import {BrowserRouter, Route} from 'react-router-dom'

import Login from '../pages/login'; 
import Home from "../pages/home"
function Router () {
    return(
        <BrowserRouter>
        <Route path="/" exact component={Login} />
        <Route path="/Home" exact component={Home} />
        </BrowserRouter>
    )
}

export default Router;
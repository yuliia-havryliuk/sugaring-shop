import './App.css';
import Header from "./Components/MainPage/Header/Header";
import {Route, Switch} from "react-router-dom";

import Contact from "./Components/Contact/Contact";
import MainPage from "./Components/MainPage/MainPage";
import PayAndDelivery from "./Components/PayAndDelivery/PayAndDelivery";
import Categories from "./Components/MainPage/Categories/Categories";
import Category from "./Components/MainPage/Categories/Category/Category";
const App =()=> {
  return (
      <div className="app-wrapper">
          <Header/>
          <Switch>
              <Route path='/' component={MainPage} exact/>
              <Route path='/contact' component={Contact} exact/>
              <Route path='/details' component={PayAndDelivery} exact/>
              <Route path='/category/1' component={Category} exact/>
              <Route path='/category/2' component={Category} exact/>
              <Route path='/category/3' component={Category} exact/>
              <Route path='/category/4' component={Category} exact/>
              <Route path='/category/5' component={Category} exact/>
              <Route path='/category/6' component={Category} exact/>
              <Route path='/category/7' component={Category} exact/>
              <Route path='/category/8' component={Category} exact/>
          </Switch>
      </div>
  );
}

export default App;

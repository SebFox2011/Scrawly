import React,{Component} from 'react';
import {Route,Switch} from "react-router-dom";
import "./css/normalize.css";
import "./css/skeleton.css";
import './App.css';
import "./css/style.css"
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/@fortawesome/fontawesome-free/css/all.css'
import FormAccueil from "./containers/FormAccueil";
import FormNewScrawl from "./containers/FormNewScrawl";
import FormShowScrawl from "./containers/FormShowScrawl";
import NotFound from "./component/NotFound";
import FormEditScrawl from "./containers/FormEditScrawl";


class App extends Component{

  constructor(props) {
    super(props);
    this.state={

    }
  }

  render(){
    return (
        <div className="App">
            <header className="App-header">
                <h1 className="text-white">Scrawly - My Doodle fun 🤢</h1>
            </header>
      <Switch>
          <Route path="/" exact component={FormAccueil}/>
          <Route path="/new" exact component={FormNewScrawl}/>
          <Route path="/scrawl/:slug"  exact component={FormShowScrawl}/>
          <Route path="/edit/:slug" exact component={FormEditScrawl}/>
          <Route component={NotFound}/>
      </Switch>
      </div>
    );

  }
}

export default App;



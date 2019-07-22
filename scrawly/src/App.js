import React,{Component} from 'react';
import './App.css';
import Name from "./component/Name";
import {Route} from "react-router-dom";
import Homepage from "./component/Homepage";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/@fortawesome/fontawesome-free/css/all.css'

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
            <Route path="/" exact component={Homepage}/>

            <Name/>
        </div>
    );

  }
}

export default App;



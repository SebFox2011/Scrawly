import React,{Component} from 'react';
import './App.css';
import Name from "./component/Name";
import {Route} from "react-router-dom";
import Homepage from "./component/Homepage";



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

          </header>
            <Route path="/" exact component={Homepage}/>
            <h1 className="btn btn-danger">Scrawly - My Doodle fun 🤢</h1>
            <Name/>
        </div>
    );

  }
}

export default App;



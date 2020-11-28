import React from 'react';
import { Route, Switch } from "react-router-dom";
import { withStyles } from '@material-ui/core'
// import des containers
import FormAccueil from "./containers/FormAccueil";
import FormNewScrawl from "./containers/FormNewScrawl";
import FormShowScrawl from "./containers/FormShowScrawl";
import FormNotFound from "./component/FormNotFound";
import FormEditScrawl from "./containers/FormEditScrawl";

//import des fichiers de css
import '../node_modules/@fortawesome/fontawesome-free/css/all.css'
import "./css/normalize.css";
import "./css/skeleton.css";
import "./css/style.css"

const App = (props) => {
    const {classes} = props
    return (
        <div className={classes.App}>
            <header className={classes.AppHeader}>
                <h1 className={classes.h1}>Scrawly - My Doodle fun 🤢</h1>
            </header>
            <Switch>
                <Route path="/" exact component={FormAccueil} />
                <Route path="/new" exact component={FormNewScrawl} />
                <Route path="/scrawl/:slug" exact component={FormShowScrawl} />
                <Route path="/edit/:slug" exact component={FormEditScrawl} />
                <Route component={FormNotFound} />
            </Switch>
        </div>
    );

}
const style = {
    App: {
        textAlign: 'center',
    },
    AppHeader: {
        backgroundColor: '#282c34',
        minHeight: '20vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 'calc(10px + 2vmin)',
        color: 'white'
    },
    h1: {
        margin:' 0.5em 0',
        fontStyle: 'italic',
        color: 'white'
    }
}

export default withStyles (style) (App)
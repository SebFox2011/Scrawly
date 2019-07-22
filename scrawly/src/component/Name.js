import React, {Component} from 'react';

class Name extends Component {

    constructor(props) {
        super(props);
        this.state={

        }

    }

    componentDidMount() {
        fetch('http://127.0.0.1:8000/api/pools')
            .then(reponse =>reponse.json())
            .then(data => this.setState({
                poll: data["hydra:member"]
            }));
    }

    render() {
        return (
            <h1>
                Nom du poll
            </h1>
        );
    }
}

export default Name;
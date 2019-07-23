import React, {Component} from 'react';

class FormShowScrawl extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.scrawl.title}</h2>
                <p>{this.props.scrawl.slug}</p>

            </div>
        );
    }
}

export default FormShowScrawl;
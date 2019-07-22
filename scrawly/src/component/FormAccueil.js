import React, {Component} from 'react';

class FormAccueil extends Component {

    render() {
        return (

            <section className="homepage bg-blue">
                <h1>Scrawly</h1>
                <form onSubmit={event => this.handleSubmit(event)}>

                    <p><label htmlFor="value">Scrawly</label></p>
                    <p><input type="text" name="value" placeholder="Scrawl slug" value={this.props.slug}
                              onChange={event => this.props.update(event.target.value)}/>
                        <input type="submit" value="GO" className="btn btn-danger"/>
                    </p>
                </form>
                <a link="new.html" className="btn btn-danger"><i className="fa fa-plus"></i> Create a new Scrawl</a>
            </section>
        );
    }
}

export default FormAccueil;
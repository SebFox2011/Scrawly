import React, {Component} from 'react';

class FormAccueil extends Component {

    render() {
        return (

            <section className="homepage bg-blue">
                <form onSubmit={event => this.handleSubmit(event)}>

                    <p><label htmlFor="value">Scrawly</label></p>
                    <p><input type="text" name="value" placeholder="Scrawl slug" value={this.props.slug}
                              onChange={event => this.props.show(event.target.value)}/>
                        <input type="submit" value="GO" className="btn btn-danger"/>
                    </p>
                </form>
                <a link="new.html" className="btn btn-danger"><i className="fa fa-plus"></i> Create a new Scrawl</a>
            </section>
        );
    }
}

export default FormAccueil;
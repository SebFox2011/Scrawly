import React, {Component} from 'react';

class FormEditScrawl extends Component {

    handleSubmit(event){
        event.preventDefault();
    }

    render() {
        return (
            <React.Fragment>
                <section className="bg-blue">
                    <h1>Edition d'un scrawl</h1>
                </section>
                <section className="container form-new">
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" value={this.props.title}/>
                    <ul>
                        <li>12 January 2020</li>
                    </ul>
                    <form onSubmit={event => this.handleSubmit(event)}>
                        <input type="date"/>
                        <button type="submit" className="button button-primary"><i className="fa fa-plus"></i>Add
                        </button>
                    </form>
                    <a href="scrawl.html" className="button button-primary"><i
                        className="fa fa-check"></i>Finish</a>
                </section>
            </React.Fragment>
        );
    }
}

export default FormEditScrawl;
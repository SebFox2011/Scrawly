import React, {Component} from 'react';

class FormNewScrawl extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="bg-blue">
                    <h1>New Scrawl</h1>
                </section>

                <section className="container form-new">

                    <form action="#">
                        <div>
                            <label htmlFor="title"> Titre </label>
                            <input type="text" id="title" placeholder="Julien's birthday" value={this.props.title}
                                   onChange={event => this.props.updateTitle(event.target.value)}/>
                        </div>
                        <div>
                            <label htmlFor="slug"> Slug </label>
                            <input type="text" id="slug" placeholder="Scrawl slug" value={this.props.slug}
                                   onChange={event => this.props.updateSlug(event.target.value)}/>
                        </div>
                        <button type="submit" className="button button-primary"><i className="fa fa-arrow-right"></i>Create
                            and add new dates
                        </button>
                    </form>

                </section>
            </React.Fragment>
        );
    }
}

export default FormNewScrawl;


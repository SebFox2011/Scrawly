import React, {Component} from 'react';
import {Redirect,NavLink} from "react-router-dom";

class FormNewScrawl extends Component {
    render() {
        if(this.props.id) {
            return <Redirect to={"/edit/" + this.props.slug}/>
        }
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
                        <NavLink to={"/edit/" + this.props.slug} type="submit" className="button button-primary"><i className="fa fa-arrow-right"></i>Create
                            and add new dates
                        </NavLink>
                    </form>

                </section>
            </React.Fragment>
        );
    }
}

export default FormNewScrawl;


import React from 'react';
import { Redirect } from "react-router-dom";

const FormNewScrawl = (props) => {
    const { id, title, slug, loading } = props

    const handleSubmit = (e) => {
        e.preventDefault()
        this.props.createScrawl({
            title: this.props.title,
            slug: this.props.slug
        })
    }

    if (id) {
        return <Redirect to={"/edit/" + this.props.slug} />
    }
    return <React.Fragment>
        <section className="bg-blue">
            <h1>New Scrawl</h1>
        </section>
        <section className="container form-new">
            <form onSubmit={event => this.handleSubmit(event)}>
                <div>
                    <label htmlFor="title"> Titre </label>
                    <input type="text" id="title" placeholder="Julien's birthday" value={title}
                        onChange={event => this.props.updateTitle(event.target.value)} />
                </div>
                <div>
                    <label htmlFor="slug"> Slug </label>
                    <input type="text" id="slug" placeholder="Scrawl slug" value={slug}
                        onChange={event => this.props.updateSlug(event.target.value)} />
                </div>
                <button type="submit" className="button button-primary">
                    <i className={"fa " + (loading ? "fa-spinner fa-pulse" : "fa-arrow-right")} />
                            Create and add new dates
                        </button>
            </form>
        </section>
    </React.Fragment>
}
export default FormNewScrawl


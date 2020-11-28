import React from 'react';
import { Redirect, NavLink } from "react-router-dom";


const FormAccueil = (props) => {
    const { slug, show, id, update } = props

    const handleSubmit = (e) => {
        e.preventDefault();
        show(slug);
    }

    if (id) {
        return <Redirect to={"/scrawl/" + slug} />
    }

    return <section className="homepage bg-blue">
        <form onSubmit={event => handleSubmit(event)}>

            <p><label htmlFor="value">Scrawly</label></p>
            <p><input type="text" name="value" placeholder="Scrawl slug" value={slug}
                onChange={event =>
                    update(event.target.value)} />
                <input type="submit" value="GO" className="btn btn-danger" />
            </p>
        </form>
        <NavLink className="btn btn-danger" to="/new" type="submit">
            <i className="fa fa-plus"></i> Create a new Scrawl
                </NavLink>
    </section>
}

export default FormAccueil;
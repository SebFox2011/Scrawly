import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

class FormEditScrawl extends Component {

    handleSubmit(event) {
        event.preventDefault();
        if ( !this.props.loading && this.props.newdate.date !== '' && this.props.newdate.poll !== '' ) {
            this.props.createDate(this.props.newdate);
        }
    }

    render() {
        const {choise, title, slug} = this.props.scrawl;
        const navLink = "/scrawl/" + slug;
        // Construction de la liste de dates

        const listDates = choise.map(
            choix => {
                let dateUs = new Date(choix.date); //console.log('US : ' + dateUs);
                let dateFr = dateUs.toLocaleDateString('fr-FR', {weekday: 'long', day: '2-digit', month: 'long'}); //console.log('FR : ' + dateFr);
                return <li key={choix['@id']}>{dateFr}</li>;
            });
        return (
            <React.Fragment>
                <section className="bg-blue">
                    <h1><NavLink to="/" className="btn"><i className="fa fa-home" aria-hidden="true"></i></NavLink> Nouveau Scrawl <i className="fa fa-linode" aria-hidden="true"></i></h1>
                </section>
                <section className="container form-new">
                    <label htmlFor="title"> Votre scrawl </label>
                    <input type="text" id="title" value={title} disabled />
                    <ul>
                        {listDates}
                    </ul>
                    <form onSubmit={event => this.handleSubmit(event)}>
                        <input type="date" onChange={event => this.props.updateDate({date: event.target.value, poll: this.props.id})}/>
                        <button type="submit" className="button button-primary"><i className={"fa " + (this.props.loading ? "fa-spinner fa-pulse" : "fa fa-plus")}></i> Ajouter</button>
                    </form>
                    <NavLink to={navLink} className="button button-primary"><i className="fa fa-check"></i> Terminer</NavLink>
                </section>
            </React.Fragment>
        );
    }
}

export default FormEditScrawl;
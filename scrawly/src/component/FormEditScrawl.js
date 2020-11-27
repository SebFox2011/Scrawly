import React from 'react'
import { NavLink } from "react-router-dom"

const FormEditScrawl = (props) => {
    const { choise, title, slug } = props.scrawl
    const {loading, newdate} = props
    const navLink = "/scrawl/" + slug
    
    const handleSubmit = (e) => {
        e.preventDefault()
        if (loading && newdate.date !== '' && newdate.poll !== '') {
            this.props.createDate(newdate)
        }
    }
    // Construction de la liste de dates

    const listDates = choise.map( choix => {
            let dateUs = new Date(choix.date); //console.log('US : ' + dateUs);
            let dateFr = dateUs.toLocaleDateString('fr-FR', { weekday: 'long', day: '2-digit', month: 'long' })
            return <li key={choix['@id']}>{dateFr}</li> })

    return <React.Fragment>
            <section className="bg-blue">
                <h1>
                    <NavLink to="/" className="btn">
                    <i className="fa fa-home" aria-hidden="true"/>
                    </NavLink> Nouveau Scrawl <i className="fa fa-linode" aria-hidden="true">
                    </i>
                </h1>
            </section>
            <section className="container form-new">
                <label htmlFor="title"> Votre scrawl </label>
                <input type="text" id="title" value={title} disabled />
                <ul>
                    {listDates}
                </ul>
                <form onSubmit={event => this.handleSubmit(event)}>
                    <input type="date" onChange={event => this.props.updateDate({ date: event.target.value, poll: this.props.id })} />
                    <button type="submit" className="button button-primary"><i className={"fa " + (this.props.loading ? "fa-spinner fa-pulse" : "fa fa-plus")}></i> Ajouter</button>
                </form>
                <NavLink to={navLink} className="button button-primary"><i className="fa fa-check"></i> Terminer</NavLink>
            </section>
        </React.Fragment>  
}

export default FormEditScrawl
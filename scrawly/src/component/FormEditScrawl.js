import React, {Component} from 'react';

class FormEditScrawl extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="bg-blue">
                    <h1>New Scrawl</h1>
                </section>

                <section className="container form-new">

                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" value="Julien's birthday" disabled/>
                        <ul>
                            <li>12 January 2020</li>
                            <li>13 January 2020</li>
                            <li>19 January 2020</li>
                        </ul>
                        <form>
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
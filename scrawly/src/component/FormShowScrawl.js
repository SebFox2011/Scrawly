import React, {Component} from 'react';
import md5 from "md5";
import HeadScrawl from "./FormShowScrawlComponent/HeadScrawl";
import BodyScrawl from "./FormShowScrawlComponent/BodyScrawl";
import CheckBoxScrawl from "./FormShowScrawlComponent/CheckBoxScrawl";


class FormShowScrawl extends Component {

    componentDidMount() {
        const slug = /[^/]*$/.exec(this.props.location.pathname)[0];
        this.props.show(slug);
    }

    render() {

        const gravatar = 'https://gravatar.com/avatar/';
        const {title, slug, persons, choise} = this.props.scrawl;

        const TBodySCrawl = persons.map(person =>
            <BodyScrawl key={person['@id']} person={person} choise={choise}/>
        );

        const THeadScrawl = choise.map(choise =>
            <HeadScrawl key={choise['@id']} choise={choise}/>
        );

        const TCheckBoxScrawl = choise.map(choise =>
            <CheckBoxScrawl key={choise['@id']} choise={choise}/>
        );

        return (

            <div>
                <h2>{title} </h2>
                <table className="poll">
                    <thead>
                    <tr>
                        <th></th>
                        {THeadScrawl}
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {TBodySCrawl}
                    <tr>
                        <td>
                            <div className="user-form-container">
                                <input type="email" name="email" placeholder="Email"/>
                                <input type="text" name="name" placeholder="Fullname"/>
                            </div>
                        </td>
                        {TCheckBoxScrawl}
                        <td>
                            <button type="submit" className="button button-primary">
                                <i className="fa fa-2x fa-save"></i>
                            </button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default FormShowScrawl;
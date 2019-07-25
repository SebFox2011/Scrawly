import React, {Component} from 'react';
import md5 from "md5";
import HeadScrawl from "./FormShowScrawlComponent/HeadScrawl";
import BodyScrawl from "./FormShowScrawlComponent/BodyScrawl";


class FormShowScrawl extends Component {

    componentDidMount() {
        const slug = /[^/]*$/.exec(this.props.location.pathname)[0];
        this.props.show(slug);
    }

    render() {
        let participants = [];
        let dates =[];



        //const gravatar = 'https://gravatar.com/avatar/' + md5('sebfox@gmail.com') + '?s=32&d=robohash';

        const gravatar = 'https://gravatar.com/avatar/';
        const {title, slug, persons, choise} = this.props.scrawl;

        /*const people = persons.map((person) =>
            <p><img src={gravatar + md5(person.email) + '?s=32&d=robohash'}
                    alt="Gravatar"/> {person.username} {person.email} </p>
        );

        persons.map((person) =>
            participants.push({person})
        );

        const date = choise.map((choice) =>
            <p>{choice.date.slice(0, 10)} </p>
        );

        choise.map((choice) =>
            dates.push({choice})
        );*/

       const TBodySCrawl = persons.map(person =>
           <BodyScrawl key={person['@id']} person={person}/>
       );

       const THeadScrawl = choise.map(choise=>
            <HeadScrawl key={choise['@id']} choise={choise}/>
        );

        return (

            <div>
                <h2>{title} / slug : {slug} </h2>
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
                        <td>
                            <input type="checkbox"/>
                        </td>
                        <td>
                            <input type="checkbox"/>
                        </td>
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
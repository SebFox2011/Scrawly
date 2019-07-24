import React, {Component} from 'react';
import md5 from "md5";


class FormShowScrawl extends Component {
    render() {
        //const gravatar = 'https://gravatar.com/avatar/' + md5('sebfox@gmail.com') + '?s=32&d=robohash';

        const gravatar = 'https://gravatar.com/avatar/';
        const {title, slug, persons, choise} = this.props.scrawl;

        const people = persons.map((person) =>
            <p><img src={gravatar + md5(person.email) + '?s=32&d=robohash'}
                    alt="Gravatar"/> {person.username} {person.email} </p>
        );

        const date = choise.map((choice) =>
            <p>{choice.date.slice(0, 10)} </p>
        );
        return (
            <div>
                <h2>{title} / slug : {slug} </h2>
                {people}
                {date}
            </div>
        );
    }
}

export default FormShowScrawl;
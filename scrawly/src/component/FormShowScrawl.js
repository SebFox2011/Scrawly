import React, {Component} from 'react';
import md5 from "md5";


class FormShowScrawl extends Component {
    render() {
        const gravatar = 'https://gravatar.com/avatar/' + md5('sebfox@gmail.com') + '?s=32&d=robohash';
        const {title, slug, persons, choise} = this.props.scrawl;

        const people = persons.map((person) =>
            <p>{person.username} {person.email} </p>
        );

        const date = choise.map((choice) =>
            <p>{choice.date} </p>
        );
        return (
            <div>
                <h2>{title}</h2>
                <p>{slug}</p>
                {this.props.scrawl.persons.map((persons, index) => {
                    console.log("persons");
                    return (<p key={index} persons={persons}/>)

                })}
                {people}
                {date}

                <p><img src={gravatar}
                        alt="Gravatar"/>{this.props.scrawl.persons[0].username} {this.props.scrawl.persons[0].email}</p>

            </div>
        );
    }
}

export default FormShowScrawl;
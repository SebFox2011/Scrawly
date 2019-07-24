import React, {Component} from 'react';
import md5 from "md5";


class FormShowScrawl extends Component {

    componentDidMount() {
        const slug = /[^/]*$/.exec(this.props.location.pathname)[0];
        this.props.show(slug);
    }

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
                <table className="poll">
                    <thead>
                    <tr>
                        <th></th>
                        <th>
                            <div className="date-container">
                                <div className="month">Jan</div>
                                <div className="date">12</div>
                                <div className="day">Saturday</div>
                            </div>
                        </th>
                        <th>
                            <div className="date-container">
                                <div className="month">Jan</div>
                                <div className="date">13</div>
                                <div className="day">Sunday</div>
                            </div>
                        </th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>
                            <div className="user-container">
                                <img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=32"/>
                                <span>John Doe</span>
                            </div>
                        </td>
                        <td className="available"><i className="fa fa-3x fa-check-circle"></i></td>
                        <td className="available"><i className="fa fa-3x fa-check-circle"></i></td>
                        <td>
                            <a href="#">
                                <i className="fa fa-2x fa-edit"></i>
                            </a>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <div className="user-container">
                                <img src="https://www.gravatar.com/avatar/7fda1da9c34e978d5990afd7f58ca0f4?s=32"/>
                                <span>Howard Thomson</span>
                            </div>
                        </td>
                        <td className="available"><i className="fa fa-3x fa-check-circle"></i></td>
                        <td className="unavailable"><i className="fa fa-3x fa-times-circle"></i></td>

                        <td>
                            <a href="#">
                                <i className="fa fa-2x fa-edit"></i>
                            </a>
                        </td>
                    </tr>
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
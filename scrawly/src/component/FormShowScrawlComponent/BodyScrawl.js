import React, {Component} from 'react';
import md5 from "md5";
import HeadScrawl from "./HeadScrawl";

class BodyScrawl extends Component {

    render() {
        const people = this.props.person;
        const choise = this.props.choise;
        const gravatar = 'https://gravatar.com/avatar/' + md5(people.email) + '?s=32&d=robohash';

        const checkDate = choise.map((choise) => {
            console.log("choise: " + choise["@id"]);console.log("people: " + people.choise.id);
            return (choise["@id"] === people.choise["@id"]) ?
                <td className="available"><i className="fa fa-3x fa-check-circle"></i></td> :
                <td className="unavailable"><i className="fa fa-3x fa-times-circle"></i></td> ;
        });

        return (
                <tr>
                    <td>
                        <div className="user-container">
                            <img src={gravatar} alt="Gravatar"/>
                            <span>{people.username}</span>
                        </div>
                    </td>
                    {checkDate}
                    <td>
                        <a href="#">
                            <i className="fa fa-2x fa-edit"></i>
                        </a>
                    </td>
                </tr>
        );
    }
}

export default BodyScrawl;
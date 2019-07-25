import React, {Component} from 'react';
import md5 from "md5";

class BodyScrawl extends Component {

    render() {
        const people = this.props.person;
        const gravatar = 'https://gravatar.com/avatar/'+ md5(people.email) + '?s=32&d=robohash';

        return (
            <tr>
                <td>
                    <div className="user-container">
                        <img src={gravatar} alt="Gravatar"/>
                        <span>{people.username}</span>
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
        );
    }
}

export default BodyScrawl;
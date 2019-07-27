import React, {Component} from 'react';
import md5 from "md5";

class BodyScrawl extends Component {

    render() {
        const choise = this.props.choise;
        const people = this.props.person;

        const gravatar = 'https://gravatar.com/avatar/' + md5(people.email) + '?s=32&d=robohash';


        let checkDate = 0;
            checkDate=choise.map((choise) => {

            return (people.choise.find(item => item['@id'] === choise['@id'])) ?
                <td key={checkDate['@id']} className="available"><i className="fa fa-3x fa-check-circle"></i></td>
                :
                <td key={checkDate['@id']} className="unavailable"><i className="fa fa-3x fa-times-circle"></i></td>
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
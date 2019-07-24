import React, {Component} from 'react';
import md5 from "md5";


class FormShowScrawl extends Component {
    render() {
        const gravatar ='https://gravatar.com/avatar/' + md5('sebfox@gmail.com') + '?s=32&d=robohash';
        const{title,slug,persons,choices}=this.props.scrawl;

        return (
            <div>
                <h2>{title}</h2>
                <p>{slug}</p>
                
                <img src={gravatar} alt="Gravatar"/>
                <p>{this.props.scrawl.persons[0].username}</p>
                <p>{this.props.scrawl.persons[0].email}</p>





            </div>
        );
    }
}

export default FormShowScrawl;
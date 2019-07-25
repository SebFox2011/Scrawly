import React, {Component} from 'react';

class HeadScrawl extends Component {


    render() {
        const choiseDate = new Date(this.props.choise.date);
        const mois    = choiseDate.toLocaleDateString('fr-FR',{ month: 'short' });
        const jour    = choiseDate.toLocaleDateString('fr-FR',{ day: '2-digit' });
        const semaine = choiseDate.toLocaleDateString('fr-FR',{ weekday: 'long'});

        return (
            <th>
                <div className="date-container">
                    <div className="month">{mois}</div>
                    <div className="date">{jour}</div>
                    <div className="day">{semaine}</div>
                </div>
            </th>
        );
    }
}

export default HeadScrawl;
import PropTypes from 'prop-types';

import './Card.css';
import Animal from './Animal';



export default function Card({ animal, uncovered}){
    Card.propTypes = {
        uncovered: PropTypes.bool.isRequired,
        animal: PropTypes.object.isRequired,
    };

    const elephant = new Animal(
        'Elefant', 'placeholder.png', 3.3, 6000, 70, 1, 40,
    );

    const front = (
        <div className="card">
            <h1>{animal.name ? animal.name : 'Unbekannt'}</h1>
            {elephant.image && (
            <img  alt={animal.name} height="200" width="200" 
            src={`${process.env.PUBLIC_URL}/${animal.image}`}/>
            )}

            <table>
                <tbody>
                    {Object.keys(Animal.properties).map(property => {
                        const animalProperty = Animal.properties[property];
                        return (
                            <tr key={property}>
                                <td>{animalProperty.label}</td>
                                <td>
                                    {animal[property]}&nbsp;
                                    {animalProperty.unit}
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
    const back = <div className="card back"/>;
    if (uncovered) {
        return front;
    } else {
        return back;
    }
}
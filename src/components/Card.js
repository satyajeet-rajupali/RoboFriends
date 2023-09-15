import React from 'react';
import './Card.css';

const Card = ({ name, email, id }) => {
    return (
        <div className='card dib br3 pa1 ma3 grow bw2 shadow-5 tc'>
            <img alt="RobotImage" src={`https://robohash.org/${id}?200x200`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;
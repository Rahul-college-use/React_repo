import React from 'react';

const Cards = (probs) => {
    // console.log(probs) // This is object user,age is element pass from parent
    return (
        <div className="card">
            <img src={probs.img} alt="" />
            <h1>{probs.user}</h1>
            <p>my age is {probs.age} <br />Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            <button>View Profile</button>
        </div>
    );
}

export default Cards;

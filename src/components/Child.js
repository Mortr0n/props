import React, {useState} from 'react';

const Child = (props) => {
    //don't need if you pass each item individually
//const {coolObject} = props;
// const {name, email, state, city} = coolObject;
const {name, email, city, state, likes, netWorth } = props;

// Getter method currentLikes gets the state useState(likes)
// Setter method setCurrentLikes will set the state 
// for useState(likes) for each object
const [currentLikes, setCurrentLikes] = useState(likes);
const [currentMoney, setCurrentMoney] = useState(netWorth);

//const [hasLiked, setHasLiked] = useState(false);

// Take in a (click) event and setCurrentLikes to currentLikes + 1
const likeHandler = (event) =>{
    setCurrentLikes(currentLikes + 1); 
} 

const addMoney = (event) => {
    setCurrentMoney(currentMoney + 1000);
}

const subtractMoney = (event) => {
    setCurrentMoney(currentMoney - 1000);
}

    return(
        <div>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>City: {city}</p>
            <p>State: {state}</p>
            {/* onClick is a synthetic event.  take in the click event and run the likeHandler() */}
            {/* also make sure to set the tracking item to state and not the props.  
            currentLikes not likes props are immutable */}
            
            <p>Likes : <button onClick={(event) => likeHandler()}>{currentLikes}</button></p>
            <p>Networth : <button onClick={(event) => addMoney()}>Add Monies!</button>{currentMoney}<button onClick={(event) => subtractMoney()}>Bye Monies!</button></p>

            
        </div>
    );

}

export default Child;
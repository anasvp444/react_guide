import React from 'react';
import classes from './Person.css';
const person = (props) => {

    const style = {

    };

    return (
        <div className={classes.Person} style={style}>
            <p onClick={props.click}> Name: {props.name} Age:{props.age}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.change} value={props.name} />
        </div>

    );
}

export default person;
import React from 'react';
import classes from './Cockpit.css'
const cockpit = (props) => {

    let btnClass = '';
    const changeClasses = []

    if (props.persons.length <= 2) {
        changeClasses.push(classes.bold);
    }
    if (props.persons.length <= 1) {
        changeClasses.push(classes.red);
    }

    if (props.showPerson) {

        btnClass = classes.Red;
    }
    return (
        <div className={classes.Cockpit}>
            <h1 className={changeClasses.join(' ')}>{props.title}</h1>
            <p className={changeClasses.join(' ')}>testing</p>
            <button className={btnClass} onClick={props.toggle}>Change Name</button>
        </div>
    )
}

export default cockpit;
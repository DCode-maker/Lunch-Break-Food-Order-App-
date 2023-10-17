import React from 'react';
import classes from './Input.module.css';

const Input = React.forwardRef((Props, ref) => {
    return <div className={classes.input}>
        <label htmlFor={Props.input.id}>{Props.label}</label>
        <input ref={ref} id={Props.input.id} {...Props.input} />
    </div>
});

export default Input;
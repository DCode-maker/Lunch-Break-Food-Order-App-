import { Fragment } from 'react';
import HeaderCartButton from './HeaderCartButton';
import mealsImg from '../../assests/meals.jpg';
import classes from './Header.module.css';
export default function Header(Props) {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>Lunch Break</h1>
                <HeaderCartButton onClick={Props.onShowCart} />
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImg} alt="A table full of delicious food" />
            </div>

        </ Fragment>
    );
}
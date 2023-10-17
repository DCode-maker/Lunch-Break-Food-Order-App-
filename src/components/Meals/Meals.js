import { Fragment } from 'react';
import MealsSummary from './MealsSummary.js';
import AvailableMeals from './AvailableMeals.js';

export default function Meals() {
    return <Fragment>
        <MealsSummary />
        <AvailableMeals />
    </Fragment>
}
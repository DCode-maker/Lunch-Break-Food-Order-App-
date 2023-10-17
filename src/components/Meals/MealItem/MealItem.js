import { useContext } from 'react';
import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm'
import CartContext from '../../../Store/cartContext';
export default function MealItem(Props) {
    const cartCtx = useContext(CartContext);

    const price = `$${Props.price.toFixed(2)}`;

    const addToCartHandler = (amount) => {
        cartCtx.addItem({
            id: Props.id,
            name: Props.name,
            amount: amount,
            price: Props.price
        })
    }
    return <li className={classes.meal}>
        <div>
            <h3>{Props.name}</h3>
            <div className={classes.description}>{Props.decription}</div>
            <div className={classes.price}>{price}</div>
        </div>
        <div>
            <MealItemForm id={Props.id} onAddToCart={addToCartHandler} />
        </div>
    </li>
}
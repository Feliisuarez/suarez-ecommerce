import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../CartContext';


const CartWidget = () => {
    const useCartcontext = useContext(CartContext);

    return (
        <div className="cart-widget">
            <div className='cart-container-icon'>
                <Link to='/cart'><AiOutlineShoppingCart className='cart-icon' /></Link>
                {
                    //muestra el widget al agregarse mas de un producto 
                    useCartcontext.cartList.length > 0 &&
                    <span className="cart-num">{useCartcontext.cartQty()}</span>
                }
            </div>
        </div>
    )
}

export default CartWidget;
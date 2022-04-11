import Cart from '../../components/Cart/Cart'
import './CartPage.scss'

export const CartPage = ({cart, setCart}) => {

    return (<div>
        
        <Cart cart= {cart} setCart={setCart}></Cart>

        </div>)}

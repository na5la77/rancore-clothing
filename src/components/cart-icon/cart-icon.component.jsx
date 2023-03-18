import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';


import { CartIconContainer, ItemCount } from './cart-icon.styles';
import {useSelector, useDispatch } from 'react-redux';
import {selectIsCartOpen, selectCartCount } from './../../store/cart/cart.selector';
import { setIsCartOpen } from '../../store/cart/cart.action';
const CartIcon = () => {
const cartCount=useSelector(selectCartCount);
const dispatch = useDispatch();
const isCartOpen=useSelector(selectIsCartOpen);
  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon className='shopping-icon' />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;

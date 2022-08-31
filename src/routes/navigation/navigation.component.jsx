import { Fragment, useContext } from "react";
import { Outlet } from "react-router-dom";
import { ReactComponent as CrownLogo } from '../../assets/crown.svg';

import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";

import { LogoContainer, NavAction, NavActions, NavigationContainer } from "./navigation.styles";

import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

const NavBar = () => {
    const { currentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext);

    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to='/'>
                    <CrownLogo className='logo' />
                </LogoContainer>
                <NavActions>
                    <NavAction to='/shop'>Shop</NavAction>
                    {
                        (currentUser) ? (
                            <NavAction as='span' onClick={signOutUser}>Sign Out</NavAction>
                        ) : (
                            <NavAction to='/auth'>Sign In</NavAction>
                        )
                    }
                    <CartIcon />
                </NavActions>
                {
                    isCartOpen && <CartDropdown />
                }
            </NavigationContainer>
            <Outlet />
        </Fragment>
    );
}

export default NavBar;
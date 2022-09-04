import { Routes, Route } from "react-router-dom";

import Home from "./routes/home/home.component";
import NavBar from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { createUserDocFromAuth, onAuthStateChangeListener } from "./utils/firebase/firebase.utils";

import { setCurrentUser } from "./store-reduxcers/user/user.action";

const App = () => {
    const dispatch = useDispatch();

    useEffect( () => (
        onAuthStateChangeListener(async (user) => {
            if (user) {
                await createUserDocFromAuth(user);
            }
            dispatch(setCurrentUser(user));
        })
    ), []);

    return (
      <Routes>
        <Route path='/' element={<NavBar />}>
          <Route index element={<Home />} />
          <Route path='auth' element={<Authentication />} />
          <Route path='shop/*' element={<Shop />} />
          <Route path='checkout' element={<Checkout />} />
        </Route>
      </Routes>
  );
}

export default App;

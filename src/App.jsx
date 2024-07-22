import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Breakfast from "./components/Breakfast";
import Dinner from "./components/Dinner";
import Lunch from "./components/Lunch";
import Snacks from "./components/Snacks";
import SignIn from "./login/signin.jsx";
import SignUp from "./login/signup.jsx";
import Completed_Order from "./staffpages/Completed_Order";
import Homepage from "./staffpages/Homepage";
import Menu from "./staffpages/Menu";
import Order_Details from "./staffpages/Order_Details";
import Order_History from "./staffpages/Order_History";
import Orders from './staffpages/Orders';
import Checkout from './userpages/checkout';
import Home from './userpages/home';
import Order from './userpages/order';
import Profile from './userpages/profile';
import Order_checking from './staffpages/Order_checking';
import OrderDetails from './staffpages/OrderDetails';
import Inventory from './staffpages/Inventory';

export default function App() {
  return (
   <>
    <BrowserRouter>
      <Routes>
        <Route path="" exact element={<SignIn />}></Route>
        <Route path="/signin" exact element={<SignIn />}></Route>
        <Route path="/Homepage" exact element={<Homepage />}></Route>
        <Route path="/profile" exact element={<Profile />}></Route>
        <Route path="/checkout" exact element={<Checkout />}></Route>
        <Route path="/order" exact element={<Order />}></Route>
        <Route path="/home" exact element={<Home />}></Route>
        <Route path="/signup" exact element={<SignUp />}></Route>
        <Route path="/orders" exact element={<Orders/>}></Route>
        <Route path="/order_details" exact element={<Order_Details/>}></Route>
        <Route path="/completed_order" exact element={<Completed_Order/>}></Route>
        <Route path="/menu" exact element={<Menu/>}></Route>
        <Route path="/order_history" exact element={<Order_History/>}></Route>
        <Route path="/breakfast" element={<Breakfast />}></Route>
        <Route path="/lunch" element={<Lunch/>}></Route>
        <Route path="/snacks" element={<Snacks/>}></Route>
        <Route path="/dinner" element={<Dinner/>}></Route>
        <Route path="/Order_checking" element={<Order_checking/>}></Route>
        <Route path="/OrderDetails" element={<OrderDetails/>}></Route>
        <Route path="/Inventory" element={<Inventory/>}></Route>
      </Routes>
    </BrowserRouter>
   </>
  )
}
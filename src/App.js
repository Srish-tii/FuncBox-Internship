import React from "react";
import {  BrowserRouter,Switch, Route } from "react-router-dom";
import HomePage from "./pages/homePage/homePage";
import PaymentPageOne from "./pages/paymentPage/paymentPageOne";
import PaymentPageTwo from "./pages/paymentPage/paymentPageTwo";
import OrderPlaced from "./pages/finalPage/finalPage";


const App = () => {
    return (
        <BrowserRouter>
        <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/paymentStepOne" component={PaymentPageOne} />
                <Route exact path="/paymentStepTwo" component={PaymentPageTwo} />
                <Route exact path="/orderPlaced" component={OrderPlaced} />
            </Switch>
        </BrowserRouter>
    );
};

export default App;

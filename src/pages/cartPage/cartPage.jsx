import React from 'react';
import'bootstrap/dist/css/bootstrap.min.css';
import './cartPage.css'
import Trashcan from '../../images/trashcan.PNG';
import Add from '../../images/add.PNG';
import {Route} from 'react-router-dom'

function Project(){

	return(
			<div id="cart-page">
                    <br/>
                    <h2>
                        Cart
                    </h2>
                    <br/>
                    <div id="cart-div" class="d-flex justify-content-center align-items-center">
                        <button id="basic">Basic</button>
                        &emsp;&emsp;&emsp;
                        <span>
                            <img src={Trashcan}/>
                            <span>1</span>
                            <img src={Add}/>
                        </span>
                    </div>
                    <br/>
                    <Route render={({ history}) => (
								<button id="to-pay" onClick={() => { history.push('/paymentStepOne') }}>Proceed to Pay</button>)} />
                   
            </div>
	
)}

export default Project;


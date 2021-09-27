import Nav from '../navPage'
import React from 'react';
import'bootstrap/dist/css/bootstrap.min.css';
import './paymentPage.css';
import Footer from '../footer'
import Address from './adress';
import Input from './input';
import {Route} from 'react-router-dom'

function Project(){
	
	return(
			<div>
                <Nav/>  
                <div class="row">
                    <div class="col-md-6 col-xs-12">
                        <Address Type="Shipping"/>
                    </div> 
                <div class="col-xs-0 col-md-2"></div>
                <div id="summary" class="col-md-4 col-xs-12">
                    <h3>
                        Order Summary
                    </h3>
                    <br/>
                    <p>Item 1: <span style={{float:'right'}}>Rs. 420.00</span></p>
                    <p>Item 2: <span style={{float:'right'}}>Rs. 420.00</span></p>
                    <hr/>
                    <h4>Total:<span style={{float:'right'}}>Rs. 840</span></h4>
                    <Route render={({ history}) => (
								<button id="proceed-to-pay"  onClick={() => { history.push('/paymentStepTwo') }}>Proceed to Pay</button>)} />
                   
                    <Input label="Enter Gift cards, Voucher and Promotional codes" type="text"/>

                </div>
                </div>
                <div class="row">
                    <div class="col-md-6 col-xs-12">
                    <Address Type="Billing"/>
                </div>
                </div>
                
                <Footer/>  
            </div>
	
)}

export default Project;



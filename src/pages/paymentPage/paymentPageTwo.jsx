import Nav from '../navPage'
import React from 'react';
import'bootstrap/dist/css/bootstrap.min.css';
import './paymentPage.css';
import Footer from '../footer'
import Input from './input';
import {Route} from 'react-router-dom'

function Project(){
	
	return(
			<div>
                <Nav/>  
                <div class="row" >
                    <div class="col-md-6 col-xs-12" id="address">
                        <h3>
                            Shipping Address
                        </h3>
                        <h6>Saved Cards</h6>
                        <pre>
                            Sherlock Holmes<br/>
                            xxxx xxxx xxxx 1234<br/>
                            Expiration date: 12/23<br/>
                        </pre>
                        <nobr><label>Enter CVV &emsp;</label><input style={{width:"100px"}} type="Number"/></nobr>
                        <div class="col-md-6 col-xs-12">
                            <br/>
                            <h4>Add a new Card</h4>
                            <Input label="Name on Card" type="text"/><br/>
                            <Input label="Card Number" type="Number"/><br/>
                            <Input label="Expiry Date" type="Date"/><br/>
                            <Input label="CVV" type="Number"/>
                            Note: CVV will not be saved.    
                        </div>
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
								<button id="proceed-to-pay"  onClick={() => { history.push('/orderPlaced') }}>Place Order</button>)} />
                   
                </div>
                </div>
                
                    
                
                <Footer/>  
            </div>
	
)}

export default Project;



import React from 'react';
import'bootstrap/dist/css/bootstrap.min.css';
import Input from './input';
function ShippingAddress(props){
	return(
            <div id="address">
                <h3>
                    {props.type} Address
                </h3>
                <h6>Saved Address</h6>
                <pre>
                    Sherlock Holmes<br/>
                    211B,<br/>
                    Baker Street, London,<br/>
                    United Kingdom<br/>
                    929290304
                </pre>
                <div class="row">
                    <div class="col-6"><Input label="First Name" type="text"/></div>
                    <div class="col-6"><Input label="Last Name" type="text"/></div>
                </div>
                <div class="row">
                    <div class="col-6"><Input label="Apartment/ House Number" type="Number"/></div>
                    <div class="col-6"><Input label="Phone Number" type="Number"/></div>
                </div>
                <div class="row">
                    <Input class="col-12" label="Street/ Locality" type="text"/>
                </div>
                <div class="row">
                    <div class="col-4"><Input label="City" type="text"/></div>
                    <div class="col-4"><Input label="State" type="text"/></div>
                    <div class="col-4"><Input label="Postal Kids" type="Number"/></div>
                </div>
                <div class="col-6"><Input label="Phone Number" type="Number"/></div>

            </div>
            
	);
}

export default ShippingAddress;


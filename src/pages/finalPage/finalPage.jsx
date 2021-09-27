import React, { cloneElement } from 'react';
import'bootstrap/dist/css/bootstrap.min.css';
import orderPlacedLogo from '../../images/OrderPlaced.PNG';
import orderPlacedTruck from '../../images/OrderPlacedTruck.PNG';
import './finalPage.css';
function orderPlaced(props){
	return(
            <div >
                <img id="truck" src={orderPlacedTruck} />
                <img id="congo" src={orderPlacedLogo} />
            </div>
            
	);
}

export default orderPlaced;


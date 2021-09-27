import React from 'react';
import FooterBg from '../images/footerBg.png'
import LinkedIn from '../images/linkedIn.PNG';
import Fb from '../images/fb.PNG';
import Insta from '../images/insta.PNG';
import BellIcon from '../images/bellIcon.PNG';

function footer(props){
	return(
        <div id="footer"  style={{backgroundImage:`url(${FooterBg})`}}>
				<div id="get-in-touch" class="d-flex justify-content-around align-items-center">
					<p>Get in Touch</p>
					<input type="text"/>
				</div>
				<div style={{float:'right'}}>Join our Team<br/>Terms Privacy</div>
				<p id="social-heading">Made With {`<`}3 by Team FuncBox</p>
				<div id="social"><img src={LinkedIn}/><img src={Fb}/><img src={Insta}/></div>
			</div>
		
	);
}

export default footer;



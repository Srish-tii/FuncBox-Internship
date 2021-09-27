import React from 'react';
import Home from '../images/home.png';
import About from '../images/about.PNG';
import Shop from '../images/shop.PNG';
import Login from '../images/login.PNG';
import Logo from '../images/logo.PNG';

function navPage(props){
	return(
        <div class="topnav">
					<a href="" id="left-head">
						<div >
						<nobr><img src={Logo} alt="logo"/> FuncBox</nobr>
						</div>
					</a>
						
						<div class="topnav-right">
							<a href="#search"><img src={Home}/><br/>Home</a>
							<a href="#about"><img src={About}/><br/>About</a>
							<a href="#about"><img src={Shop}/><br/>Shop</a>
							<a href="#about"><img src={Login}/><br/>Login/Signup</a>
						</div>
				</div>
		
	);
}

export default navPage;



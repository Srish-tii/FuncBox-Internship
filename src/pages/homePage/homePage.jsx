import React from 'react';
import './homePage.css';
import '../cartPage/cartPage.css';
import {Route} from 'react-router-dom'
import'bootstrap/dist/css/bootstrap.min.css';

import Cart from '../../images/cart.PNG';
import New from '../../images/new.PNG';
import Cancel from '../../images/cancel.PNG';
import Truck from '../../images/truck.PNG';
import Monster from '../../images/monster.png';
import Luckbox from '../../images/luckbox.png'
import ForSchool from '../../images/forSchool.PNG'
import AngryBird from '../../images/angrybird.PNG';

import Trashcan from '../../images/trashcan.PNG';
import Add from '../../images/add.PNG';

import Nav from '../navPage'
import Intro from './intro.jsx'
import Plan from './plans.jsx';
import FAQ from './faq.jsx';
import Footer from '../footer'

function Project(){
	
	let [over, setOver]=React.useState(true);
    let visible={display:'none'}
    if(over){
        visible.display='none';
    }
    else{
        visible.display="block";
    }
	return(
			<div id="home-page"  >  
				<Nav/>    
				<div id="top" >
        		<br/>

				<div id="cart">&emsp;<img src={Cart}/>&emsp;&emsp;
				{/* <Route render={({ history}) => (
								<button onClick={() => { history.push('/cart') }}>Go to cart</button>)} /> */}
							
				<button onClick={() => { document.querySelector('#cart-page').classList.add('collapsed'); 
				document.querySelector('#home-page').classList.add('collapsed');}}>Go to cart</button></div><br/><br/>
				
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












			    <div onClick={()=> {document.querySelector('#cart-page').classList.remove('collapsed'); document.querySelector('#home-page').classList.remove('collapsed');}}><Intro/></div>
				
				</div >
					<div id="perks" class="d-flex justify-content-around align-items-center">
						<span><img src={Truck}/> Free shipping</span>
						<span><img src={New}/> No experience necessary</span>
						<span><img src={Cancel}/> Cancel anytime</span>
					</div>
					<div id="plans">
						<h2>Plans</h2>
						<br/>
						<div class="d-flex justify-content-around align-items-center">
							<div style={{position:'relative'}}><img id="monster" src={Monster}/></div>
							<Plan color="#F05D6A" title="Basic"/>
							<Plan color="#FFD27B" title="Standard"/>
							<Plan color="#36BFA5" title="Premium"/>	
							<div style={{position:'relative'}}><img id="angrybird" src={AngryBird}/></div>
						</div>
					</div>
					<div id="luck" class="d-flex justify-content-center align-items-center">
						<img src={Luckbox}/>&nbsp; Searching for a one-time gift or corporate? &nbsp;
						<span style={{textDecoration:'underline'}}> You're in luck »</span>
					</div>
					<br/>
					<div id="faq">
						<h2>Frequently Asked Questions</h2>
						<br/>
						<div style={{padding:'2% 8%'}}>
							<FAQ Question="What age is FuncBox for?" Answer="FuncBox is designed for kids 6-12 years in age."/>
							<FAQ Question="What age is FuncBox for?" Answer="FuncBox is designed for kids 6-12 years in age."/>
							<FAQ Question="What age is FuncBox for?" Answer="FuncBox is designed for kids 6-12 years in age."/>
							<FAQ Question="What age is FuncBox for?" Answer="FuncBox is designed for kids 6-12 years in age."/>
							<FAQ Question="What age is FuncBox for?" Answer="FuncBox is designed for kids 6-12 years in age."/>
						</div>
						
					</div>
					<div id="schools">
						<h2>For Schools</h2>
						<br/>
						<div class="row">
							<div class="col-6"><img src={ForSchool} id="school-image"  /></div>
							<div class="col-6 school-content">
								Yay! FuncBox brings special discount for all the School Tie-ups. FuncBox can be easily incorporated in all the school grades. To make your students outperform and help your institute gain an edge over the others contact our team NOW!<br/>
								<a href="">Know More</a>
							</div>
						</div>
					</div>
				<Footer/>			
					
			</div>
			
)}

export default Project;


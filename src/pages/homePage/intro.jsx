import React from 'react';
import ImageOne from '../../images/img1.png';
import Bgcart from '../../images/bgcart.png';

function intro(props){
	return(
        <div class="row" id="middle" >
        <div class="col-4 row-head" >
            <img id="imgone" src={ImageOne} alt="logo"/>
        </div>
        <div id="middle-content" class="col-lg-8 col-xs-12">
            <img src={Bgcart}/>
            <p id="middle-p"> 
              FuncBox is a box full of surprises which will teach you educational concepts and coding with a revolutionary twist.<br/>
              > Perfect for age-group 6-12 years. <br/><br/>
              > Build your own fun games. <br/>
              > Learn to code and explore. <br/>
              > Share your game with your friends.</p>
        </div>
    </div>    
	);
}

export default intro;


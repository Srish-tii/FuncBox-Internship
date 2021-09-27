import React from 'react';

function Plans(props){
    let [over, setOver]=React.useState(true);
    let visible={display:'hidden',height:0,backgroundColor:props.color}
    if(over){
        visible.display='none';
		visible.height='0';
        visible.backgroundColor=props.color;
    }
    else{
		visible.height='280px';
        visible.display="block";
        visible.backgroundColor=props.color;
    }
	return(
        <div class="plan" >
			<div class="d-flex justify-content-around"><div class="plan-name" style={{"background-color":props.color}} onClick={()=>setOver(!over)} >{props.title}</div></div>
			<div class="d-flex justify-content-around"><div class="plan-content" style={visible}>
				<ul>
					<li>FuncBox Binder</li>
					<li>3 mathematical apps</li>
					<li>3 scientific apps</li>
					<li>3 game apps</li>
					<li>Stickers</li>
					<li>Kickstart guide</li>					
                    <li>Interactive website</li>
				</ul>
			</div></div>
            
			<div class="plan-container">
                <br/>
				Monthly a/month<br/><br/>
				Quarterly a/month<br/><br/>
				Half-yearly a/month<br/><br/>
				Yearly a/month
            </div>
		</div>
		
	);
}

export default Plans;
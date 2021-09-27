import React from 'react';

function Faq(props){
	return(
        <div style={{fontSize:'20px'}}>           
			<div style={{fontWeight:'bold', padding:'1% 0'}}>
                {props.Question}
            </div>
            <div>
            {props.Answer}
            </div>
		</div>
		
	);
}

export default Faq;
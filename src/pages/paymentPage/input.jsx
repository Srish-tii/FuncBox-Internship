import React from 'react';

function input(props){
	return(
        <div>
            <label>{props.label}</label><br/>
            <input required type={props.type}/>
        </div>
	);
}

export default input;


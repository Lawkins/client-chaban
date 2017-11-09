import React, { Component } from 'react';
import { Input } from 'react-materialize';
import { Icon } from 'react-materialize';
class SearchInput extends Component {



	handleChange = (event) => {

		const newValue = event.target.value;
		this.props.onInputChange(newValue, this.props.dest);
		
	}
 	render() {

    	return (
      	<div>
			<Input 
        		s={6}             
                type='date'
                options={{
                    format: 'dd-mm-yy', 
                }}
        		onChange={this.handleChange}
        	>
        	<Icon>keyboard_arrow_right</Icon>

        	</Input>
      	</div>
   
    	);
  	}
}

export default SearchInput;

import React, { Component } from 'react';
import { Row, Col, Button } from 'react-materialize'
import SearchInput from './search-input';
class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputFromFilled: null,
      inputFromValue: "",
      inputToFilled: null,
      inputToValue: "",
    }
  }

	 parseDate = (str) => {
	  var m = str.match(/^(\d{1,2})-(\d{1,2})-(\d{2})$/);
	  return (m) ? true : false;
	}

	handleChange = (newValue,dest) => {

		var date = this.parseDate(newValue);
		if (newValue.length === 8 && date){
			if (dest === "from"){

				this.setState({
	        		inputFromFilled: true,
	        		inputFromValue: newValue,
	        	}, function () {
   
				});
	        	
			}
			if (dest === "to"){
				this.setState({
	        		inputToFilled: true,
	        		inputToValue: newValue,
	        	});
			}
			this.setState({

	        }, function () {
   				this.props.onInputChange(this.state.inputFromFilled, this.state.inputToFilled, 
				this.state.inputFromValue, this.state.inputToValue);
			});

		}else if (newValue.length === 0){
			if (dest === "from"){
				this.setState({
	        		inputFromFilled: false,
	        		inputFromValue: "",
	        	});
			}
			if (dest === "to"){
				this.setState({
	        		inputToFilled: false,
	        		inputToValue: "",
	        	});
			}
			this.setState({

	        }, function () {
   				this.props.onInputChange(this.state.inputFromFilled, this.state.inputToFilled, 
				this.state.inputFromValue, this.state.inputToValue);
			});
		}
			
			
	}
	render() {

	    return (
	      <div>
	      	<form>
	      		<Row>
                <Col s={8} offset='m2'>
                  <Row>
                    <Col s={7} offset='m2'>
                      	<SearchInput dest="from" onInputChange={this.handleChange} />
	      				<SearchInput dest="to" onInputChange={this.handleChange} />

                    </Col>
                    <Col s={1}>
                      <Button floating large className='red' waves='light' icon='close' onClick={this.clearSearch}/>
                    </Col>
                  </Row>
                </Col>
            </Row>
	      	</form>
	      </div>
	   
	    );
  	}

}

export default Search;

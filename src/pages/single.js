import React, { Component } from 'react';
import Header from './../components/header';
import Details from './../components/details';
import { ProgressBar } from 'react-materialize';
class SinglePage extends Component {

	constructor(props) {
    	super(props);

	    this.state = {
	      data: null,
	    }
  	}

	componentDidMount() {
	 	console.log(this.props)
    	// Get data from API
	    fetch('http://localhost:1337/'+this.props.match.params.id)
	      // parse response
	      .then((res) => {
	       
	        if(res.ok){

	         return res.json();

	        }else{
	        	let errorMessage;
	        	switch(res.status){

		            case 500:
		              	errorMessage = "Le serveur a rencontré une erreur";
		              	break;
		            case 400:
		              	errorMessage = "La requete a échoué car les paramètres ne sont pas valides";
		             	break;
		            case 404: 
		            	errorMessage ="La requete a échoué car les paramètres sont valides mais rien n'a été trouvé";
		              	break;
		             default: 
		            	errorMessage ="Le serveur a rencontré une erreur";
		              	break;
	         	}
	         	throw new Error(errorMessage);
	        }   
	      })
	      .then((json) => { 
	       
	        this.setState({
	          data: json,
	        });
	      
	      }).catch((error) => {
	          alert(error);
	      });
	}

  render() {

  	 const { data } = this.state;

    return (
      <div>
       
              {!data ? (
          <ProgressBar />
        ) : (
          <div>
          <Header id={data.id}/>
           <Details data={data} />
          </div>
        )}

      
     	
      </div>
    );
  }

}

export default SinglePage;

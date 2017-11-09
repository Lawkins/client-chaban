import React, { Component } from 'react';

class Details extends Component {


  render() {

    return (

   	<div class="row">
        <div class="col s12 m6">
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <span class="card-title">Information </span>
                   
		  		<p> Date de la fermeture : {this.props.data.date} </p>
		  		<p> De : {this.props.data.start} </p>
		  		<p>Jusqu'à  : {this.props.data.end} </p>
		  		<p> Raison de la fermeture : {this.props.data.reason} </p>
		  	
            </div>
            <div class="card-action">
              	<a class="waves-effect waves-light btn" href={this.props.data.link} target="_blank"> Site de Bordeaux </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default Details;

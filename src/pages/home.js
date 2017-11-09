import React, { Component } from 'react';
import List from './../components/list';
import Search from './../components/search';
import { ProgressBar } from 'react-materialize';

class HomePage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: null,
    }
  }

  componentDidMount() {
    console.log("Entré componentDidMount");
    // Get data from API
    fetch('http://localhost:1337')
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




    handleChange = (inputFromFilled,inputToFilled,inputFromValue,inputToValue) => {
          this.setState({
            data: null,
          });
      let destination = "http://localhost:1337/";

      if(inputFromFilled && !inputToFilled){
        destination += "?from="+inputFromValue;
      }else if (inputToFilled && !inputFromFilled){
         destination += "?to="+inputToValue;
      }else if (inputToFilled && inputToFilled){
         destination += "?from="+inputFromValue+ "&to="+inputToValue;
      }
       console.log("destin !", destination);
          // Get data from API
      
      fetch(destination)
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
    console.info("data",data);
    return (
      <div>

        <h2> HomePage </h2>
        <Search onInputChange={this.handleChange}/>

        {!data ? (
          <ProgressBar />
        ) : (
          <div>

        {data.length === 0 &&
          <h4>
            Aucun résultat trouvé 
          </h4>
        }
            <List data={data} />
          </div>
        )}


      </div>
    );
  }

}

export default HomePage;

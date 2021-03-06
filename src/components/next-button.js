import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import { Button } from 'react-materialize';
import { Icon } from 'react-materialize';

class NextButton extends Component {

  

  render() {
     const  data = this.props.id;
    return (
      <div>
         <Button 
                      waves='light' 
                      node='a' 
                      href={`${data + 1}`}
                    >
                      <Icon right>keyboard_arrow_right</Icon> 
                      Suivant
        </Button>
      </div>
    );
  }

}

export default NextButton;

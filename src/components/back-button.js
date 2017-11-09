import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import { Button } from 'react-materialize';
import { Icon } from 'react-materialize';


class BackButton extends Component {

  

  render() {
    return (
      <div>

        <Button 
          waves='light' 
          node='a' 
          href={`/`}
                    >
          <Icon right>keyboard_arrow_left</Icon> 
          Retour à l'accueil
        </Button>
      </div>
    );
  }

}

export default BackButton;

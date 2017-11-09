import React, { Component } from 'react';
import { Link} from 'react-router-dom'

class BackButton extends Component {

  

  render() {
    return (
      <div>
      	<button>
      	 <Link
          to={`/`}
        >
         Retour
        </Link>


      	</button>
      </div>
    );
  }

}

export default BackButton;

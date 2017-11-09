import React, { Component } from 'react';
import { Link} from 'react-router-dom'

class NextButton extends Component {

  

  render() {
     const  data = this.props.id+1;
     console.log("data",data);
    return (
      <div>
      	<button>
      	 <Link
          to={`/${data}`}
        >
         Suivant
        </Link>


      	</button>
      </div>
    );
  }

}

export default NextButton;

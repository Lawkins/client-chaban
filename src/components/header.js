import React, { Component } from 'react';
import BackButton from './back-button';
import NextButton from './next-button';
class Header extends Component {

  static propTypes = {
   
  }

  render() {
  	console.info("yo", this.props.id)
    return (
      <div>
          <BackButton />
          <NextButton id={this.props.id}/>
      </div>
    );
  }

}

export default Header;

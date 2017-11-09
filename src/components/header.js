import React, { Component } from 'react';
import BackButton from './back-button';
import NextButton from './next-button';
import PrevButton from './prev-button';
class Header extends Component {

  static propTypes = {
   
  }

  render() {
    return (
      <div>
          <BackButton />
          <NextButton id={this.props.id}/>
          <PrevButton id={this.props.id}/>
      </div>
    );
  }

}

export default Header;

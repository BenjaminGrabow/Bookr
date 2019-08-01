import React from 'react';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div className="navigation">
       <input 
       type="checkbox"
        className="navigation__checkbox"
      id="navi-toggle"/>

      <label className="navigation__button" htmlFor="navi-toggle" >MENU</label>

      <div className="navigation__background">&nbsp;</div>

      <nav className="navigation__nav">

        <ul className="navigation__list">
          <li className="navigation__item">
            <input
             className="navigation__input"/></li>

<li className="navigation__item">
            <input
             className="navigation__input"/></li>

<li className="navigation__item">
            <input
             className="navigation__input"/></li>

<li className="navigation__item">
            <input
             className="navigation__input"/></li>

<li className="navigation__item">
            <input
             className="navigation__input"/></li>
        </ul>
      </nav>
      </div>
     );
  }
}
 
export default Navigation;
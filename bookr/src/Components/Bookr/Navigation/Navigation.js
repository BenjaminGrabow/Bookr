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

      <label className="navigation__button" for="navi-toggle" >MENU</label>

      <div className="navigation__background">&nbsp;</div>

      <nav className="navigation__nav">

        <ul className="navigation__list">
          <li className="navigation__item">
            <a href="#"
             className="navigation__link"><span>1</span>About Natours</a></li>

<li className="navigation__item">
            <a href="#"
             className="navigation__link"><span>2</span>Your benefits</a></li>

<li className="navigation__item">
            <a href="#"
             className="navigation__link"><span>3</span>Popular tours</a></li>

<li className="navigation__item">
            <a href="#"
             className="navigation__link"><span>4</span>Stories</a></li>

<li className="navigation__item">
            <a href="#"
             className="navigation__link"><span>5</span>Book now</a></li>
        </ul>
      </nav>
      </div>
     );
  }
}
 
export default Navigation;
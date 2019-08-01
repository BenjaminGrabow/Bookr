import React from 'react';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div className="navigation">
        <input
          type="checkbox"
          className="navigation__checkbox"
          id="navi-toggle" />

        <label className="navigation__button" htmlFor="navi-toggle" >MENU</label>

        <div className="navigation__background">&nbsp;</div>

        <nav className="navigation__nav">

          <ul className="navigation__list">
            <li className="navigation__item">
              <input
                type="text"
                value={this.state.title}
                onChange={this.changeHandler}
                name="title"
                className="navigation__input" /></li>

            <li className="navigation__item">
              <input
                type="text"
                value={this.state.publisher}
                onChange={this.changeHandler}
                name="publisher"
                className="navigation__input" /></li>

            <li className="navigation__item">
              <input
                type="text"
                value={this.state.author}
                onChange={this.changeHandler}
                name="author"
                className="navigation__input" /></li>

            <li className="navigation__item">
              <input
                type="text"
                value={this.state.description}
                onChange={this.changeHandler}
                name="description"
                className="navigation__input" /></li>

            <li className="navigation__item">
              <input
                type="text"
                value={this.state.photo}
                onChange={this.changeHandler}
                name="photo"
                className="navigation__input" /></li>

            <li className="navigation__item">
              <input
                type="number"
                value={this.state.price}
                onChange={this.changeHandler}
                name="price"
                className="navigation__input" /></li>

            <div className="crud-icons">
              <i
                onClick={this.deleteBook}
                className="fa fa-user-times btn btn--white" />
              <i
                onClick={this.updateBook}
                className="fa fa-wrench btn btn--white" />
              <i
                onClick={this.addBook}
                className="fa fa-plus-circle btn btn--white" />
            </div>


          </ul>
        </nav>
      </div>
    );
  }
}

export default Navigation;
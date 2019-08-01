import React from 'react';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      publisher: '',
      author: '',
      description: '',
      photo: '',
      price: ''
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  delPostPutBook = e => {
  if(e.target.className === "fa fa-user-times btn btn--white"){
console.log('delete')

  } else if(e.target.className === "fa fa-wrench btn btn--white") {
    console.log('put')
  } else { 
    console.log('add')
  }
  };

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
              placeholder="Title"
                type="text"
                value={this.state.title}
                onChange={this.handleChange}
                name="title"
                className="navigation__input" /></li>

            <li className="navigation__item">
              <input
              placeholder="Publisher"
                type="text"
                value={this.state.publisher}
                onChange={this.handleChange}
                name="publisher"
                className="navigation__input" /></li>

            <li className="navigation__item">
              <input
              placeholder="Author"
                type="text"
                value={this.state.author}
                onChange={this.handleChange}
                name="author"
                className="navigation__input" /></li>

            <li className="navigation__item">
              <input
              placeholder="Description"
                type="text"
                value={this.state.description}
                onChange={this.handleChange}
                name="description"
                className="navigation__input" /></li>

            <li className="navigation__item">
              <input
              placeholder="Photo"
                type="text"
                value={this.state.photo}
                onChange={this.handleChange}
                name="photo"
                className="navigation__input" /></li>

            <li className="navigation__item">
              <input
              placeholder="Price"
                type="number"
                value={this.state.price}
                onChange={this.handleChange}
                name="price"
                className="navigation__input" /></li>

            <div className="crud-icons">
              <i
                onClick={this.delPostPutBook}
                className="fa fa-user-times btn btn--white" />
              <i
                onClick={this.delPostPutBook}
                className="fa fa-wrench btn btn--white" />
              <i
                onClick={this.delPostPutBook}
                className="fa fa-plus-circle btn btn--white" />
            </div>


          </ul>
        </nav>
      </div>
    );
  }
}

export default Navigation;
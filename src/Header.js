import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchVisible: false
    }
  }

  showSearch() {
    this.setState({
      searchVisible: !this.state.searchVisible
    })
  }

  render() {
    let searchInputClasses = ["searchInput"];

    if (this.state.searchVisible) {
      searchInputClasses.push("active");
    }
    return (
      <div className="header">
        <MenuButton />

        <span className="title">
          {this.props.title}
        </span>

        <input
          type="text"
          className={searchInputClasses.join(' ')}
          placeholder="Search ..." />

          <div
            onClick={this.showSearch.bind(this)}
            className="fa fa-search searchIcon"></div>
      </div>
    )
  }
}

const MenuButton = (props) => (
  <div className="menuIcon">
    <div className="dashTop"></div>
    <div className="dashBottom"></div>
    <div className="circle"></div>
  </div>
)

export default Header
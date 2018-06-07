import React, { Component } from 'react';
import SearchButton from '../CustomComponents/SearchButton';
import SearchInput from '../CustomComponents/SearchInput';

class SearchFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: 'london',
      searchTerm: '',
    };
  }

  render() {
    return (
      <form className="form-inline" onSubmit={this.props.handleSubmit}>
        <SearchInput
          placeholder="Search"
          content={this.props.city}
          controlFunc={this.props.handleCityChange}
          styleCSS="form-control mr-sm-2"
        />
        <SearchButton
          styleCss="btn btn-outline-success my-2 my-sm-0 "
          type="submit"
          title="Search"
          name="searchBtn"
          value="Submit"
        />
      </form>
    );
  }
}

export default SearchFormContainer;

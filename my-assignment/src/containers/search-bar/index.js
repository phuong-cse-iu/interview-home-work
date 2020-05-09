import React from 'react';
import { connect } from 'react-redux';
import { Input, InputGroup } from 'reactstrap';
import {searchPost} from '../../actions/post';

const SearchBar = ({searchPost, ...props}) => {
  const handleChange = e => {
    searchPost(e.target.value);
  };

  return (
    <InputGroup>
      <Input {...props} onChange={handleChange} />
    </InputGroup>
  );
};

const mapDispatchToProps = dispatch => ({
    searchPost: (name) => dispatch(searchPost(name)),
});

const mapStateToProps = () => ({

});

export default connect(null, mapDispatchToProps)(SearchBar);
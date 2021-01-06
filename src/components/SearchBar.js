import React from 'react';
import SearchBar from 'material-ui-search-bar';
import styled from '@emotion/styled';

//Styles
const H1 = styled.div`
  text-align: center;
  font-size: 32px;
  font-weight: bold;
  margin-top: 15px;
  margin-bottom: 15px;
`;

const SearchWrap = styled.div`
  width: 70%;
  margin: 0 auto;
`;

const Search = () => {
  return (
    <>
      <H1>Menu</H1>
      <SearchWrap>
        <SearchBar />
      </SearchWrap>
    </>
  );
};

export default Search;

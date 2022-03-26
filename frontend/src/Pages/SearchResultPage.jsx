import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import styled from "styled-components";
import Navbar from "../Components/Navbar";
import ResultantSchools from "../Components/ResultantSchools";
import { GETALLSCHOOLS, publicRequest } from "../requestMethod";

const Container = styled.div`
  background-color: #bcdfff;
  overflow-y: auto;
  height: 100vh;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const ResultsTitle = styled.h1`
  margin: 20px 0;
`;

const ResultsContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
`;

const SearchResultPage = () => {
  const [allSchools, setAllSchools] = useState([]);
  const searchQ = useSelector((state) => state.searchQ.value);

  useEffect(() => {}, [searchQ]);

  useEffect(async () => {
    try {
      const res = await publicRequest.get(GETALLSCHOOLS);
      console.log(res.data.schools);
      setAllSchools(res.data.schools);
    } catch (err) {
      console.log(err);
    }
  }, [searchQ]);
  // console.log(searchQ);
  return (
    <Container>
      <Navbar />
      <Wrapper>
        <ResultsTitle>Results</ResultsTitle>
        <ResultsContainer>
          <ResultantSchools query={searchQ} allSchools={allSchools} />
        </ResultsContainer>
      </Wrapper>
    </Container>
  );
};

export default SearchResultPage;

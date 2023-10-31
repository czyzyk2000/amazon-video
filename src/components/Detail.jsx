import React from "react";
import styled from "styled-components";
import Header from "./Header";

function Detail() {
  return (
    <Content>
      <Header />
      <Container>Detail</Container>
    </Content>
  );
}

export default Detail;

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Content = styled.div``;

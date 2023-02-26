import React from "react";

import styled from "styled-components";

const Error = () => {
  return (
    <ErrorWrapper id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
    </ErrorWrapper>
  );
};

const ErrorWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export default Error;

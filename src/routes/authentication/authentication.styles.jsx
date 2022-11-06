import styled from "styled-components";

export const AuthenticationContainer = styled.div`
  display: flex;
  width: 50rem;
  justify-content: space-between;
  margin: 2rem auto;

  @media (max-width: 53rem) {
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 3rem;
  }
`;

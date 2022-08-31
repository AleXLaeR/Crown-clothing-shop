import styled from "styled-components";

export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 40px;
`

export const CategoryName = styled.span`
  font-weight: bold;
  font-size: 2rem;
  display: flex;
  justify-content: center;
`

import styled from "styled-components";
import Button from "../button/button.component";

export const PaymentFormContainer = styled.div`
  margin-top: 50px;
  height: 200px;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  border-radius: 6px;
  box-shadow: 1px 1px 1px 1px,
  1px 1px 1px rgba(0, 0, 0, .5);
`

export const FormContainer = styled.form`
  margin-top: -80px; 
  height: 100px;
  min-width: 500px;
`

export const PaymentButton = styled(Button)`
  margin-left: auto;
  margin-top: 2rem;
`

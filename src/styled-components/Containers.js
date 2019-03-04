import styled from 'styled-components';

export const CalculatorContainer = styled.div`
  border: 1px solid black;
`;

export const AppContainer = styled.div`
  max-width: 240px;
  margin: 0 auto;
  position: relative;
  margin-top: 250px;
`;

export const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

export const ResultContainer = styled.div`
  border: 1px solid black;
  background-color: #fff;
  padding: 10px;
`;

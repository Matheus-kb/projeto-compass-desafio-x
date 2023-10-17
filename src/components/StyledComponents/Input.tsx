import styled from 'styled-components';

const Input = styled.input`
  width: 100%;
  background-color: var(--input-background-color);
  padding: 12px 16px;
  border-radius: 8px;

  &::placeholder {
    font-size: 14px;
    color: var(--placeholder-color);
  }

  @media (min-width: 1200px) and (max-width: 1439px) {
    width: 22.5vw;
  } 

  @media (min-width: 1440px){
    width: 16.5vw;
  }  
`; 

export default Input;

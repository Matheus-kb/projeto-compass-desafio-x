import styled from 'styled-components';

const ButtonCreate = styled.button`
  width: 100%;
  background-color: var(--primary-color);
  color: #fff;
  font-size: 0.875rem;
  padding: 11px 16px;
  border-radius: 8px;
  text-align: center;

  &:hover {
    cursor: pointer;
  }

  @media (min-width: 1200px) {
    width: 17.5vw;
    font-size: 1.125rem;
  }
`;

export default ButtonCreate;

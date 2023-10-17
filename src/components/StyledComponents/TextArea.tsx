import styled from "styled-components";

const TextArea = styled.textarea`
  width: 100%;
  background-color: var(--input-background-color);
  padding: 24px 32px;
  border-radius: 8px;
  resize: none;

  &::placeholder {
    font-size: 14px;
    color: var(--placeholder-color);
  }

  @media (min-width: 1200px) and (max-width: 1439px) {
    width: 6.9vw;
    height: 1.5vh;
    text-align: center;
  }

  @media (min-width: 1440px) {
    width: 5vw;
    height: 1.5vh;
    text-align: center;
  }
`;

export default TextArea;

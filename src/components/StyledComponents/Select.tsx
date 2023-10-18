import React, { useState } from 'react';
import styled from 'styled-components';

const StyledSelect = styled.div`
  width: 100%;
  height: 35px;
  background-color: #eff3f8;
  border: none;
  border-radius: 8px;
  color: #868686;
  font-family: Roboto Flex;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 7px;
  cursor: pointer;
  position: relative;
  z-index: 1;
  max-width: 75.28vw;
  &:hover {
    background-color: #dce1e8;
  }

  @media (min-width: 768px) {
    font-size: 16px;
    max-width: 69.01vw;
  }
  @media (min-width: 1200px) {
    max-width: 215px;
  }
  @media (min-width: 1440px) {
    max-width: 265px;
    height: 4.74vh;
  }
`;

const StyledDiv = styled.div`
  width: 100%;
  position: relative;
  @media (min-width: 1200px) and (max-width: 1439px) {
    width: 11.6vw;
  }

  @media (min-width: 1200px) {
    width: 18.6vw;
  }
  @media (min-width: 1440px) {
    width: 14.2vw;
  }
`;

const StyledOption = styled.div`
  font-size: 14px;
  color: #8d8d8d;
  padding: 8px 0px;
  cursor: pointer;
  &:hover {
    background-color: #dce1e8;
  }
  &:not(:last-child) {
    border-bottom: 1px solid #ed6d25;
  }

  @media (min-width: 1200px) {
    font-size: 16px;
  }
`;

const StyledOptions = styled.div`
  width: 100%;
  position: absolute;
  top: 100%;
  left: 0;
  border: 1px solid #dce1e8;
  border-radius: 0px 0px 6px 6px;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  padding: 16px 9px;
  overflow-y: auto;
  z-index: 2;
`;

const StyledSpan = styled.span`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 7px;
`;

export default function Select() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Relacionamento');

  const options = [
    'Solteiro',
    'Casado',
    'Divorciado',
    'Namorando',
    'Preocupado'
  ];

  const handleOptions = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: React.SetStateAction<string>) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <StyledDiv>
      <StyledSelect onClick={handleOptions}>
        {selectedOption}
        <StyledSpan>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
          >
            <path
              d="M17.0625 7.86771L10.5 14.4241L3.9375 7.86771"
              stroke="#ED6D25"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </StyledSpan>
      </StyledSelect>

      {isOpen && (
        <StyledOptions>
          {options.map((option, index) => (
            <StyledOption
              key={option}
              onClick={() => handleOptionClick(option)}
              style={{
                borderBottom:
                  index === options.length - 1 ? 'none' : '1px solid #ed6d25'
              }}
            >
              {option}
            </StyledOption>
          ))}
        </StyledOptions>
      )}
    </StyledDiv>
  );
}

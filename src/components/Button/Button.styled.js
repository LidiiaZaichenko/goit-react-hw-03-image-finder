import styled from 'styled-components';

export const LoadmoreButton = styled.button`
  width: 160px;
  height: 40px;
  margin-top: 10px;
  margin-bottom: 30px;
  margin-left: 50%;
  transform: translateX(-50%);
  font-size: 16px;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  color: #fff;
  background-color: #3f51b5;

  &:hover,
  &:focus {
    background-color: #303f9f;
  }
`;

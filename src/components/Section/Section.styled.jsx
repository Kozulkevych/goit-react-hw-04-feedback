import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 32px;
  gap: 20px;
  width: fit-content;
  margin: auto;
  color: #010101;
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 38px;
  line-height: 1.35;
  text-align: center;
  margin-bottom: 0.6em;
`;

export const Text = styled.span`
  position: relative;
  &::after {
    content: '';
    position: absolute;
    left: -0.5em;
    right: -0.5em;
    bottom: -0.3em;
    height: 1.8px;
    background-color: currentColor;
  }
`;

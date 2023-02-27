import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  color: #010101;
  padding: 40px;
`;

export const TitleH1 = styled.h1`
  font-weight: 800;
  font-size: 38px;
  line-height: 1.35;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 0.6em;
`;
export const Span = styled.span`
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
export const TitleH2 = styled.h2`
  font-weight: 700;
  font-size: 38px;
  line-height: 1.35;
  text-align: center;
  margin-bottom: 0.6em;
`;

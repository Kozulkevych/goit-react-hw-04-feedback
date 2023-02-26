import styled from 'styled-components';

export const StatList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 0;
`;

export const StatItem = styled.li`
  margin-bottom: 10px;
  align-items: left;
  display: flex;
  align-items: center;
  & > svg {
    margin-right: 8px;
    fill: #dfdf0af4;
    height: 30px;
    width: 30px;
  }
`;
export const StatText = styled.p`
  font-size: 32px;
  margin: 0;
`;
export const Value = styled.span`
  font-weight: bold;
  color: #20241e;
`;
export const StatItemFeedback = styled.p`
  font-weight: bold;
  color: #20241e;
`;
export const ValueFedback = styled.span`
  font-weight: bold;
  color: #07830f;
`;

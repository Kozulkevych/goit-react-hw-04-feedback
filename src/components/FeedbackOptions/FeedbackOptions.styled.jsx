import styled from 'styled-components';

export const ButtonList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;
export const Button = styled.button`
  display: flex;
  justify-content: center;
  text-align: center;
  margin-right: 30px;
  width: 200px;
  border-radius: 20px;
  border: none;
  padding: 20px;
  color: white;
  text-transform: uppercase;
  font-size: 30px;
  font-weight: 700;
  transform: scale(1);
  transition: transform 250ms;
  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
    rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
    rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px,
    rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px,
    rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
  cursor: pointer;
  background-color: ${props =>
    props.bgcolor === 'good'
      ? 'rgba(0, 128, 75, 0.7)'
      : props.bgcolor === 'neutral'
      ? 'rgba(224, 201, 50, 0.6)'
      : 'rgba(202, 30, 30, 0.6)'};

  &:hover {
    transform: scale(1.2);
  }
`;

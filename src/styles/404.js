import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  padding: 60px 0; 

  a {
    justify-content:space-around;
    text-decoration: none;
    font-weight: bold;
    color: #0e0;
    border-radius: 4px;
    transition: background 1s;

    &:hover{
      background: #fff;
      color: ${darken(0.3, '#0F0')};
    }
  } 
`;

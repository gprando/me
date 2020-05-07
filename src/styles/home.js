import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  padding: 20px 0;

  .imagem {
    padding: 10px 0;

    img {
      padding: 4px 0;
      width: 300px;
      height: 300px;
      border-radius: 50%;
      border: 2px solid ${darken(0.03, '#5daa2f')};

      &:hover{
        cursor: pointer;
        width: 320px;
        height: 320px;
      }
    }

    
  }

  .info-pessoal {
    span {
      padding-top: 10px;
      display: flex;
      align-items: center;
      a {
        padding-left: 4px;
        text-decoration: none;
        color: #5daa2f;
      }
    }
  }

  .links {
    padding: 20px 0;
   a {
     padding: 0 10px;
     justify-content: space-between;
     align-self: center;

    &:hover {
      padding-top: 18px;
      width: 36px;
      height: 36px;
      border-radius: 50%;
      background: ${darken(-0.3, '#5daa2f')};
      transition: background 0.2s;
    }

  } 
  }
  

  
`;

import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  background: #000;
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 66px;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
   padding-top: 10px;
    span {
      display: flex;
      flex-direction: column;
      font-size: 16px;
      font-weight: bold;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
    a { 
    text-decoration:none;
    color: #00e868;
    font-weight: bold;
  }
  }

  img {
    height: 48px;
  }

  aside {
    display: flex;
    align-items: center;
  }

  @media (max-width: 500px) {
  nav {
    span {
      font-size: 10px;
    }
  }
  }

  @media (max-width: 400px) {
  nav {
    span {
      font-size: 8px;
    }
  }
  }
`;

export const Links = styled.div`
  button {
    background-color: transparent;
    border: 0;
  }

  a {
    text-decoration: none;
    padding: 10px 15px;
    font-size: 30px;
    font-weight: bold;
    margin-top: 2px;
    font-size: 12px;
    color: #00e868;
    transition: background 0.2s;

    &:hover {
      border-radius: 4px;
      background: ${darken(-0.2, '#5daa2f')};
      color: #000;
    }

    &:active {
      color: #fff;
    }
    
  }
`;

export const Foot = styled.footer`

  display: flex;
  justify-content:center;
  position: relative;
  bottom: 0;
  margin: 0 auto;
  color: #fff;

  a {
    padding-left: 10px;
    text-decoration: none;
    color: #00e868;
  }
`;
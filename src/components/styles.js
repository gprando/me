import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  background: #444;
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
    a { 
    text-decoration:none;
    color: #5daa2f;
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
    color: #5daa2f;
    transition: background 0.2s;

    &:hover {
      border-radius: 4px;
      background: ${darken(-0.2, '#5daa2f')};
      color: #000;
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
    color: #5daa2f;
  }
`;
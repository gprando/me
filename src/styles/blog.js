import styled from 'styled-components';

export const Container = styled.div`
  background: #222;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  max-width: 900px;
  justify-content: space-between;
  /* menor que tanto eele vira flex: collun */

  h1 {
    padding: 30px;
    color: #4ac959;
  }

  a {
    color: #000;
    text-decoration: none;
  }
  
  .post {
    display: flex;
    flex-direction: column;
    height: 80px;
    width: 500px;
    background: #555;
    margin: 20px;
    border-radius: 5px;
    transition: background 0.2s;  
    background: #FFF;
    border: 2px solid #4ac959;

    &:hover {
      background: #4ac959;
    }
    
    span {
      height: 100%;
      padding: 8px;
      font-weight: bold;
      font-size: 20px;
      color: #000;

    }
  
    span + span {
      font-weight: normal;
      font-size: 12px;
      
    }
  }
  
`;



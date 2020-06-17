import styled from 'styled-components';

export const Container = styled.div`
  background: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  max-width: 900px;
  justify-content: space-between;

  h1 {
    padding: 30px;
    color: #4ac959;
  }

  a {
    color: #000;
    text-decoration: none;
  }
  
  .infos {
    display: flex;
    flex-direction: column;
    color: #FFF;
    padding-bottom: 30px;

  }

  .post {
    display: flex;
    flex-direction: column;
    min-height: 80px;
    width: 500px;
    background: #000;
    margin: 20px;
    border-radius: 5px;
    transition: background 0.35s ;  
    background: #FFF;
    border: 2px solid #4ac959;

    &:hover {
      background: #4ac959;

      span:last-child {
        opacity: 1;
      }
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

    span:last-child {
        opacity: 0;
      }    
  }
  

  @media (max-width: 600px){
    max-width: 550px;

    .post {
      min-height: 80px;
      width: 350px;
    }
  } 

`;



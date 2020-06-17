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
  
  .items-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
    list-style: none;
    img {
      width: 100px;
      height: 50px;
    }
    span { 
      color: #fff;
      font-size: 16px;
    }
}

.items-grid li {
  background: #152015;
  border: 2px solid #0D4BFF;
  height: 220px;
  width: 300px;
  border-radius: 8px;
  padding: 32px 24px 16px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  transition: border background 0.2s;
  cursor: pointer;

  &:hover {
    border: 5px solid #5D4BFF;
    background: #000;
  }

}

.items-grid li span {
  flex: 1;
  margin-top: 12px;
  display: flex;
  align-items: center;
  color: #4ac959;
  font-size: 20px;
  font-weight: bold;
}

.items-grid li span + span {
  flex: 1;
  margin-top: 12px;
  display: flex;
  align-items: center;
  color: #fff;
  font-size: 12px;
  font-weight: 400
}

  .post {
    display: flex;
    flex-direction: column;
    
  }
  @media (max-width: 1050px){
    max-width: 550px;
    .items-grid {
      grid-template-columns: repeat(2, 1fr);
    }

    .post {
      min-height: 80px;
      width: 350px;
    }
  } 

  @media (max-width: 700px){
    .items-grid {
      grid-template-columns: repeat(1, 1fr);
      width: 400px;
    }

    .post {
      min-height: 80px;
      width: 350px;
    }
  } 

  @media (max-width: 400px){
    .items-grid {
      grid-template-columns: repeat(1, 1fr);
      width: 400px;
      padding: 40px;
    }

    .items-grid li {
      width: 200;
    }

    .post {
      min-height: 80px;
      width: 350px;
    }
  }
`;



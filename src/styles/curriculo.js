import styled from 'styled-components';

export const Container = styled.div`
  color: #fff;
  font-family: "Cousine", serif;
  display:flex;
  flex-direction: column;

  span {
    margin-left: 200px;
  }

  ul {
    padding-left: 200px;
    
    li {
      list-style:  lower-greek;
      color: #aaa;
    }
   
  }


  h1 {
    align-self: center;
    padding-bottom: 20px;
    align-items: center;
    justify-content: space-between;
  }

  h1:first-child {
    align-self: center;
    padding-top: 40px;
  }

  span {
    padding: 0 0 20px 35px;
  }
 
`;

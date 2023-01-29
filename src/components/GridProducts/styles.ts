import styled from "styled-components";


export const Grid = styled.div`

display: flex;
flex-direction: column;
justify-content: center;
align-items: center; 
padding: 5rem 0 0;

`;

export const Gallery = styled.div`

  display: grid;
  flex-wrap: wrap;
  grid-column-gap: 50px;
  grid-row-gap: 50px;
  grid-template-columns: repeat(4, 1fr);
  margin: 0 0 6rem;

  @media screen and (max-width: 1200px) {
    
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 837px) {
    
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 550px) {
    
    grid-template-columns: repeat(1, 1fr);
  }
`
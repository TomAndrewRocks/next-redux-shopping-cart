import styled from "styled-components";

export const HeaderStyles = styled.header`
  height: 88px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0.2rem 3rem 0;
  color: #fff;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const HeaderItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  border: 1px solid transparent;
  background-color: transparent;
  padding: 2px;
  transition: 0.15s ease-out;
`;

export const MKSSystems = styled.div`
  letter-spacing: 2px;
  color: ${({theme}) => theme.colors.secondary};
  strong {
    font-weight: 600;
    font-size: 40px;
  }
  span {
    margin-left: 5px;
    font-weight: 200;
    font-size: 20px;
    letter-spacing: 0.5px;

    @media screen and (max-width: 550px) {
      display: flex;
      flex-direction: column;
    }
  }
`;

export const CartContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 90px;
  height: 45px;
  color: ${({ theme }) => theme.colors.text};
  border-radius: 8px;
  
  span {
    font-weight: 800;
    font-size: 18px;
  }
`;
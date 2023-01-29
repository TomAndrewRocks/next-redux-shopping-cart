import styled from "styled-components";

export const Prod = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  height: 285px;
  width: 217.5px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px 120px;
  border-radius: 8px;
  text-decoration: none;
  color: ${({theme}) => theme.colors.text};
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
`;

export const ImageContainer = styled.div``;

export const Info = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  width: 220px;
`;

export const Description = styled.div`
  width: 215px;
  font-size: 10px;
`;

export const Buy = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-evenly;
  position: absolute;
  bottom: 0;
  top: 10px;
  padding: 0px 50px;
  cursor: pointer;
  width: 240px;
  height: 32px;
  border-radius: 0px 0px 8px 8px;
  position: relative;
  background-color: ${({ theme }) => theme.colors.primary};

  span {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.secondary};
    font-weight: 500;
  }
`;

export const Title = styled.h3`
  font-weight: 400;
  font-size: 16px;
  width: 130px;
`;

export const Price = styled.h3`
  background: ${({ theme }) => theme.colors.price};
  color: ${({ theme }) => theme.colors.secondary};
  width: 64px;
  height: 26px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
`;

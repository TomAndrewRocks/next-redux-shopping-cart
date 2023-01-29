import styled from "styled-components";

export const Product = styled.div``;

export const ProductArea = styled.div`
  height: 82vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;
export const Title = styled.h2`
  color: #000;
`;

export const ImgContainer = styled.div``;
export const Description = styled.span``;
export const Price = styled.span`
  margin-top: 16px;
`;
export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 35%;
  gap: 15px;
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
  border-radius: 8px;
  position: relative;
  background-color: ${({ theme }) => theme.colors.primary};

  span {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.secondary};
    font-weight: 500;
  }
`;

export const FinalStep = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;

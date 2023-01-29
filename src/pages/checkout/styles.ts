import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;

  h2 {
    margin-top: 30px;
  }
`;

export const Payment = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  gap: 10px;
  margin: 30px 0;
`;

export const CheckoutInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
`;

export const CartItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
  border-radius: 10px;
  width: 400px;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }

  @media screen and (max-width: 768px) {
    width: 300px;
  }

  @media screen and (max-width: 414px) {
    width: 250px;
  }
`;

export const SubTotal = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px;
`;
export const Title = styled.span`
  font-weight: 600;
`;
export const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
text-align: center;
`;
export const Price = styled.span`
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
export const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2px;

  @media screen and (max-width: 1024px) {
    flex-direction: row;
    gap: 10px;
    margin-top: 10px;
  }
`;
export const Qty = styled.div`
display: flex;
flex-direction: column;
text-align: center;
`;

export const Button = styled.div`
display: flex;
justify-content: center;
background-color: ${({theme}) => theme.colors.primary};
color: ${({theme}) => theme.colors.secondary};
padding: 12.5px;
border-radius: 3px;
cursor: pointer;
margin-bottom: 6px;
`
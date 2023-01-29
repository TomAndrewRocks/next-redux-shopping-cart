import styled from "styled-components";
const { motion } = require("framer-motion");

export const Wrapper = styled(motion.div)`
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100%;
  background: rgba(0, 0, 0, 0.35);
  z-index: 99999999;
  display: flex;
  justify-content: flex-end;
`;

export const CartMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-top: 40px;
  width: 100%;
  span {
    font-size: 24px;
    font-weight: 600;
  }
`;

export const CartStyled = styled(motion.div)`
  width: 30%;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary};
  padding: 0rem 5rem 2rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  overflow-y: scroll;
  position: relative;

  @media screen and (max-width: 1650px) {
    padding: 0rem 2rem 2rem;
  }

  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;

export const Card = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: white;
  padding: 2rem;
  margin: 2rem 0rem;
  img {
    width: 8rem;
  }

  @media screen and (max-width: 1280px) {
    align-items: center;
    flex-direction: column;
  }
`;

export const Cards = styled(motion.div)``;

export const CardInfo = styled(motion.div)`
  width: 50%;
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const EmptyStyled = styled(motion.div)`
  position: absolute;
  top: 0%;
  left: 50%;
  transform: translate(-50%, 0%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;

  h1 {
    font-size: 2rem;
    padding: 2rem;
    text-align: center;
  }

  span {
    display: none;
  }

  @media screen and (max-width: 1024px) {
    span {
      background: ${({ theme }) => theme.colors.price};
      color: ${({ theme }) => theme.colors.secondary};
      width: 204px;
      height: 40px;
      border-radius: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 15px;
      margin-top: 20px;
      cursor: pointer;
    }
  }
`;

export const Quantity = styled(motion.div)``;

export const CartItems = styled.div`
  overflow-x: hidden;
  overflow-y: auto;
`;
export const Submit = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  height: 80px;
  margin: 10px 0;
`;
export const Checkout = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  height: 60px;
  position: relative;
  top: 15px;
  background-color: ${({ theme }) => theme.colors.text};
`;
export const Total = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  font-weight: 600;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const HeaderCart = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

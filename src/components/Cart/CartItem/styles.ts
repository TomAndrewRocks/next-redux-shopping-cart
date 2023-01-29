import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  width: 325px;
  margin: 12px 0;
  height: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;
  padding: 0 0.5rem 0 0.1rem;
`;

export const Title = styled.h3`
  font-size: 14px;
  width: 110px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
`;
export const Total = styled.h3`
  width: 80px;
  padding-top: 10px;
  color: ${({ theme }) => theme.colors.text};
`;
export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  overflow-x: hidden;
  overflow-y: auto;
  height: 25px;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.text};
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: 5px;
  width: 60px;
  border-radius: 6px;
  span {
    font-size: 13px;
    cursor: pointer;
  }

  small {
    font-weight: 300;
  }
`;

export const Length = styled.p`
  font-size: 13px;
  font-weight: 400;
`;

export const Qty = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-right: 5px;
  font-weight: 600;
  h5 {
    font-size: 8px;
    margin-bottom: 3px;
    font-weight: 500;
    position: relative;
    right: 22px;
    color: ${({ theme }) => theme.colors.text};
  }
`;


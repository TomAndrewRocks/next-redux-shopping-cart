import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    font-family: 'Montserrat', sans-serif;
  }
  body {
    background: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
  }
  a {
    color: ${(props) => props.theme.colors.primary};
  }


  &::-webkit-scrollbar {
    display: none;
  }

  .bouncing-loader {
  display: flex;
  justify-content: center;
  margin: 10rem 0 25rem;
  }

 .bouncing-loader>div {
  width: 8px;
  height: 8px;
  margin: 3px 3px;
  border-radius: 50%;
  background-color: #a3a1a1;
  opacity: 1;
  animation: bouncing-loader 0.6s infinite alternate;
 } 

 
.bouncing-loader>div:nth-child(2) {
  animation-delay: 0.2s;
}

.bouncing-loader>div:nth-child(3) {
  animation-delay: 0.4s;
}

.cart-close {
  position: relative;
  right: 15px;
  top: 3px;
  width: 25px;
  height: 25px;
  font-size: 1px;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    font-size: 11px!important;
  }
}

@keyframes bouncing-loader {
  to {
    opacity: 0.1;
    transform: translateY(-6px);
  }
}

`;

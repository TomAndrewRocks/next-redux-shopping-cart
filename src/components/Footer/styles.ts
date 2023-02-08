import styled from "styled-components";


export const FooterDiv = styled.footer`
width: 100%;
height: 30px;
display: flex;
align-items: center;
justify-content: center;
font-size: 12px;
font-weight: 400;
position: absolute;
bottom: 0;
background-color: ${({theme}) => theme.colors.footer};
`
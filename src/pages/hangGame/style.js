import { styled } from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #27b1be;
`

export const ContainerGame = styled.div`
    img {
        width: 300px;
        height: 366.67px;
        margin-top: 40px;
        margin-left: 38px;
    }
`;

export const ChooseWord = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
    width: 200px;
    height: 60px;
    background: #facc2e;
    border-radius: 8px;
    position: absolute;
    left: 1000px;
    top: 89px;
    p {
        font-family: 'Poppins';
        font-weight: 500;
        font-size: 20px;
        color: black;
        margin: auto;
    }
    &:hover{
        cursor: pointer;
        filter: brightness(107%)
    }
`;

export const ChoosenWord = styled.div`
font-weight: 700;
font-size: 50px;
line-height: 68px;
display: flex;
align-items: center;
justify-content: flex-end;
margin-right: 200px;
margin-top: -150px;
text-align: center;
color: ${props => props.win ? "#facc2e" : ""};
color: ${props => props.lose ? "#FF0000" : ""};
letter-spacing: 10px;
`;

export const LetterStyled = styled.button`
width: 40px;
height: 40px;
background: ${props => props.disabled ? "#9FAAB5" : "black"};
border: 1px solid #7AA7C7;
border-radius: 3px;
display: flex;
align-items: center;
justify-content: center;
text-align: center;
color: ${props => props.disabled ? "#f5f5f5" : "#ececec"};
font-size: 16px;
margin-right: 12px;
margin-bottom: 11px;
:hover {
    cursor: ${props => props.disabled ? "not-allowed" : "pointer"}
}
`

export const ContainerLetters = styled.div`
width: 700px;
display: flex;
flex-wrap: wrap;
margin: 0 auto;
padding-top: 30px;
padding-bottom: 56px;
`

export const BackButton = styled.a`
    width: 200px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    top: 20px;
    left: 50px;
    padding-left: 40px;
    background: #facc2e;
    color: black;
    border: none;
    cursor: pointer;
    border-radius: 8px;
    p {
        font-family: 'Poppins';
        font-weight: 500;
        font-size: 20px;
        color: black;
        margin: auto;
    }
    &::before {
        content: "<";
        font-size: 20px;
        position: absolute;
        top: 50%;
        left: 5px;
        transform: translateY(-50%);
        font-weight: bold;
    }
    &:hover{
        filter: brightness(107%)
    }
`
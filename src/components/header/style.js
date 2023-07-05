import { styled } from "styled-components";

const HeaderStyled = styled.div`
width:100%;
height: 140px; 
background-color: #facc2e;
position: fixed;
top: 0;
left: 0;
display: flex;
align-items: center;
z-index: 10;
justify-content: space-around;
visibility: ${props => props.visible ? "visible" : "hidden"};
h1 {
    color: #FFFFFF;
    font-size: 29px;
    font-family: 'Poppins';
    font-weight: 500;
}
div {
    width: 600px;
    display: flex;
    justify-content: space-between;
    button {
        display: inline-block;
        position: relative;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        color: #FFFFFF;
        border: none;
        background-color: transparent;
        cursor: pointer;
    }

    .activated::after {
        content: '';
        position: absolute;
        width: 100%;
        transform: scaleX(0);
        height: 2px;
        bottom: 0;
        left: 0;
        background-color: #FFFFFF;
        transform-origin: bottom right;
        transition: transform 0.25s ease-out;
    }

    .activated:hover::after {
        transform: scaleX(1);
        transform-origin: bottom left;
    }
    .disabled {
        text-decoration: underline;
        cursor: default;
        font-weight: 600;
    }
}
@media (max-width: 600px) {
    height: 80px;
    flex-wrap: wrap;
    h1 {
        font-size: 15px;
    }
    div button {
        font-size: 12px;
    }
    .game {
        display: none;
    }
}
`;

export default HeaderStyled;
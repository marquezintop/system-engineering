import { styled } from "styled-components";

export const Container = styled.div`
    margin-top: 140px;
    width: 100%;;
    height: 100%;
    background-color: #facc2e;
    display: flex;
    flex-direction: column;
    position: absolute;
    h1 {
        font-size: 40px;
        color: black;
        margin-bottom: 15px;
        font-weight: 600;
        font-family: 'Poppins';
    }
    h2 {
        width: 700px;
        font-size: 26px;
        color: black;
        font-family: 'Poppins';
        line-height: 40px;
    }

`

export const EngineerIntroduction = styled.div`
    width: 100%;
    height: 600px;
    display: flex;
    flex-direction: column;
    padding-left: 100px;
    position: absolute;
`

export const EngineerImage = styled.img`
    position: relative;
    align-self: flex-end;
    right: 0;
    top: 100px;
    width: 360px;
    height: 430px;
    z-index: 2;
`

export const EngineerTopics = styled.ul`
    padding-top: 50px;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #ececec;
    z-index: 1;
    text-align: center;
    li {
        width: 600px;
        text-align: center;
        font-family: 'Poppins';
        margin-bottom: 20px;
    }
    span {
        font-weight: 500;
        font-family: 'Poppins';
    }
`
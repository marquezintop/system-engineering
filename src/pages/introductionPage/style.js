import { styled } from "styled-components";

export const Container = styled.div`
    margin-top: 140px;
    width: 100%;;
    height: 100%;
    align-items: center;
    background-color: #facc2e;
    display: flex;
    flex-direction: column;
    position: relative;
    h1 {
        font-size: 42px;
        color: black;
        margin-bottom: 15px;
        font-weight: 600;
        font-family: 'sans-serif';
    }
    h2 {
        width: 60%;
        font-size: 26px;
        color: black;
        font-family: 'sans-serif';
        line-height: 40px;
    }
    @media (max-width: 600px) {
        margin-top: 80px;
        h1 {
            font-size: 30px;
        }
        h2 {
            font-size: 18px;
            width: 80%;
        }
    }
`

export const EngineerIntroduction = styled.div`
    max-width: 80%;
    display: flex;
    justify-content: center;
    padding-bottom: 20px;
    position: relative;
    @media (max-width: 600px) {
        flex-wrap: wrap;
    }
`

export const EngineerImage = styled.img`
    width: 25%;
    height: auto;
    z-index: 2;
    @media (max-width: 600px) {
        width: 100%;
    }
`

export const ContainerEngineerTopics = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: #ececec;
    padding-bottom: 40px;
`

export const EngineerTopics = styled.ul`
    padding-top: 50px;
    max-width: 80%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #ececec;
    z-index: 1;
    text-align: center;
    li {
        font-size: 24px;
        text-align: center;
        font-family: 'sans-serif';
        margin-bottom: 20px;
    }
    span {
        font-weight: 600;
        font-family: 'sans-serif';
    }
    @media (max-width: 600px) {
        li {
            max-width: 100%;
        }
    }
`
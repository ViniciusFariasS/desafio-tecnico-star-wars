import styled from "styled-components";

const FOOTER = styled.footer`
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 86px;
    display: flex;
    justify-content:center;
    align-items: center;
    background: #FFF;
`

const FOOTERCONTENT = styled.div`
display: flex;
align-items: center;
width: 735.19px;
height: 81px;
span{
        font-size: 14px;
        font-family: 'Lato', sans-serif;
        font-weight: 500;        
        width: 528px;
    }
    img{        
        width: 84.19px;
        height: 37.55px;
    }
`

export {
    FOOTER,
    FOOTERCONTENT
}
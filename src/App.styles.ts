import styled from "styled-components";
import { IAppSC } from "./App.interface";

const APP = styled.div<IAppSC>`
    background-image: url(${props => props.imageUrl});
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;    
    align-items: center;
    width: 100% ;
    height: 100vh;
    .app_logo{
        margin-top: 75px;
        color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap:17px;
        span {
            font-size: 16px;
        }
        img{
            max-width: 321.55px;
        }
    }
`

export {
    APP
}
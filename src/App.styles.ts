import styled from "styled-components";
import { IAppSC } from "./App.interface";

const APP = styled.div<IAppSC>`
    background-image: url(${props => props.imageUrl});
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    width: 100% ;
    height: 100vh;
`

export {
    APP
}
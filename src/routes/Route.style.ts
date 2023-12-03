import styled from "styled-components";

import { IRouteSC } from "./Route.interface";

const ROUTE = styled.div<IRouteSC>`
    background-image: url(${props => props.imageUrl});
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    align-items: center;    
    color: white;
    width: 100% ;
    height: 100vh;
`

export {
    ROUTE,
}
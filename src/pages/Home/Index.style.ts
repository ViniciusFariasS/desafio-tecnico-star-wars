import styled from "styled-components";

import { IHomeSC } from "./Index.interface";

const HOME = styled.div<IHomeSC>`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    .home_logo{
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
    HOME,
}
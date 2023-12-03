import styled from "styled-components";

const SEARCH = styled.div`
    color: white;
    position: relative;
    width: 800px;
    height: 402px;
    border-radius: 10px;
    display: flex;
    justify-content: start;      
    background-color: rgba(0,0,0,0.7);
    margin-top: 58.59px;
    .spaceship {
        position: absolute;
        top: 208px;
        left: -133px;
    }             
    .search_form{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        span{
            text-align: center;
            width: 292px;
            height: 97px;
            font-size: 20px;
            font-weight: 400;                
        }
        input{
            margin-top: 10px;
            border: none;
            text-align: center;
            height: 40px;
            border-radius: 5px;                
            padding: 0px;
            width: 301px;
            font-size: 14px;
            font-family: 'Lato', sans-serif;
        }
        button{
            display: flex;
            justify-content: center;
            align-items: center;
            gap:7px;
            background-color: #DE1212;
            width: 301px;
            height: 40px;
            margin-top: 7px;
            border-radius: 5px;
            font-family: 'Lato' sans-serif;     
            color: white;
            font-size: 16px;
            font-weight: 700;
            border: none;
        }
        &-filter{
            width: 240px;
            height: 40px;
            margin-top: 7px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-family: 'Lato' sans-serif;
            .filter{                
                display: flex;
                align-items: center;
                gap: 6.77px;
                span{
                    display: flex;
                    align-items: center;
                    width: 49px;         
                    height: auto;
                    font-size: 14px;
                    font-weight: 700;
                }
            }
            .filter-type{
                display: flex;
                align-items: center;
                gap: 5px;
                span{                     
                    width: auto;
                    height: auto;
                    font-size: 14px;
                    font-weight: 400;
                }
            }
        }
    }
    img{
        border-radius: 10px;
    }
`

export {
    SEARCH
}
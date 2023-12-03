import styled from "styled-components";

const RESULT = styled.div`
    width: 592px;
    height: 381px;
    border-radius: 10px;
    background-color: #FFFFFF;
    margin-top: 54.59px;
    font-family: 'Montserrat', sans-serif;
    display: flex;
        flex-direction: column;
        align-items: center;
    .result{
        &_planet{
            margin-top: 31.08px;
            margin-left: 26.08px;
            display: flex;
            align-items: center;
            align-self: start;
            gap: 6.52px;
            img{
                width: 82.409px;
                height: 82.409px;
            }
            &--name{
                display: flex;
                flex-direction: column;
                color: #000;                
                .text_planet{
                    font-size: 14px;                
                    font-weight: 400;                
                }
                .name_planet{                
                    text-align: center;            
                    font-size: 18px;                
                    font-weight: 900;
                    text-transform: uppercase;
                }
            }
            &--data{
                margin-left: 38px;
                .data-planet{
                    display: flex;
                    height: 24px;
                    font-size: 14px;
                    img{
                        margin-right: 16px;
                        width: 21px;
                        height: 21px;                        
                    }
                    .text_data{                                        
                        font-weight: 700;                    
                    }
                    .value_data{                    
                        font-weight: 400;
                    }
                }
            }
        }
        &_details {
            &--residents{
                margin-top: 24px;
                width: 503px;
                height: 98px;
                background-color: #F1F1F1;
                border-radius: 8px;      
                padding-top: 16px;
                padding-left: 14px;
                padding-right: 21px;
            }    
            &--films{
                margin-top: 9px;
                width: 503px;             
                height: 77px ;
                background-color: #F1F1F1;
                border-radius: 8px;                
                padding-top: 16px;
                padding-left: 14px;
                padding-right: 21px;        
            }    
            &--title{      
                display: flex;
                align-items: center;
                border-bottom: 1px solid #909090;
                padding-bottom: 6px;
                margin-bottom: 18px;
                img{
                    margin-right: 6.32px;
                }
                .details-text{
                    font-size: 14px;
                    font-weight: 700;
                }
            }
            &-list{
                    display: block;
                    font-size: 14px;
                    font-weight: 400;
                    width: 416px !important;
                    margin-top: 18px;
                }
        }
    }
`

export {
    RESULT
}
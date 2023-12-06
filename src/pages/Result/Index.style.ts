import styled from "styled-components";

const RESULT = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 592px;
    @media screen and (max-width: 480px) {
        width: 300px;
        a{            
            margin-top: 37px !important;
            color: #FFF;            
            font-size: 14px;        
            font-weight: 500;
            align-self: unset;
        }
    }
    a{
        cursor: pointer;
        img{
            margin-right: 11.32px;
        }
        align-self: end;
        margin-top: 108px;
        color: #FFF;
        font-family: Montserrat;
        font-size: 14px;        
        font-weight: 500;
    }

`

const RESULTCONTENT = styled.div`
    width: 592px;
    height: 381px;
    border-radius: 10px;
    background-color: #FFFFFF;
    margin-top: 54.59px;
    font-family: 'Montserrat', sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;

    
    @media screen and (max-width: 480px) {
        width: 355px;
        min-height: 462px;
        padding-bottom: 16px;
        margin-top: 45.9px;
        .result{
            &_planet{
                flex-direction: column;
                align-items: start !important;
                width: 100%;
                &--name{
                    margin-top: 12px;
                }
                &--data{                
                    padding-left: 45px;
                    max-width: 240px;
                    display: flex;
                    flex-direction: column;                    
                }
            }
            &_details {
                &--residents{
                    width: 300px !important;
                    height: auto !important;
                    padding-top: 10px !;
                    padding-left: 17px;
                    padding-right: 13px;
                }
                &--films{
                    margin-top: 9px;
                    width: 300px !important;                                 
                    background-color: #F1F1F1;
                    border-radius: 8px;                
                    padding-top: 16px;
                    padding-left: 17px;
                    padding-right: 13px;   
                }
                &--title{ 
                    margin-bottom: 4px !important;
                }
                &-list{
                        display: block;                        
                        font-weight: 400;
                        max-width: 300px !important;
                        margin-top: 4px !important;
                }
            }
        }
    }


    .loading{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
    } 
    .result{
        &_planet{
            margin-top: 31.08px;
            margin-left: 26.08px;
            display: flex;
            align-items: center;
            align-self: start;
            gap: 6.52px;
            &--planet {    
                display: flex;
                gap: 6.52px;
            }
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
                    display: flex;
                    align-items: center;
                    text-transform: uppercase;
                }
            }
            &--data{
                margin-left: 38px;
                .data-planet{
                    display: flex;
                    min-height: 24px;
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
                height: 77px;
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
    RESULT,
    RESULTCONTENT
}
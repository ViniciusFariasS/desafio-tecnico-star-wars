import React, { useState } from 'react'
import { RESULT } from './Index.style'
import { Result } from '../../components/Result/Result';
import ArrowLeft from '../../assets/images/arrowLeft.svg'

const ResultPage = () => {
    return (
        <RESULT>
            <Result />
            <a>
                <img src={ArrowLeft} alt="" />
                Voltar
            </a>
        </RESULT>
    )
}

export {
    ResultPage
}